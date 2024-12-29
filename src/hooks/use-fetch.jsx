import { useSession } from "@clerk/clerk-react"
import { useState } from "react";

const useFetch = (cb, options = {}) => {
    
    const [data, seData] = useState(undefined);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
     
    const {session} = useSession();

    const fn = async(...args) => {
        setLoading(true);
        setError(null);

        try {
             const supabaseAccessToken = await session.getToken({
                template:'supabase',
              });

             const response = await cb(supabaseAccessToken, options, ...args);
             seData(response);
             setError(null);
            } catch (error) {
             setError(error)
            } finally {
             setLoading(false);
            }
    }

    return { fn, data, loading, error };

};

export default useFetch;