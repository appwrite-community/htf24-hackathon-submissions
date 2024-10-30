# Hackathon Submission: Scrummie-Poker

## GitHub handles of Team Members

- @pikami

## Project Title

Scrummie-Poker

## Project Description

Scrummie-Poker is a collaborative estimation tool for agile teams, designed to make story point estimation easy and accessible.

Users can create estimation sessions, invite teammates to join, and collaboratively estimate tickets. Tickets can either be created within the app or imported, and the team can vote on estimates in real time. It’s a modern take on the classic scrum poker approach.

## Inspiration behind the Project

Many existing scrum poker apps are paid, and I wanted to create a free alternative that my team—and others—could use. I was also eager to explore Appwrite and thought this project would be an ideal way to leverage its realtime capabilities while solving a practical problem.

## Tech Stack

The frontend is built with React using Vite, and the following libraries:

- **yup**: For form validation
- **ckeditor5**: To provide a rich text editor for tickets
- **papaparse**: For parsing CSV files during ticket import
- **showdown**: To convert markdown from imported CSVs into HTML
- **tailwindcss**: For styling the UI
- **tanstack forms**: For form state management
- **tanstack router**: To manage application routes

The backend is powered by Appwrite

### Usage of Appwrite

- **Auth**: Facilitates user signups and guest accounts management
- **Databases**: Stores all estimation session and ticket-related data
- **Realtime API**: Provides real-time updates during estimation sessions, ensuring smooth interaction during voting and ticket updates
- **Functions**: Manages session invitations and dynamically updates usernames in session data, ensuring user lists are always current

## Project Repo

https://github.com/pikami/scrummie-poker

## Demo Video/Photos/Link

A video demo can be viewed here:
https://youtu.be/jpSDdylpwmk

The application can also be reached using this link: https://poker.y3.lt

## Anything Else You Want To Share With Us?

Working with Appwrite was an exciting experience, especially since it was my first time using a backend-as-a-service platform. It provided me with all the tools I needed to make Scrummie-Poker come to life, and I thoroughly enjoyed the process.
