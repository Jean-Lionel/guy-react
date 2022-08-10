import {useState,useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from "react-paginate";
import { Box } from '@mui/material';

const useFetchDataWithPagination = (url) => {

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
            console.error(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })

        return () => abortConnection.abort()

    },[url])

    const changePage = ({selected}) => {
       
        const abortConnection = new AbortController();
        const token = localStorage.getItem('token');
        axios.get(url + "?page="+ selected,{
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
            console.error(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })

        return () => abortConnection.abort()
    }

    const searchIntoDatabase = (searchQuery) => {
        console.log(searchQuery)

        const abortConnection = new AbortController();
        const token = localStorage.getItem('token');
        axios.get(searchQuery,{
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
            console.error(error.message);
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })

        return () => abortConnection.abort()
    }

    const refreshSearch = () => {
        searchIntoDatabase(url)
    }


    const pageCount = Math.ceil(data?.data?.total / data?.data?.per_page);

    const paginate = () => {
       
        return (
           <Box>
                {
                pageCount > 1 && (
                    <ReactPaginate
            
                    previousLabel={"Précedent"}
                    nextLabel={"Suivant"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousClassName=""
                    activeClassName={"paginationActive"}
                    
                   />

                ) 
            }
           </Box>
        );
    }
    
    const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => JSON.stringify(d).toLowerCase().includes(query));
    }
    };
    
    return {data, isLoading, error,paginate, searchIntoDatabase, refreshSearch, filterData};
    
}
 
export default useFetchDataWithPagination;