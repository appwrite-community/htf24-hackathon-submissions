# Hackathon Submission: PipelineUI

## GitHub handles of Team Members  
- @riccardoperra

## Project Title
PipelineUI

## Project Description    
Pipeline UI is a visual editor for creating and managing GitHub Actions workflows. 
Built with SolidStart and Appwrite, this tool simplifies the process of defining GitHub pipelines 
by allowing users to visually editing and update workflows. 
It automatically generates and updates the YAML configuration files, ensuring a seamless integration with 
GitHub thanks to their language server integration.

## Inspiration behind the Project  
We are using IntelliJ Idea at work, and one day in September my colleague and I were struggling a lot
to create a pipeline for GitLab since that editor doesn't have any type of autocompletion. So why not create a builder from scratch that allows you to create entire workflow files? 🤣

## Tech Stack    
This project has been built with SolidJS and SolidStart with enabled SSR, Vanilla Extract for styling and many other dependencies that 
has been linked in the [Project README](https://github.com/riccardoperra/pipelineui?tab=readme-ov-file#-technical-info)

## Project Repo  

https://github.com/riccardoperra/pipelineui/tree/appwrite

## Demo Video/Photos  

https://pipelineui-appwrite-env.up.railway.app/

> [!NOTE]
> 
> With this project I'll partecipato also in [SolidHack 2024](https://hack.solidjs.com/).
>
> I'm linking here the `appwrite` branch that will not be updated
> until the end of the hackathon.
>
> Also the application has been hosted in `railway` with a custom environment in order to separate
> the two submissions. Currently I made the project public in order to check the deploy status of this environment
>
> Appwrite deployments: https://github.com/riccardoperra/pipelineui/deployments/appwrite
> 
> Appwrite public deployment: https://railway.app/project/8e131c67-73c1-4ab6-9fa4-31dfa6c9000e -> Go to appwrite environment
> 
> Deploy file: https://github.com/riccardoperra/pipelineui/blob/8ba00ed19abf7d1e5884aadcb79d98cc77dcfdea/.github/workflows/deploy.yml#L10
