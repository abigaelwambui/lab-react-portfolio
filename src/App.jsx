import Navbar from "./components/Navbar"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"
import { useState } from "react"
import "./App.css"


export default function App() {

  const [projects, setProjects] = useState(
    [
      {
        "id": "1",
        "name": "E-Commerce Platform",
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        "description": "A full-stack e-commerce application that allows users to browse products, add items to their shopping carts, make purchases and track orders.",
        "year": "2013"
      },
      {
        "id": "2",
        "name": "Task Management App",
        "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
        "description": "A productivity application that helps users organise tasks, set deadlines, manage projects and track their daily progress.",
        "year": "2017"
      },
      {
        "id": "3",
        "name": "Weather Forecast App",
        "image": "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
        "description": "A weather application that provides real-time weather conditions, temperature forecasts and weather alerts using a weather API.",
         "year": "2015"
      },
      {
        "id": "4",
        "name": "Expense Tracker",
        "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        "description": "A personal finance application that allows users to record income and expenses, categorise transactions and monitor spending habits.",
        "year": "2022"
      },
      {
        "id": "5",
        "name": "Recipe Finder",
        "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
        "description": "A recipe discovery application that allows users to search for meals, filter recipes by ingredients and save their favourite dishes.",
        "year": "2025"
      },
      {
        "id": "6",
        "name": "Social Media Dashboard",
        "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
        "description": "A dashboard that helps users monitor social media engagement, analyse account performance and manage content.",
        "year": "2026"
      },
      {
        "id": "7",
        "name": "Learning Management System",
        "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
        "description": "An online learning platform where students can enrol in courses, access learning materials and track their progress.",
        "year": "2020"
      },
      {
        "id": "8",
        "name": "Real Estate Platform",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        "description": "A property listing platform that allows users to browse houses, filter properties by location and price, and contact agents.",
        "year": "2024"
      },
      {
        "id": "9",
        "name": "Chat Application",
        "image": "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800",
        "description": "A real-time messaging application supporting private conversations, group chats and multimedia messages.",
        "year": "2018"
      },
            
    ]
  )

  return (
    <>
      <Navbar/>
      <main className="container">
        <ProjectForm/>
        <ProjectList projects={projects}/>
      </main>
      
    </>
  )
}