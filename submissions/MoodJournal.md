# Hackathon Submission: MoodJournal

## GitHub handles of Team Members  
_Enter the GitHub handles of all your team members (including yourself) as separate bullet points_

- @shloksri

## Project Title
_What is the name of your project?_

MoodJournal

## Project Description    
_What have you built during the hackathon?_


The project I created is a Mood Journal app which has 2 basic functionalities - Adding daily moods of the user, & adding journals created by the user. 

The user can log in using their Google account and write down however they are feeling on that day. The app records the date and time of their entries and the user has access to their previous records.


## Inspiration behind the Project  
_What is the story behind this project? Why did you choose to work on this specific idea?_

The inspiration comes from a personal journey towards understanding mental health. In our fast-paced world, many struggle to articulate their feelings. I wanted to create a simple tool for self-reflection that allows users to log daily moods and write journals about their experiences. This practice fosters awareness and helps identify emotional patterns. Participating in the Appwrite hackathon was a great opportunity to utilize their services, ensuring the app is functional and secure while supporting personal growth and well-being.

## Tech Stack    
_How have you built this project? Mention the technologies/methods/platforms you used to build your project_

This is a Full stack web application. Here is the link - https://health-app-appwrite.vercel.app/

- React for designing the frontend
- Pink Design by Appwrite for styling
- Google for OAuth provider
- Mailgun - configured custom domain mg.shloksri.com to send emails to any user
- Amazon Route53 for configuring the DNS records
- Vercel for deployment to Production

All Appwrite services used :
- __Pink Design by Appwrite__ - The website is designed using the pink-design by appwrite. Most of the css classes used are the default ones present in the design. All components 
- __Auth__ - For allowing users to automatically sign-up/log-in using their Google account. Currently, my project supports only Google as the OAuth2 Provider
- __Databases__ - To store the moods/journals entered by the user. When the user logs in, they will be able to see their previous entered journals and view their details.
- __Functions__ for updating databases and trigger emails on the event of new user registration, thus utilising __Messaging__ feature as well.  
- __Messaging__ - To send emails to the user when they register for the first time.


## Project Repo  
_Share a public repo link of your project_

https://github.com/shloksri/health-app-appwrite

## Demo Video/Photos  
_Share a 2-3 minute demo video of your project_

https://youtu.be/lys5smBx78s
