📝 Task Manager (Node.js + Express + EJS)
This is a simple task management web app built using Node.js, Express, and EJS templating. It allows users to create, view, and read tasks, where each task is saved as a .txt file on the server.

✨ Features
Add new tasks with a title and description

View a list of all created tasks

Click on a task to read its full details

File-based storage (each task is saved as a .txt file)

Simple and clean UI using TailwindCSS

📁 Folder Structure


project/
│
├── views/            # EJS templates (index.ejs, file.ejs)
├── files/            # Stores created task .txt files
├── public/           # Static assets (CSS, JS)
├── server.js         # Express server
└── README.md

🚀 Getting Started
Clone the repository

Run npm install to install dependencies

Run node server.js to start the server

Visit http://localhost:3000 in your browser

📦 Dependencies
express

ejs

fs (built-in)

path (built-in)