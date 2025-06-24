💊 HealthMate - Personal Medicine & Health Tracker
HealthMate is a modern, full-stack web application designed to help users effortlessly track their daily medications. Built with a clean and responsive interface, it provides a seamless experience on both desktop and mobile devices. This project was developed to showcase proficiency in the MERN stack (MySQL, Express, React, Node.js) and modern frontend design principles.

✨ Features
Intuitive Dashboard: At-a-glance overview of your active and archived medications.

Multi-Page Navigation: A seamless single-page application (SPA) experience with distinct pages for different tasks.

Focused "Add Medicine" Workflow: A dedicated page with a multi-step form and a live preview to add or update medication details.

Advanced Filtering & Search: Instantly search your regimen and switch between active and past medications with tabbed navigation.

Dual View Modes: Toggle between a compact list view and a detailed grid view to organize your dashboard.

Fully Responsive: Meticulously designed to provide a perfect user experience on any device, from mobile phones to desktops.

Modern UI/UX: Built with a professional design system, smooth animations using Framer Motion, and user-friendly modals for a polished feel.

⚙️ Local Development Setup
Follow these steps to get the project running on your local machine.

1. Prerequisites (Software to Download)
First, make sure you have the following software installed on your system.

Node.js and npm: Required for running both the frontend and backend.

Download: nodejs.org (LTS version is recommended).

Git: The version control system used to download the project.

Download: git-scm.com

MySQL Server: The database where all your data will be stored.

Download: MySQL Community Server

Code Editor: A text editor for viewing and editing the code.

Recommended: Visual Studio Code

2. Initial Setup
A. Clone the Repository

Open your terminal or command prompt and run the following command to download the project folder to your computer:

git clone https://github.com/your-username/HealthMate.git
cd HealthMate


B. Set Up the Database

Start your local MySQL server.

Connect to it using your preferred SQL client (e.g., MySQL Workbench, DBeaver, or the command line).

Run the entire create tables.sql script located in the project's root directory. This will create the healthmate database and all the necessary tables.

3. Backend Configuration & Dependencies
A. Navigate to the Backend Folder

cd backend

B. Install Production Dependencies

Run the following commands to install the necessary packages for the server to function:

npm install express
npm install mysql2
npm install cors
npm install dotenv

C. Install Development Dependencies

This package is used to automatically restart the server when you make code changes.

npm install -D nodemon

(The -D flag saves it as a development dependency)

D. Create Environment File

Create a new file named .env in the backend directory. This file will store your secret database credentials. Add the following content, replacing the placeholder with your actual MySQL root password:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=healthmate

E. Start the Backend Server

npm run dev

The backend API will now be running on http://localhost:5000. Keep this terminal window open.

4. Frontend Configuration & Dependencies
A. Navigate to the Frontend Folder

Open a new terminal window and navigate to the project's frontend folder:

cd frontend

B. Install Production Dependencies

Run these commands to install the packages required for the React application:

npm install react react-dom
npm install axios
npm install framer-motion
npm install lucide-react
npm install react-hot-toast

C. Install Development Dependencies

These packages are needed for the development environment, such as the local server and code compilation.

npm install -D vite
npm install -D @vitejs/plugin-react
npm install -D eslint

D. Start the Frontend Server

Once all dependencies are installed, run the development server:

npm run dev

The application will now be running and accessible in your web browser at http://localhost:5173.

