# Hackathon Submission: QuickShare

## GitHub handles of Team Members  
- [@mayank0274](https://github.com/mayank0274)

## Project Title

QuickShare

## Project Description    

QuickShare is file sharing web application , with QuickShare you can share files via uploading and converting them into links that remains valid for 24 hrs . In addition to this we can password protect download i.e we can set a pin and user will be required to enter pin in order to download that file.

## Inspiration behind the Project  
As a student, I am always looking for ways to improve my productivity and collaboration. I often find myself needing to share files with classmates, and other students. However, traditional file sharing methods can be cumbersome and time-consuming.
With QuickShare we can share files quickly as there is no need of repetitive signup/login on different platforms , take care of your privacy as you can password protect download and expirable links.I believe that QuickShare will be a valuable tool for students and professionals alike. It will help them to share files quickly and easily.

## Tech Stack    

- Next.js 15 for frontend and creating api's
- Chakra UI for styling

### Uses of appwrite

- **Database** :- For storing file entry records and passowrds(in hash format)
- **Storage** :- for storing files
- **Functions** :- I used two clean up functions which runs everyday at 12:00 am
    - **Databse cleanup** => Delete entries from databse which are 24 hrs old
    - **Storage cleanup** => Delete files from storage bucket which are 24 hrs old

## Project Repo  

Github repo : [QuickShare](https://github.com/mayank0274/quick-share)

## Demo Video/Photos  

- Live preview :- https://quick-share-yjx1.vercel.app/


https://github.com/user-attachments/assets/0199879e-b712-46f3-aa46-98e4aaf45bf1

