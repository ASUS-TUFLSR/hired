import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Button } from "./button"
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react"
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react"


const Header = () => {

    const [showSignIn, setShowSignIn] = useState(false);

    const [search, setSearch] = useSearchParams();

    const {user} = useUser();

    useEffect(() => {
      if(search.get("sign-in")){
        setShowSignIn(true);
      }
    },)

    const handleOverlayClick = (e) => {
        if(e.target === e.currentTarget){
          setShowSignIn(false);
          setSearch({})
        }
    }

  return (
      
    <>
     <nav className="py-4 flex justify-between items-center">
       <Link>
         <img src="./logo.png" className="h-20" alt="hired"/>
         </Link>

      <div className="flex gap-8" >
        <SignedOut>
          <Button variant="outline" onClick={() => setShowSignIn(true)} >Login</Button>
        </SignedOut>
         <SignedIn>
               
          { user?.unsafeMetadata?.role !== "recruiter" && (
            <Link to="/post-Job">
           <Button variant="destructive" className="rounded-full" >
                 <PenBox size={20} className="mr-2" />
                 Post Job
               </Button>
           </Link>
          ) }

        <UserButton appearance={{
          elements:{
            avatarBox:"w-10 h-10"
          }
        }} >
          <UserButton.MenuItems>
            <UserButton.Link
             label="My Jobs"
             href="/my-Jobs" 
             labelIcon={<BriefcaseBusiness size={15} />} />
            <UserButton.Link
             label="Saved Jobs"
             href="/saved-Job" 
             labelIcon={<Heart size={15} />} />
          </UserButton.MenuItems>
        </UserButton>
         </SignedIn> 
      </div>
         
     </nav>
     {showSignIn && 
     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" 
       onClick={handleOverlayClick}
       >
        <SignIn 
        signUpForceRedirectUrl="/onboarding"
        fallbackRedirectUrl="/onboarding"
        />
       </div>}
    
    </>

  )
}

export default Header