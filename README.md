# COMP3133 – Lab Test 1: Chat Application

Real-time chat application built with **Express**, **Socket.io**, and **MongoDB (Mongoose)**.  
Frontend uses **HTML5**, **Bootstrap**, **jQuery**, and **fetch**.

## Features
- User Signup (unique username stored in MongoDB)
- User Login + session using `localStorage`
- Join predefined chat rooms (room-based messaging)
- Real-time messaging using Socket.io
- Typing indicator ("User is typing...")
- Messages stored in MongoDB for future retrieval
- Logout (clears session and redirects to login)

## Tech Stack
- Backend: Node.js, Express, Socket.io, Mongoose, bcrypt
- Database: MongoDB
- Frontend: HTML, Bootstrap, jQuery, fetch API

---

## Setup Instructions

### 1) Install Dependencies
```bash
npm install
```
### 2) Start MongoDB

### 3) Run the Server
```bash
node server.js
```
Server runs on:

- http://localhost:3000

## How to Use the App

### 1) Signup

Open:

- http://localhost:3000/signup.html

Create a new account with a unique username.
<img width="1507" height="875" alt="Screenshot 2026-02-11 at 6 04 38 PM" src="https://github.com/user-attachments/assets/86838a7d-96ff-4460-b281-b4ac2c6ac86e" />


### 2) Login

Open:

- http://localhost:3000/login.html

Login using your username and password.
<img width="1506" height="879" alt="Screenshot 2026-02-11 at 6 05 24 PM" src="https://github.com/user-attachments/assets/21334cd4-10c7-4b71-8cb0-e9ea63d68cca" />

### 3) Join a Room & Chat

After login, you will be redirected to `chat.html`.
- Select a room from dropdown (devops, cloud computing, covid19, sports, nodeJS)
- Click Join
- Send messages in the current room
<img width="1509" height="880" alt="Screenshot 2026-02-11 at 6 06 09 PM" src="https://github.com/user-attachments/assets/308130c1-f453-4e68-94d6-4f4ce94d7a00" />
<img width="1506" height="880" alt="Screenshot 2026-02-11 at 6 07 24 PM" src="https://github.com/user-attachments/assets/568b7fb3-4558-4bb1-b077-8c3178ed7901" />


### 4) Logout

Logout clears the session from `localStorage` and redirects back to login.
<img width="1507" height="878" alt="Screenshot 2026-02-11 at 6 07 49 PM" src="https://github.com/user-attachments/assets/129a938c-383f-4905-bb15-6e7b10565d88" />

## Notes

- Passwords are stored securely using bcrypt hashing (not plain text).
- MongoDB collections typically include:
    - users
    - groupmessages
    - privatemessages
