# Hackathon Submission: wp-appwrite-login

## GitHub handles of Team Members
- kartikmehta8

## Project Title
wp-appwrite-login

## Project Description    
The Appwrite Login Plugin is a WordPress plugin that integrates Appwrite authentication with the WordPress login form. It allows users to log in using their Appwrite credentials and manage login settings through the WordPress admin interface.

### Features

- Adds a **"Use Appwrite Credentials"** button to the WordPress login form.
- Integrates with Appwrite user authentication, allowing users to log in via Appwrite.
- Automatically creates WordPress accounts for Appwrite users if they don't already exist.
- Disables the WordPress **"Send password reset"** link for Appwrite users, as password management is handled via Appwrite.
- Admin settings page for configuring Appwrite credentials (API Key, Project ID, and Endpoint).
- Option to enable or disable the **"Use Appwrite Credentials"** button based on settings.

## Inspiration behind the Project  
The idea behind this project came from the need to integrate modern authentication systems like Appwrite with WordPress. By providing a seamless login experience, this plugin allows developers and site owners to leverage Appwrite's secure authentication while maintaining WordPress's flexibility, enhancing user management and security capabilities. (Appwrite SSO POC)

## Tech Stack    
- **WordPress** – The core platform for plugin development.
- **PHP** – The primary programming language for WordPress plugin development.
- **Appwrite Auth** – A secure authentication platform integrated with WordPress login.
- **Appwrite** PHP SDK – Used to communicate with the Appwrite API.
- **Composer** – Dependency manager for PHP, used to install the Appwrite SDK.
- **HTML** – For creating the login form and admin settings page structure.
- **CSS** – For styling the login button and admin interface.
- **JavaScript** – Used to toggle between Appwrite and WordPress login modes.
- **MySQL** – The database behind WordPress, used to store user data and settings.
- **GitHub** – Version control for project collaboration.

### Usage of Appwrite
- **Appwrite Authentication:** Used to authenticate users via Appwrite credentials and manage login sessions securely.
- **Appwrite PHP SDK:** Facilitates communication with the Appwrite API, enabling secure and efficient user authentication and session management.

## Project Repo  
https://github.com/kartikmehta8/wp-appwrite-login

## Demo Video/Photos/Link
https://youtu.be/YrQfdEbknW8

## Anything Else You Want To Share With Us?
This project is an open-source initiative aimed at enhancing WordPress's authentication by integrating modern systems like Appwrite. It’s built with flexibility in mind, adhering to all WordPress coding standards, allowing developers to easily configure Appwrite alongside WordPress’s native login system.
