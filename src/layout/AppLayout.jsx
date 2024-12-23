import { Outlet } from "react-router-dom"
import Header from "@/components/ui/Header";

const AppLayout = () => { 

  const currentYear = new Date().getFullYear();

  return <div>
    <div className="gridbackground"></div>
    <main className="min-h-screen container" >
      <Header/> 
      <Outlet/>
    </main>
    <div className="p-10 text-center bg-gray-800 mt-10" >
      <p> Hired &copy; {currentYear}</p>
      </div>
  </div>
}

export default AppLayout;