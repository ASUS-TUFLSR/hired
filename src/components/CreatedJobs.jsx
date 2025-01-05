import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react"
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import JobCard from "./JobCard";

const CreatedJobs = () => {

    const {user} = useUser();

    const {
        loading: loadingCreatedJobs,
        data: createdJobs,
        fn: fnCreatedJobs
    } = useFetch(getMyJobs,{
        recruiter_id: user.id,
    });

    useEffect(() => {
        fnCreatedJobs();
    }, [])

    if(loadingCreatedJobs) {
        <BarLoader width={"100%"} color="#36d7b7" className="mb-4" />
    }

  return (
    <div>
        {loadingCreatedJobs === false && (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
            {createdJobs?.length ? 
            (createdJobs.map((created) => {
              return <JobCard key={created.id} job={created} onJobSaved={fnCreatedJobs} isMyJob />
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

export default CreatedJobs