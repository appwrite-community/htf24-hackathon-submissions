from dotenv import load_dotenv
import streamlit as st#
import os
import sqlite3
import google.generativeai as genai
import pandas as pd

# Configuration our API Key
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

load_dotenv() ## load all the environemnt variables

# Function to Load the Google Gemini Module and Providw sql query as response
def get_gemini_response(question,prompt):
    model=genai.GenerativeModel('gemini-pro')
    response=model.generate_content([prompt[0],question])
    return response.text

# Function to retrieve the query from the sqllit database
def read_sql_query(sql,db):
    conn=sqlite3.connect(db)
    cur=conn.cursor()
    cur.execute(sql)
    rows=cur.fetchall()
    conn.commit()
    conn.close()
    for row in rows:
        print("query",row)
    return rows

# Define your Prompt
prompt = [
    """
    You are an expert in converting English questions to SQL query!
    The SQL database has the name STUDENT and has the following columns - NAME, CLASS, 
    SECTION \n\nFor example,\nExample 1 - How many entries of records are present?, 
    the SQL command will be something like this SELECT COUNT(*) FROM STUDENT ;
    \nExample 2 - Tell me all the students studying in Data Science class?, 
    the SQL command will be something like this SELECT * FROM STUDENT 
    where CLASS="Data Science"; 
    also the sql code should not have ``` in beginning or end and sql word in output

    """
]

# Stream App framework
st.set_page_config(page_title="I can Retrieve Any SQL query")
st.header("Gemini Pro: AI-Powered SQL Insights")

# Display student details from the database
st.subheader("Student Details:")
student_rows = read_sql_query("SELECT * FROM student", "student.db")
student_df = pd.DataFrame(student_rows, columns=["Name", "Class", "Section", "Marks"])
st.dataframe(student_df)

#Input from non sql developers
question=st.text_input("Input: ",key="input")

submit=st.button("Ask the Question")

# Display response as a hint


#if Submit is clicked
if submit:
    response=get_gemini_response(question,prompt)
    print(response) # It displays the SQL QUERY SOLVED BY GEMINI RESPONSE USING ENGLISH TEST
    st.caption("The user input above will be converted into the following SQL query by Gemini Pro in the backend and generate the response.")
    st.info(response)
    response=read_sql_query(response,"student.db")
    st.subheader("The Response is")
    for row in response:
        #print(row)
        st.header(row)

