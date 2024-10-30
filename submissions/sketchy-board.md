# Hackathon Submission: Sketchy Board


## GitHub handles of Team Members  

- @dkcoder02

## Project Title

Sketchy Board

## Project Description    
I am creating Sketchy Board, a virtual system flow design tool tailored for engineers. This product enables users to seamlessly design, visualize, and collaborate on system flows. With support for multiple device logins, users can continue their work across devices without missing a beat. Sketchy Board ensures data reliability by storing user data locally and synchronizing it with a backend database, minimizing the risk of data loss. Whether online or offline, users can trust that their designs are always accessible and safe, making Sketchy Board a dependable tool for engineering system flow visualization.


## Inspiration behind the Project  

The story behind Sketchy Board stems from my own experience as an engineer working on complex system designs. I noticed that many existing tools lacked the simplicity and flexibility needed for engineers to quickly sketch and visualize system flows. Often, the available tools were either too cumbersome or didn’t offer robust data management, which could lead to lost progress or difficulty in collaborating across devices.

I chose to work on Sketchy Board to address these challenges by creating a tool that combines ease of use with strong data reliability. With multiple device login support and data synchronization between local storage and a backend database, I wanted to ensure that engineers could design without the fear of losing their work. My goal is to make system flow design accessible, efficient, and seamless for engineers, no matter where they are or what device they use.

## Tech Stack    

I have built **Sketchy Board** using a modern and scalable tech stack. The frontend is powered by **Next.js**, ensuring high performance and responsiveness. I've incorporated **TypeScript** to enhance type safety and maintainability. To handle data validation, I'm using the **Zod schema validation library**, ensuring that all inputs are correct and secure.

For the UI, I've integrated the **Shadcn component library**, which helps create a professional and intuitive interface without much overhead. On the backend, **Appwrite** serves as the backend-as-a-service, managing **user authentication**, **data storage**, and synchronization. This combination of technologies ensures that **Sketchy Board** is reliable, fast, and user-friendly, allowing engineers to focus on designing system flows without worrying about data loss or performance issues.

### Usage of Appwrite
In Sketchy Board, I utilized the following Appwrite products:

- Appwrite Authentication: I used Appwrite's auth services to manage user login and authentication securely. It allows users to access their accounts across multiple devices, ensuring a seamless experience.

- Appwrite Storage: I leveraged Appwrite Storage to manage and store user data efficiently. This ensures that all user data, including system flow designs, is securely saved and can be synchronized between local storage and the backend, providing data consistency and reliability.

These Appwrite services play a crucial role in ensuring secure and robust functionality for Sketchy Board.

## Project Repo  

https://github.com/dkcoder02/sketchy-touch


## Demo Video/Photos/Link

https://sketchy-touch.vercel.app

## Anything Else You Want To Share With Us?

I want to extend a big thank you to the Appwrite team for providing such an incredible platform that made building **Sketchy Board** seamless and efficient. The powerful backend services, especially **authentication** and **storage**, played a huge role in the success of this project. Your continuous support and innovative tools have been essential in bringing this idea to life.

Thank you, Appwrite team!
