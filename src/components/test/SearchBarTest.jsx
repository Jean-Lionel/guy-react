import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ClearIcon from '@mui/icons-material/Clear';
import data from '../../data/database.json'
import {useState} from "react"

const SearchBarTest = () => {
    const [wordSearch , setWordSearch] = useState("")
    const [filtData, setFiltData] = useState([])

    const handleSearch = e => {
       // e.preventDefault()
        const search = e.target.value
        setWordSearch(search)
        const filterData = data.filter(element => JSON.stringify(element).toLowerCase().includes(search.toLowerCase()))
        
        if(search === "") {
            setFiltData([])
        }else{
            setFiltData(filterData)
        }
    }

    const resetInput = () => {
      
        setFiltData([])
        setWordSearch("")
    }
    return ( <div>

        <div style={{ 
            
            margin: 'auto',
        }}>
            <input style={{
                width: '300px',
                border: '1px solid #ccc',
            }} type="text" 
            placeholder="Search" 
            value={wordSearch}

            onChange={handleSearch}
            
            />
            {
                wordSearch !== "" ?<ClearIcon onClick={resetInput} style={{ cursor: 'pointer'}} /> : <SavedSearchIcon  />
            }

            
            
            
        </div>

        {filtData.length > 0 && 
        (
            <div style={{ 
                backgroundColor: 'grey',
                height: '100px',
                overflow: 'auto',
                width: '300px',
                margin: 'auto',
    
            }}>
    
            
                { filtData.map( (item, index) => {
                    return ( <div key={index}>
                        {item.name}
                    </div> )
                }
                ) }
    
            </div>
            
        )        
        
        }
       

    </div> );
}
 
export default SearchBarTest;