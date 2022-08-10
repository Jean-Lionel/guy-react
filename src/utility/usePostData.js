import {useEffect, useState} from 'react'
import axios from 'axios'

const usePostData = () => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const [finished, setFinished] = useState(false)
    // Get Token in local storage

    useEffect(() => {
        return () => {
            
        };
    }, [finished]);

    const submitData = async (url, data, method="post") => {
          const abortConnection = new AbortController();
          const token = localStorage.getItem('token');
            setIsLoading(true);
            setFinished(false);
        try {
                const config = {
                    signal : abortConnection.signal,
                        headers :{
                            Authorization : 'Bearer ' + token
                    }
                    }
            const response = method.toLowerCase() === 'post' ?
                await axios.post(url, data, config) :
                (
                    method.toLowerCase() === 'put' ?
                        await axios.put(url, data, config) :
                        await axios.delete(url, config)   
                ) ;

                setResponse(response);
                setError(null);
                setFinished(true);
            } catch (error) {
                console.error(error.message);
                setError(error)
            } finally {
                setIsLoading(false);
        }
    }

  

    return {response, isLoading, error,finished,  submitData};
}
 
export default usePostData;