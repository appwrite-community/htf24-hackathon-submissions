import sqlite3


# Connect to SQlite
connection=sqlite3.connect("student.db")

# Create a cursor object to insert the record,create table

cursor=connection.cursor()

# Create the table

table_info="""
Create table STUDENT(NAME VARCHAR(25),CLASS VARCHAR(25),
SECTION VARCHAR(25),MARKS INT);

"""
cursor.execute(table_info)

# Insert Some more records

cursor.execute('''Insert Into STUDENT values('Manohar','Machine Learning','A',90)''')
cursor.execute('''Insert Into STUDENT values('Mubarak','Machine Learning','B',100)''')
cursor.execute('''Insert Into STUDENT values('Aravind','Data Science','A',86)''')
cursor.execute('''Insert Into STUDENT values('Vikram','Data Science','C',60)''')
cursor.execute('''Insert Into STUDENT values('Joe','DEVOPS','A',35)''')
cursor.execute('''Insert Into STUDENT values('Nidhi','Data Science','C', 70)''')
cursor.execute('''Insert Into STUDENT values('Tillu','Data Science','C',30)''')

# Display all the records
print("The inserted records are")

data=cursor.execute('''Select * from STUDENT''')

for row in data:
    print(row)

# close the connection

connection.commit()    
connection.close()
