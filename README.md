# 📚 Minimal Library Management System

A clean, user-friendly library management app built with **React**, **Redux Toolkit Query (RTK Query)**, **TypeScript** on the frontend, and **Express.js (MVC pattern)** on the backend.

**Live Demo:**  
🔗 [Minimal Library Management System](https://engrsakib-level-2-ass4.surge.sh/)

**GitHub Repo:**  
🔗 [engrsakib/test-library-management-](https://github.com/engrsakib/test-library-management-)

---

## 🎯 Overview

This project is a **full stack library management system**:
- **Frontend:** React + RTK Query + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express (MVC) + REST API

You can view, add, edit, delete, and borrow books. All features are public—no login, no complex filters—just minimal, smooth, and practical book & borrow management.

---

## ✨ Features

### 📖 Book Management
- **Book Table**: View all books (Title, Author, Genre, ISBN, Copies, Availability, Actions)
- **Add Book**: Simple form to add new books
- **Edit Book**: Update any book info
- **Delete Book**: Remove books with confirmation
- **Borrow Book**: Borrow books by quantity and due date
- **Business Logic**: If copies = 0, book is marked unavailable

### 📊 Borrow Summary
- See which books have been borrowed and how many times (aggregated)
- Columns: Book Title, ISBN, Total Quantity Borrowed

### 🧭 Navigation
- **All Books**
- **Add Book**
- **Borrow Summary**

### 🔒 Authentication
- **None required** — All routes and features are public!

---

## 🏗️ Tech Stack

### Frontend
- **React** (Functional Components)
- **Redux Toolkit Query (RTK Query)**
- **TypeScript**
- **Tailwind CSS**

### Backend
- **Node.js**
- **Express.js** (MVC Pattern)
- **RESTful API**

---

## 🗂️ Main Pages

- `/books` – Book list (view, edit, delete, borrow)
- `/create-book` – Add new book
- `/books/:id` – Book details
- `/edit-book/:id` – Edit book info
- `/borrow/:bookId` – Borrow form
- `/borrow-summary` – Borrowed book stats

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/engrsakib/test-library-management-.git
cd test-library-management-
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend   # (if backend is in /backend)
npm install
```

### 4. Configure Environment

- Set your backend API base URL in the frontend RTK Query slice or `.env` file.

### 5. Run Backend

```bash
npm run dev    # Or: npm start
```

### 6. Run Frontend

```bash
cd ..
npm run dev    # Or: npm start
```

### 7. Visit in Browser

- [http://localhost:3000](http://localhost:3000) (Frontend)
- [http://localhost:5000](http://localhost:5000) (Backend, or your configured port)
- Or try the [Live Demo](https://engrsakib-level-2-ass4.surge.sh/)

---

## 🧩 Folder Structure

```
backend/         # Express MVC backend (controllers, models, routes)
src/             # Frontend React app
  components/
  pages/
  features/      # RTK Query slices
  types/
  App.tsx
  main.tsx
  index.css
```

---

## 🖥️ UI/UX

- **Minimalist & Modern**: Clean layout using Tailwind CSS
- **Responsive**: Looks great on any device
- **Instant Feedback**: All actions show success/error messages
- **Accessible**: Keyboard and screen reader friendly

---

## 🙏 Credits

Built by [engrsakib](https://github.com/engrsakib)  
Minimal Library Management System – For demo, learning, and simple library management.

