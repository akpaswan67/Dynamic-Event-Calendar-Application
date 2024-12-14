# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`


This Dynamic Event Calendar application allows users to:

View a Calendar: Displays a monthly view with all days of the month.

Add Events: Users can add events to specific dates with details like event name, time, and description.

Edit Events: Update previously saved event details for any day.

Delete Events: Remove events if they are no longer needed.

Real-Time Updates: Events are updated and displayed immediately in the calendar.

Navigation: Seamlessly navigate between months.

Local Storage Persistence: Ensures events persist even after a page refresh.

Instructions to Run the App Locally

Prerequisites

Make sure you have the following installed on your system:

Node.js (v14 or later)

npm or yarn (package manager)

Steps

Clone the Repository

git clone <repository-url>
cd <repository-name>

Install Dependencies

npm install
# or
yarn install

Start the Development Server

npm start
# or
yarn start

The app will run locally at http://localhost:3000 by default.

Build for Production (Optional)

npm run build
# or
yarn build

This command creates a production-ready build in the build/ folder.

Project Structure

src/components: Contains the core React components such as CalendarGrid, EventModal, etc.

src/utils: Includes utility functions for date handling and local storage management.

src/styles.css: Defines the styling for the application.

src/index.js: Entry point of the React application.

