import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {useState} from "react";

const useSearchInput = () => {
    const [data, setData] = useState([{}]);
    let search = "";
    const searchIntoDatabase = (e) => {
        e.preventDefault();
        const q = filterData(search, data);
        setData(q)
        console.log("Vous avez cherchez " + search);
    }

    const setSearchQuery = (e) => {
        search = e.target.value
    }

    const filterData = (query, data) => {
        if (!query) {
          return data;
        } else {
          return data.filter((d) => JSON.stringify(d).toLowerCase().includes(query.toLowerCase()));
        }
      };
    const SearchBar = () =>{
        return  (
            <form>
            <TextField
                id="search-bar"
                className="text"
                onInput={setSearchQuery}

                label="Rechercher ici !!"
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
            <IconButton onClick={searchIntoDatabase} type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
            </form>
        );
    }
    
    return {data, setData,SearchBar, searchIntoDatabase}
}
 
export default useSearchInput;