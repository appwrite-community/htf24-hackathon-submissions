# **Hackathon Submission: Patronus**
=====================================

### **Team Member's GitHub Handle**
- [@Vasu1712](https://github.com/Vasu1712)

### **Project Title**
#### Patronus

### **Project Description**
Patronus is your personalized web assistant designed to scour the internet for the cheapest flight tickets matching your query, saving you valuable time from hopping between different operator websites.

1. **Authentication**: Securely log in to access the intuitive calendar-based UI.
2. **Setup Your Journey**:
   - Select travel dates via our interactive calendar.
   - Choose your airports.
   - Specify the number of passengers.
3. **Request Flight Tickets**: With your preferences set, simply submit your request.
4. **Patronus at Work**: Receive the cheapest available flight tickets directly in your mailbox.

### **Inspiration behind Patronus**
This project was born out of personal frustration - the tedious process of sifting through numerous flight options, wasting hours in search of the best deal. Patronus streamlines this process, saving you time, energy, and money.

### **Tech Stack**
#### Frontend
- **Built with**: NextJS
- **Key Libraries**:
  - **`react-calendar`**: For developing an intuitive Calendar UI to book tickets.
  - **`react-select`**: To track date changes seamlessly.
  - **`huggingface-inference`**: Integrates Mistral LLM for enhanced flight query processing.
  - **`Amadeus API`**: Provides comprehensive flight information to the Mistral LLM for accurate responses.
  - **`tailwindcss`**: For a sleek and responsive UI design.

#### Backend
- **Powered by**: Appwrite

### **Usage of Appwrite**
- **Authentication (Auth)**: Manages user signups and guest accounts with ease.
- **Databases**: Securely stores flight ticket queries from the NextJS frontend.
- **Functions**: Processes queries through the ML model and integrates with Mailgun for email responses.
- **Messaging**: Utilizes Mailgun to send detailed flight ticket information (LLM response) to users.

### **Project Repository**
[https://github.com/Vasu1712/Patronus.git](https://github.com/Vasu1712/Patronus.git)


## Demo Video/Photos/Link

A video demo can be viewed here:


The application can also be reached using this link: 


## Future Prospects for Patronus

One of the most important prospect for Patronus is to build an in house LLM(or SML) ML model and train it on historical flight information using Amedus API and other details so that it can successfully predict the lowest flight ticket date and time and send the booking link to user mail inbox.

## Anything Else You Want To Share With Us?

Appwrite has been one of the most sought after organisations that I have been following from Hacktober'22, I have read several of Dennis Ivy's blogs and followed appwrite over twitter and I have seen AppWrite's growth and when I saw this time they are orgainsing a hackathon, it was a no brainer for me to get around. This is the first time I used any BaaS and I would have to admit that AppWritedoes makes life pretty easy for full-stack devs that too with features to scale and as you say 'build like a team of hundreds'.  I really like product, the idea and the problem appwrite is solving and would love to be a part this organization be it open-source, full-time or freelance.