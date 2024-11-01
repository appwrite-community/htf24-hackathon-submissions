# Hackathon Submission: app-comment  


## GitHub handles of Team Members  
@atybdot


## Project Title
app-comment: elevating user engagement

## Project Description     
seamlessly integrate a comment section into your React or Astro project with app-comment. This tool simplifies the process of creating and embedding a comment feature, allowing you to enhance user engagement without the technical hassle.  
No more headaches with complicated setups—just plug it in and let your users chat.It comes with features like real-time updates, user authentication.   

### Features
 - customizable
 - Real-time updates
 - Not much setup required
 - Easy Onboarding
- Easily integrate 

## Inspiration behind the Project  

The inspiration for app-comment arose from observing the challenges bloggers face when trying to foster community engagement. Many existing solutions are either too complex or lock behind a paywall. We wanted to create a straightforward tool that not only simplifies the integration process but also enriches the user experience. By leveraging Appwrite's powerful services, we aimed to empower bloggers to create vibrant discussions around their content.


## Tech Stack    

- React for components
- Appwrite for back-end services
- tailwind for styling
- biome - for consistent styling


### Usage of Appwrite

- Auth :  To keep things secure and let users sign up easily
- Database : For storing comments, ensuring they load fast and are easy to manage.
- Buckets : For user to upload custom pictures for their avatar  
// is not implemented yet


## Project Repo  
[github repo](https://github.com/atybdot/app-comment)


## Demo Video/Photos/Link
[deployed link](https://app-comment.vercel.app/)  
  
home page
![](https://i.ibb.co/ZTmMdcz/screenzy-1730369746745.png)  

homepage after user login
![](https://i.ibb.co/VH8SKTM/screenzy-1730369982150.png)  
  
login
![](https://i.ibb.co/3r7DfcK/screenzy-1730370125971.png)  
  
sign-up
![](https://i.ibb.co/jZnFLvF/screenzy-1730370139127.png)  

editing comment
![](https://i.ibb.co/g7S2dL6/screenzy-1730370053341.png)

## Anything Else You Want To Share With Us?
### Project Goal
The eventual goal of this project is to add comment section in your blogs / project with as little hassle as possible using appwrite.  

such that you just install this as
```bash
npm i app-comment
```
then in your layout project
```jsx
// layout.jsx
import CommentSection from "app-comment"
.... your code
<CommentSection postId={slug-of-your-post}>
```
This pkg is available on npm but it has error when importing  
you can check the main branch for npm pkg code
[or check app-comment on npm](https://www.npmjs.com/package/app-comment)  

---

To make onboarding more easy i'm also developing a cli-app that will help users to integrate app-comment easily in their existing project   
e.g :
```bash
npm @app-comment/cli
```
this will ask bunch of questions and then integrate app-comment in the existing project