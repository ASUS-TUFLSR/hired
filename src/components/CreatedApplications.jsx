import { getApplications } from "@/api/apiApplications"
import useFetch from "@/hooks/use-fetch"
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import ApplicatinCard from "@/components/ApplicatinCard";


const CreatedApplications = () => {

    const {user} = useUser();

  const {loading: loadingApplications, 
        data:applications,
        fn:fnApplications} = useFetch(getApplications, {
            user_id: user.id,
        });

        console.log(applications)

  useEffect(() => {
    fnApplications();
  }, [])

  if(loadingApplications){
    <BarLoader width={"100%"} color="#36d7b7" className="mb-4" />
  }

    return (
    <div className="flex flex-col gap-2">
      {applications?.map((application) => {
        return (
          <ApplicatinCard
            key={application.id}
            application={application}
            isCandidate={true}
          />
        );
      })}
    </div>
  );
}

export default CreatedApplications