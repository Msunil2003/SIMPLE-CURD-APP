# 🛠 Simple MERN CRUD App

This project is a **Create React App** frontend connected to an **Express.js + MongoDB** backend. It demonstrates a simple **CRUD (Create, Read, Update, Delete)** functionality to manage items.

---

## 📂 Project Structure
simple-crud-app/
├── backend/ # Node.js + Express + MongoDB API
└── frontend/ # React.js client


---

## ⚙️ Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Git](https://git-scm.com/)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/SIMPLE-CURD-APP.git
cd SIMPLE-CURD-APP


2️⃣ Backend Setup

Navigate to the backend:

cd backend

Install dependencies:

npm install


Update MongoDB connection string in server.js (if using Atlas or a custom URI).

Run the backend server:

node server.js


Frontend Setup

Open a new terminal and navigate to the frontend:

Install dependencies:

npm install

Start the React development server:

npm start

The frontend runs on http://localhost:3000


| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/api/items`     | Create a new item |
| GET    | `/api/items`     | Get all items     |
| PUT    | `/api/items/:id` | Update an item    |
| DELETE | `/api/items/:id` | Delete an item    |



🖼 Features

➕ Create items

📖 View all items

✏️ Edit/update existing items

❌ Delete items



🧰 Technologies Used

Frontend: React.js, Axios

Backend: Node.js, Express.js, Mongoose

Database: MongoDB




🧰 Troubleshooting

Axios Network Error:

Ensure the backend server is running on port 5000.

Verify CORS is enabled in server.js:

const cors = require('cors');
app.use(cors());


Check your MongoDB server is running (mongod) or Atlas credentials are correct.

Port Conflicts:
Stop any process using ports 3000 or 5000 or update the ports in your configs.
