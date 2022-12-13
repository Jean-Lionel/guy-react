import {useState,useEffect} from 'react'
import axios from 'axios'

const useFetchData = (url) => {

    const [data , setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    // Get Token in local storage
    
    useEffect(()=> {
        const abortConnection = new AbortController();
        const token = localStorage.getItem('token');
        axios.get(url,{
            signal : abortConnection.signal,
            headers :{
                Authorization : 'Bearer ' +token
            }
        })
        .then(response => {
            setData(response);
            setError(null);
        })
        .catch(error => {
            console.log(error);
            console.error(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })
        return () => abortConnection.abort()

    },[url])

    return {data, isLoading, error};
    
}
 
export default useFetchData;