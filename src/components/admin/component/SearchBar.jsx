import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({setSearchQuery, handleSubmit}) => {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("je suis un millionnaire")
    // }
   return (
        <form onSubmit={ handleSubmit } >
          <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            label="Rechercher ici !!"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton type="submit"  aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </form>
      )
}

export default SearchBar;