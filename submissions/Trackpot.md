# Hackathon Submission: Trackpot

## Team Members
- [@seemantshekhar43](https://github.com/seemantshekhar43)

## Project Title
Trackpot - Smart Group Expense Tracker

## Project Description    
Trackpot is a modern expense tracking application built with Flutter that simplifies group expense management. It helps users track shared expenses, manage group finances, and settle balances effortlessly. The app features real-time expense tracking, intelligent bill splitting, and comprehensive payment management, making it perfect for roommates, trips, or any shared financial situations.

Key features include:
- Smart expense splitting with multiple split types
- Real-time group balance tracking
- Detailed payment management with media attachments
- Comprehensive activity logging
- Real-time notifications for expense-related activities
- Multi-currency support
- Rich media support for receipts and payments

## Inspiration behind the Project  
Managing shared expenses in groups has always been a challenging task, often leading to confusion, awkward conversations, and strained relationships. The inspiration behind Trackpot came from personal experiences of managing expenses during trips and with roommates. Traditional methods like spreadsheets or notes become cumbersome as the number of transactions grows.

Trackpot aims to solve these pain points by providing a seamless, transparent, and user-friendly platform for group expense management. The goal is to eliminate the friction in shared finances and make expense tracking a breeze.

## Tech Stack    

### Frontend
- **Flutter**: Cross-platform mobile development framework
- **Bloc**: State management solution
- **GetIt**: Dependency injection
- **Material 3**: Design system for modern UI/UX
- **Custom Theme**: Implemented for both light and dark modes

### Backend (Appwrite)
- **Appwrite Cloud**: Backend-as-a-Service solution
- **Real-time Database**: For live updates
- **Authentication**: Secure user management
- **Storage**: Media file management
- **Functions**: Server-side computations

### Architecture
- **Clean Architecture**: For maintainable and scalable codebase
- **Feature-first**: Organization structure
- **Repository Pattern**: Data management
- **Domain-driven Design**: Business logic organization

## Appwrite Feature Usage

### Authentication
- **Email Authentication**: User registration and login
- **Account Management**: Profile updates and user settings
- **Session Handling**: Secure token management

### Database
- **Users Collection**: 
  - Stores user profiles
  - Manages user preferences
  - Tracks user metadata
- **Groups Collection**:
  - Group details and members
  - Group settings and preferences
- **Expenses Collection**:
  - Expense records with metadata
  - Split calculations
  - Payment status
- **Payments Collection**:
  - Payment records
  - Settlement tracking
  - Payment proof references

### Storage
- **Expense Receipts**: 
  - Store and manage expense receipt images
  - Organize receipts by group and date
- **Payment Proofs**:
  - Store payment screenshots/proofs
  - Manage payment verification documents
- **Profile Pictures**:
  - User avatar storage
  - Profile image management

### Realtime
- **Live Updates**:
  - Expense additions/modifications
  - Payment status changes
  - Group member updates
- **Notifications**:
  - New expense alerts
  - Payment reminders
  - Group activity updates

### Messaging
- **Push Notifications**:
  - Device token management for mobile devices
  - Real-time expense notifications
  - Payment request alerts
  - Group invitation notifications
  - Settlement reminders
  - New member notifications
  - Activity updates
- **Notification Topics**:
  - Group-based notification channels
  - Custom notification preferences
  - Priority-based message delivery

### Functions
- **Balance Calculations**:
  - Group balance computation
  - Individual share calculations
- **Currency Conversions**:
  - Multi-currency support
  - Exchange rate updates

## Project Repository
https://github.com/seemantshekhar43/trackpot

## Demo Video/Photos
https://drive.google.com/drive/folders/1Mua3pZQpVpnc7Wvxtj2tBBHTZvfuZNZV?usp=sharing
[Demo video and app screenshots are present in this google drive folder]
