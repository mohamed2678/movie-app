# 🎬 Movie App

A modern movie application built with Next.js that allows users to explore movies, search for titles, and view detailed information including cast and trailers.

---

## 🚀 Live Demo
👉 https://movie-app-beta-blond.vercel.app/

---

## 📌 Features

- 🎬 Browse trending movies  
- 🔍 Search for any movie  
- 📄 View detailed movie information  
- 👨‍🎤 Explore cast members  
- 🎥 Watch movie trailers  
- ⚡ Smooth loading experience (Skeleton UI)  
- 📱 Responsive design  

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React**
- **React Query**
- **Axios**
- **Tailwind CSS**
- **TMDB API**

---

## 📂 Project Structure

app/ ├── page.tsx ├── movie/[id]/page.tsx ├── search/page.tsx
components/ ├── MovieCard.tsx ├── Navbar.tsx
services/ ├── movie.service.ts

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mohamed2678/movie-app.git

### 2. Install dependencies
Bash
npm install
### 3. Add environment variables
Create a .env.local file and add:
Environment
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
### 4. Run the project
Bash
npm run dev
