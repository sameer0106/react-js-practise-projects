# 📱 Social Media React Practice Project

A responsive social media style UI built with **React + Bootstrap** to practice component structure, routing, layout composition, and CRUD-style UI interactions.

This project focuses on frontend structure and UI behavior. Authentication and profile features are planned for future implementation.

![image alt](https://github.com/sameer0106/react-js-practise-projects/blob/62b3d6f09b4c35103fc4fa68094d8ab249ea3dc8/social-mdeia-page/UI%20ScreenShots/create-post.png)![image alt](https://github.com/sameer0106/react-js-practise-projects/blob/ed3eb2e425f139a832f8957fdffb966b237c9e75/social-mdeia-page/UI%20ScreenShots/home.png)

## 🚀 Features

### 🧭 Layout
- Responsive Bootstrap-based sidebar
- Top navigation header
- Clean card-based post layout
- Reusable UI structure across pages

### 🏠 Pages

#### Home
- Displays created posts in card format
- Each post shows title, content, tags, and reactions
- Delete post UI available

#### Create Post
- Form to add a new post
- Fields:
  - User ID
  - Title
  - Body
  - Tags
  - Reactions
- Posts appear on Home after creation

#### Greeting Page
- Default landing UI when no posts exist

---

## ❌ Not Implemented Yet

These features are currently UI-only:

- Authentication system
- Login / Logout functionality
- User profile system
- Backend API integration
- Persistent storage

Future versions may include these features.

---

## 🛠️ Tech Stack

- React
- React Router
- Bootstrap
- JavaScript (ES6+)
- Vite

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Header
│   ├── Sidebar
│   ├── PostCard
│   └── Layout
│
├── pages/
│   ├── Home
│   ├── CreatePost
│   └── Welcome
│
├── App.jsx
└── main.jsx
```

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

App runs at:
```
http://localhost:5173
```

---

## 🎯 Learning Goals

This project is built to practice:

- Component-based UI design
- Layout composition
- Form handling in React
- State-driven rendering
- Reusable UI patterns
- Clean project organization

---

## 🔮 Future Improvements

- Authentication flow
- User profiles
- Backend API integration
- Post editing
- Like/comment system
- Global state management
- Dark mode
- Deployment

---

## 📄 License
This project is for learning purposes.
