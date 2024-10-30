# Hackathon Submission: Askinator

## GitHub handles of Team Members  
_Enter the GitHub handles of all your team members (including yourself) as separate bullet points_

- @tanguypouriel
- @BLKKKBVSIK


## Project Title
_What is the name of your project?_

Askinator

## Project Description    
_What have you built during the hackathon?_

Askinator, a spooky twist on the classic [Akinator](https://en.akinator.com/) game!
In this project, the AI has chosen a character, and your goal is to uncover it by asking questions.
But beware—the AI can only answer 'Yes' or 'No'!

## Inspiration behind the Project  
_What is the story behind this project? Why did you choose to work on this specific idea?_

Inspired by [Akinator](https://en.akinator.com/)’s character-guessing mechanics, we wanted to reverse the roles, where the AI picks the character, and the user has to ask the right questions to figure it out.  
Halloween’s iconic characters provided a fun, seasonal layer to the gameplay perfectly aligning with the October 31st submission date.

## Tech Stack    
_How have you built this project? Mention the technologies/methods/platforms you used to build your project_


The project is made using [Flutter](https://flutter.dev/) a Google UI framework created in 2017.
It uses the Google language Dart created in 2011, [Dart](https://dartlang.org/).

This approach enabled us to target the three main platforms we aimed to develop for: Android, iOS, and the web.

The application is based on a MVVM architecture using [Stacked](https://pub.dev/packages/stacked) by FilledStacks as a state management.
The usage of [Stacked](https://pub.dev/packages/stacked) is for maintainability and readability.
 [Stacked](https://pub.dev/packages/stacked) uses implicitly the [Provider](https://pub.dev/packages/provider) package.  
The main idea is to use an MVVM pattern to remove any business logic from the UI layouts by putting this logic in a separated view model. This adds more clarity and maintainability.

We can decompose the project into 3 layers: the Models, The Views, and finally the ViewModels.

<p align="center">
    <img src="https://user-images.githubusercontent.com/20175372/150529665-4007b616-7590-490c-b25b-ef8a30753210.png">
</p>

In the project, the views are for display only.    
They can trigger interactions through Buttons/GestureDetector/Events that will call ViewModel methods.

The ViewModel class can extend different types of abstract ViewModels such as:

- [BaseViewModel](https://github.com/Stacked-Org/stacked/blob/master/README_old.md#baseviewmodel-functionality)
- [ReactiveViewModel](https://github.com/Stacked-Org/stacked/blob/master/README_old.md#reactiveviewmodel)
- And many more, but we mostly use those ones, you can refer to the [stacked documentation](https://pub.dev/documentation/stacked/latest/stacked/stacked-library.html#classes)

The ViewModel data-bind all the data from the services and models and create getters for the view and notify the view of any changes (using a ReactiveServiceMixin or a NotifyListeners)

#### **And of course we used AppWrite.io**

The project utilizes [AppWrite.io](https://appwrite.io/) as a cloud backend to handle:

- Database Management: Stores information about the leaderboard.
- Anonymous Authentication: Allows players to start the game without requiring sign-in, making it easy and accessible for quick sessions.
- Cloud Functions: Calls a Hugging Face API to enable the AI to respond with a "Yes" or "No" to user questions.
  
This integration allows the app to offer a seamless, interactive experience by handling backend processing efficiently, while Hugging Face provides the natural language processing capability for AI responses.

## Project Repo  
_Share a public repo link of your project_

[https://github.com/BLKKKBVSIK/Askinator](https://github.com/BLKKKBVSIK/Askinator)

## Demo Video/Photos  
_Share a 2-3 minute demo video of your project_


[![Watch the video](https://github.com/user-attachments/assets/f78148e4-aa37-4826-a132-15505a11604d)](https://www.youtube.com/watch?v=pXO6IXGCl1s)

You can see the promo video by clicking [this link](https://www.youtube.com/watch?v=pXO6IXGCl1s).  

Play on your browser: [https://askinator-c6fe5.web.app/](https://askinator-c6fe5.web.app/)  
Play on your iPhone by joining the beta: [TestFlight](https://testflight.apple.com/join/UDH124NH)  
Play on your Android by downloading the APK file in [this release](https://github.com/BLKKKBVSIK/Askinator/releases/tag/v1.0.0) 
