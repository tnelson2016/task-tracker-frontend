# ✅ Task Tracker

A simple full-stack Task Tracker app built with **React** (frontend) and **Spring Boot** (backend). Users can:

- Add new tasks  
- Toggle task completion (with strike-through + optional ✅)
- Move completed tasks to the bottom of the list  
- Delete individual tasks  
- Clear all tasks  
- Persist tasks using a live backend API

---

## 🔧 Tech Stack

- **Frontend**: React, CSS, Vercel (deployment)  
- **Backend**: Java, Spring Boot, Render (deployment)  
- **Database**: In-memory (H2) or persistent (optional)

---

## 📁 Project Structure

```
task-tracker/
├── task-tracker-frontend/
│   ├── public/
│   ├── src/
│   └── .env
└── task-tracker-backend/
    ├── src/
    └── pom.xml
```

---

## 🚀 Setup Instructions

### ▶️ Frontend (React)

1. Navigate to the frontend folder:

   ```bash
   cd task-tracker-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add a `.env` file in the root folder:

   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```

4. Start the app:

   ```bash
   npm start
   ```

5. Deploy to [Vercel](https://vercel.com):
   - Connect your GitHub repo
   - Set the same `.env` variable in project settings

---

### 💡 Backend (Spring Boot)

1. Open the backend folder in IntelliJ or VS Code.

2. Confirm your backend CORS config allows frontend origin:

   ```java
   @CrossOrigin(origins = "https://your-frontend-url.vercel.app")
   ```

3. Run locally:

   ```bash
   ./mvnw spring-boot:run
   ```

4. Deploy to [Render](https://render.com):
   - New Web Service → from GitHub
   - Build: `./mvnw clean package`
   - Start: `java -jar target/*.jar`

---

## 💻 Features

- [x] Add new tasks
- [x] Toggle tasks as completed
- [x] Completed tasks move to bottom
- [x] Delete individual tasks
- [x] Clear all tasks button
- [x] Responsive & deployed online

---

## 📡 Live Demo

- 🔗 Frontend: [https://task-tracker-frontend-yourname.vercel.app](https://task-tracker-frontend-yourname.vercel.app)
- 🔗 Backend: [https://task-tracker-backend-yourname.onrender.com](https://task-tracker-backend-yourname.onrender.com)

---

## 🙌 Author

**Troy Nelson**  
[GitHub](https://github.com/tnelson2016)

---

