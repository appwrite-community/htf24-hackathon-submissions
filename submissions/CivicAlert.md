# Hackathon Submission: <PROJECT_NAME>

## GitHub handles of Team Members

@chaitanyak175
@Aditya-Karmalkar
@GangaPawale
@ShreyasGandhi0607

## Project Title

CivicAlert

## Project Description

CivicAlert is a mobile app designed to empower communities by allowing users to submit complaints about local issues. Users can upvote complaints they support, and once a complaint reaches five or more upvotes, it is automatically forwarded to the government. Complaints that reach the required upvote threshold are removed from the app, indicating that they’ve been forwarded for attention. Additionally, if a complaint receives a threshold number of downvotes (indicating it may be fake or inappropriate), it is automatically removed from both the app and the database.

## Inspiration behind the Project

The inspiration behind CivicAlert is the need for a streamlined platform that allows communities to bring attention to local issues effectively. Often, issues that affect multiple people go unnoticed. CivicAlert addresses this gap by amplifying public concerns and enabling users to support each other’s complaints, making it easier for authorities to identify and address issues that matter most to citizens.

## Tech Stack

Flutter for building the mobile app.
Appwrite for backend services, user authentication, database, and file storage.
Python script deployed on a server to monitor the Appwrite database. This script automatically sends an email to the government for complaints that cross the five-upvote threshold, removes such complaints from the app, and also removes complaints with a high number of downvotes from the app and database.

## Project Repo

https://github.com/chaitanyak175/CivicAlert

## Demo Video/Photos

Video : https://youtu.be/7eY1qOHjuUA

Photos : https://drive.google.com/drive/folders/1OGgpbdBZWQm9LaV0Q5QBlx1Y5zdA4lca?usp=sharing
