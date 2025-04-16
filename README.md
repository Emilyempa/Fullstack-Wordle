# 🎮 Wordle-Inspired Game

Welcome to **Wordle-Inspired Game**, a fullstack application developed as part of a school assignment. This game challenges players to guess words based on strategic feedback, and includes features like a customizable difficulty level, a real-time timer, and a highscore system.

## 🚀 Technologies Used

- **Frontend:** React, Material-UI, Vite
- **Backend:** Node.js, Express.js, EJS
- **Database:** MongoDB
- **Testing:** Cypress (end-to-end testing)

## ✨ Key Features

✅ Adjustable difficulty settings  
✅ Real-time game timer  
✅ Persistent highscore system with MongoDB  
✅ Interactive UI built with Material-UI  
✅ Comprehensive Cypress tests for reliable performance  

## 📦 Installation

To get started, clone the repository and install dependencies:

```bash
git clone <repository-url>
cd wordle-inspired-game
npm install
npm start

npm test or npm run cy:open, for cypress tests

🔗 Database Setup

This project relies on a MongoDB database for storing highscores. If you clone this repository, you need to set up your own MongoDB instance and provide the correct connection string.

Steps to configure the database:

1. Create a MongoDB database 
   You can use MongoDB Atlas (cloud database) or set up a local instance.

2. Add your connection string  
   Create a `.env` file in the project root and add:
   ```env
   MONGODB_URI=your-mongodb-connection-string-here

