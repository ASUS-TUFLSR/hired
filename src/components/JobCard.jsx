import { useUser } from "@clerk/clerk-react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Trash2Icon } from "lucide-react"

const JobCard = ({
    job,
    isMyJob = false,
    saveInit = false,
    onJobSaved =() => {},
}) => {

  const {user} = useUser()

  return <>
   <Card>
    <CardHeader>
        <CardTitle className="flex justify-between font-bold" >
            {job.title}
            {isMyJob && <Trash2Icon fill="red" 
              size={18} 
              className="text-red-300 cursor-pointer" />}
            </CardTitle>
        
    </CardHeader>
   </Card>
  </>
}

export default JobCard