import Navbar from "./components/Navbar"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"
import "./App.css"
import Buttons from "./components/Buttons"

export default function App() {
  return (
    <>
      <Navbar/>
      <main className="container">
        <Buttons/>
        <ProjectForm/>
        <ProjectList/>
      </main>
      
    </>
  )
}