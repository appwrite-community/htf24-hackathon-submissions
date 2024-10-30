# Hackathon Submission: <PROJECT_NAME>

## GitHub handles of Team Members  
@Rafiea-Ashraf

## Project Title
AI_Based False Alarm Detector

## Project Description    
_What have you built during the hackathon?_

I built an AI-powered False Alarm Detector designed to make fire safety smarter and more reliable. Using a NodeMCU board linked with various sensors, I created a system that monitors temperature, gas levels, and motion in real time. With the help of a Random Forest model, it can distinguish real fire threats from false alarms, like cigarette smoke, reducing unnecessary alerts. The system displays live data on a web interface, allowing users to monitor conditions, get alerts, and review historical data for proactive safety.

## Inspiration behind the Project  
_What is the story behind this project? Why did you choose to work on this specific idea?_

The inspiration for this project came from seeing the limitations and costs associated with traditional fire detection systems, especially in environments where false alarms are frequent. False alarms can lead to unnecessary panic, wasted resources, and expensive maintenance, particularly when it’s hard to pinpoint which sensor might be malfunctioning.

With this project, I wanted to tackle those issues by creating a smarter, AI-powered system that doesn’t just detect potential fire hazards but also identifies sensor malfunctions. This allows users to replace only faulty components rather than the entire system, significantly reducing maintenance costs. The idea is to provide reliable, real-time safety monitoring while keeping expenses down—making fire safety more accessible and efficient.

## Usage of Appwrite

I used Appwrite Databases to store and manage all sensor readings, which made it super easy to access real-time data and check past records for analysis. Appwrite Auth was also key to securely manage user logins, so only authorized people can monitor and manage the system. This combination made the project not only secure but also really user-friendly, allowing quick access to crucial data wherever it’s needed.
## Tech Stack    
_How have you built this project? Mention the technologies/methods/platforms you used to build your project_

I built this project using a NodeMCU ESP8266, integrated with sensors for temperature, gas, and motion. Arduino IDE handles the hardware code, while a Random Forest model trained on historical data distinguishes real alarms from false positives. The web interface, powered by MySQL, provides live monitoring, alerts, and historical data for efficient and user-friendly fire safety management.

## Project Repo  
_Share a public repo link of your project_

https://github.com/Rafiea-Ashraf/Hacktoberfest

## Demo Video/Photos  
_Share a 2-3 minute demo video of your project_

https://drive.google.com/file/d/19ntl3gqV29ntzoW4O_hkwRnRq2VUgW5L/view?usp=sharing
