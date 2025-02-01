import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {BarLoader} from 'react-spinners'


const Onboarding = () => {


  const {user, isLoaded} = useUser();

  console.log("Userr",user)
  console.log("IsLoaded", isLoaded);

  if(!isLoaded){
    <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }
  
  const navigate = useNavigate();

  const handleroleSelection = async (role) => {
    await user.update({
      unsafeMetadata:{role}
    }).then(() => {
      navigate(role === 'recruiter' ? '/post-Job' : "/jobs")
    }).catch((err) => {
      console.error("Error updating role", err)
    })
  }

  useEffect(() => {
    if(user?.unsafeMetadata?.role){
     navigate(user?.unsafeMetadata?.role === 'recruiter' ? '/post-Job' : "/jobs")

    }
  }, [user]);

  // console.log(user)
  
return <div className="flex flex-col items-center justify-center mt-32" >
   <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter" >I am a ....</h2>
  <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
    <Button variant="blue" className="h-36 text-2xl" 
    onClick={() => handleroleSelection("candidate")} >Candidate</Button>
    
    <Button variant="red" className="h-36 text-2xl" 
    onClick={() => handleroleSelection("recruiter")}>Recruiter</Button>
  </div>
  </div>
}

export default Onboarding