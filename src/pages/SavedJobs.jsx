import { getSavedJobs } from "@/api/apiJobs";
import JobCard from "@/components/JobCard";
import useFetch from "@/hooks/use-fetch"
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

const SavedJobs = () => { 
 
  const {isLoaded} = useUser();

  const {loading: loadingSavedJobs, data: savedJobs, fn: fnSavedJobs} = useFetch(getSavedJobs);
  
  useEffect(() => {
    if(isLoaded) fnSavedJobs();
  }, [isLoaded])

  if(!isLoaded || loadingSavedJobs){
    <BarLoader width={"100%"} className="mb-4" color="#36d7b7" />
  }

  return (
    <div>
       <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        Saved Jobs
        </h1>
        {loadingSavedJobs === false && (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
            {savedJobs?.length ? 
            (savedJobs.map((saved) => {
              return <JobCard key={saved.id} job={saved.job} saveInit={true} onJobSaved={fnSavedJobs} />
            })) : (
              <div>
              No Saved Jobs Found
              </div>
            )}
          </div>
        )}
    </div>
  )
}

export default SavedJobs