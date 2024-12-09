# **Food Ordering App**

A full-stack **Food Ordering Application** built with the MERN stack. This project consists of three parts:

1. **Frontend** - User-facing interface built with React and Vite.
2. **Backend** - Server-side application using Express.js and MongoDB.
3. **Admin Panel** - Separate React-based interface for administrative tasks.

---

## **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Running the Application](#running-the-application)
- [Uploading to GitHub](#uploading-to-github)

---

## **Features**

- User-friendly food ordering interface.
- Secure authentication and authorization.
- Admin panel for managing orders and items.
- Integration with Stripe for payment processing.
- Real-time notifications using React Toastify.

---

## **Tech Stack**

### **Frontend**
- React
- React Router DOM
- Axios
- React Toastify
- Vite

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Multer
- Stripe

### **Admin Panel**
- React
- Axios
- React Router DOM
- React Toastify
- Vite

---

## **Installation and Setup**

Follow these steps to set up the project locally:

1. **Clone the Repository**
  - git clone https://github.com/zahoor-abbas/Food-Ordering-App.git
  - cd Food-Ordering-App
2. **Navigate to each folder (frontend, backend, and admin) and install dependencies:**
  - cd frontend
  - npm install
  - cd ../backend
  - npm install
  - cd ../admin
  - npm install
3. **Create a .env file in the backend folder and configure environment variables:**
  - MONGO_URI=<your_mongodb_connection_string>
  - JWT_SECRET=<your_jwt_secret>
  -  STRIPE_SECRET_KEY=<your_stripe_secret_key>
4. **Running the Application**
  - Run the Backend Server:
    cd backend
    npm run start
  - Run the Frontend:
    cd frontend
    npm run start
  - Run the Admin Panel:
    cd admin
    npm run start





