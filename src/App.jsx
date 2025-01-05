import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import LandingPage from "./pages/LandingPage"
import Onboarding from "./pages/Onboarding"
import Job from "./pages/Job"
import JobListing from "./pages/JobListing"
import JobPosting from "./pages/JobPosting"
import MyJobs from "./pages/MyJobs"
import SavedJobs from "./pages/SavedJobs"
import ProtectedRoute from "./components/ui/ProtectedRoute"
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
        element:
        <ProtectedRoute>
         <Onboarding/>
         </ProtectedRoute>
      },
      {
        path:'/jobs',
        element:
        <ProtectedRoute>
        <JobListing/>
        </ProtectedRoute>
      },
      {
        path:'/job/:id',
        element:
        <ProtectedRoute>
          <Job/>
        </ProtectedRoute>
      },
      {
        path:'/post-Job',
        element:
        <ProtectedRoute>
        <JobPosting/>
        </ProtectedRoute>
      },
      {
        path:'/saved-Job',
        element:
        <ProtectedRoute>
        <SavedJobs/>
        </ProtectedRoute>
      },
      {
        path:'/my-Jobs',
        element:
        <ProtectedRoute>
          <MyJobs/>
        </ProtectedRoute>
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