import { Link } from "react-router-dom"
import { Button } from "./button"
// import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/clerk-react"


const Header = () => {
  return (
      
    <>
     <nav className="py-4 flex justify-between items-center">
       <Link>
         <img src="./logo.png" className="h-20" alt="hired"/>
         </Link>

         <Button variant="outline" >Login</Button>

          {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>  */}
     </nav>
    
    </>

  )
}

export default Header