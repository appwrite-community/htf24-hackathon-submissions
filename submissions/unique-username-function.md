# Hackathon Submission: Unique Username Function


## GitHub handles of Team Members  
- @soranoo

## Project Title
Appwrite-Unique-Username-Function

## Project Description    
A "Changeable Unique Username" is a common feature in many applications. 📝

How to make it? Just check the username availability in the database when the username input field is changed, right?

But, what if there are multiple users checking the same username at the same time? 🤔 All of them will get the same result, which is the username is available. This is because the username is not yet consumed by any user. Then, when they submit the form, the same username is likely to be used by multiple users. 🚨

🔑 The key point is, how to make sure the username is unique and able to deal with concurrent checking.

This function allows you to check if a username is available or not with real-time checking compatibility instead of checking the availability of the username when the user submits the form.

## Inspiration behind the Project  
I had a REALLY hard time username checking in a project I worked on. It took me a lot of time to figure out how to make it work properly. I thought it would be great to have a function that can be used in any project to check the username availability with concurrent checking compatibility. 🚀

## Tech Stack    
Nothing but Appwrite and Typescript! 🚀

### Usage of Appwrite
- Appwrite Functions
  1. To check the username availability.
  2. To remove related username reservations when the user submits the username to take.
- Appwrite Databases
  1. To store the username reservations.

<!--

- Appwrite Databases

I used Appwrite Databases to...

- Appwrite Storage

I used Appwrite Storage to...

.
.
.

-->

## Project Repo  
[Appwrite-Unique-Username-Function](https://github.com/soranoo/appwrite-unique-username-function)

## Demo Video/Photos/Link
Lets test with different browsers simultaneously.

[Demo](https://appwrite-unique-username-function.vercel.app/)

## Anything Else You Want To Share With Us?

### How It Work
![img](https://github.com/soranoo/appwrite-unique-username-function/blob/main/docs/workflow.svg)