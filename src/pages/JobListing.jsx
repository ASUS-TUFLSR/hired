import { getJobs } from "@/api/apiJobs"
import useFetch from "@/hooks/use-fetch"
import { useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react"
import {BarLoader} from 'react-spinners'
import JobCard from "@/components/JobCard"



const JobListing = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [company_id, setCompany_id] = useState("");
  const [location, setLocation] = useState("");

  const {isLoaded} = useUser()
 
  const {fn:fnJobs, data:jobs, loading:loadingJobs} = useFetch(getJobs, {
    searchQuery,
    company_id,
    location
  })


  useEffect(() => {
    if(isLoaded) fnJobs();
  }, [isLoaded, searchQuery, company_id, location]);

  if(!isLoaded){
    <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Jobs</h1>

        {/* {} */}

        {loadingJobs && <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />}

        {loadingJobs === false && (
          <div>
            {jobs?.length ? 
            (jobs.map((job) => {
              return <JobCard key={job.id} job={job}/>
            })) : (
              <div>
              No Jobs Found
              </div>
            )}
          </div>
        )}
    </div>
  )
}

export default JobListing