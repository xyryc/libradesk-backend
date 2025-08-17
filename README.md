# LibraDesk Library Management System - Backend

A clean, user-friendly library management app built with **React**, **Redux Toolkit Query (RTK Query)**, **TypeScript** on the frontend, and **Express.js (MVC pattern)** on the backend.

**Live Demo:**  
🔗 [LibraDesk - Library Management System](https://libradesk.vercel.app/)

**GitHub Repo:**  
🔗 [https://github.com/xyryc/libradesk-backend.git](https://github.com/xyryc/libradesk-backend.git)

## Overview

This project is a **library management system**:

- **Backend:** Node.js + Express (MVC) + REST API

## Features

### Book Management

- **Book Table**: View all books (Title, Author, Genre, ISBN, Copies, Availability, Actions)
- **Add Book**: Simple form to add new books
- **Edit Book**: Update any book info
- **Delete Book**: Remove books with confirmation
- **Borrow Book**: Borrow books by quantity and due date

### Borrow Summary

- See which books have been borrowed and how many times (aggregated)

### Navigation

- **All Books**
- **Add Book**
- **Borrow Summary**

### Authentication

- **None required** — All routes and features are public!

---

## Tech Stack

- **Node.js**
- **Express.js** (MVC Pattern)
- **RESTful API**

---

## Main Pages

- `/books` – Book list (view, edit, delete, borrow)
- `/create-book` – Add new book
- `/books/:id` – Book details
- `/edit-book/:id` – Edit book info
- `/borrow/:bookId` – Borrow form
- `/borrow-summary` – Borrowed book stats

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/xyryc/libradesk-backend.git
cd libradesk-backend
```

### 3. Install Dependencies

```bash
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

- [http://localhost:5000](http://localhost:5000) (Backend, or your configured port)
- Or try the [Live Demo](https://libradesk.vercel.app/)
