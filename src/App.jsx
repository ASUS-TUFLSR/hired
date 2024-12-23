import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import LandingPage from "./pages/LandingPage"
import Onboarding from "./pages/Onboarding"
import Job from "./pages/Job"
import JobListing from "./pages/JobListing"
import JobPosting from "./pages/JobPosting"
import MyJobs from "./pages/MyJobs"
import SavedJobs from "./pages/SavedJobs"
import { ThemeProvider } from "./components/ui/theme-provider"

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },
      {
        path:'/onboarding',
        element:<Onboarding/>
      },
      {
        path:'/jobs',
        element:<JobListing/>
      },
      {
        path:'/job/:id',
        element:<Job/>
      },
      {
        path:'/post-Job',
        element:<JobPosting/>
      },
      {
        path:'/saved-Job',
        element:<SavedJobs/>
      },
      {
        path:'/my-Jobs',
        element:<MyJobs/>
      },
    ]
  }
])

const App = () => {
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <RouterProvider router={router} />
    </ThemeProvider>
  
}

export default App