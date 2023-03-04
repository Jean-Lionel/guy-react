import { useEffect, useState } from "react";
import { Alert, Box, CssBaseline, Grid, LinearProgress } from "@mui/material";
import DataTable from 'react-data-table-component';
import useFetchData from "../../utility/useFecthData";


const columns = [
    {
        name: 'ANNEE',
        selector: row => row.annee,
        sortable: true,
    },
    {
        name: 'MOIS',
        selector: row => row.mois,
        sortable: true,
    },
    {
        name: 'SALAIRE DE BASE',
        selector: row => row.salaire_base,
        sortable: true,
    },
    {
        name: 'COTISATION',
        selector: row => row.cotisation_employee,
        sortable: true,
    },
    {
        name: 'POINT',
        selector: row => row.points,
        sortable: true,
    },
];

const ListeCotisationClientDetaches = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const {data : cotisation} = useFetchData('cotisation_detaches');
    
    useEffect(() => {
      
        if (cotisation?.data) {
            setData(cotisation.data)
        }
    }, [cotisation])
    
    const nombreTotal = () => {
        let somme = 0;
        data.map(item => {
            somme += item.points;
            return {
                
            }
        })
        return somme;
    }



  
    return (<Box
        sx={{
            width: '90%',
            margin: 'auto'
    }}
    >
        {/* <SearchBar onChange={setMatricule} size="small" onRequestSearch={searchInformation} placeholder="Saisissez ici votre Numéro matricule ONPR" /> */}
       
      
        <Box>
            <h6>Liste des cotisations</h6>
        </Box>

        {loading && (
            <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
        {error && 
        <Alert severity="error">{error}</Alert>}
        <div>
        
        {!error && Array.isArray(data)  && data.length !== 0 && (
            <Box>
               <Grid container spacing={2} >
                   <Grid item xs={12}>
                       <h6>RELEVE DES COTISATIONS DE : </h6>
                        <CssBaseline/>
                   </Grid>
                     <Grid item xs={6} sx={{ 
                         textAlign: 'left',
                     }}>
                        <h6>NOM ET PRENOM : {data[0]?.nom} {data[0]?.prenom}</h6>

                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'right'}}>
                        <h6>Matricule : {data[0]?.matricule}</h6>
                    </Grid>
                    <Grid item xs={6} sx={{ 
                        textAlign: 'left',
                    }}>
                        <h6>NOMBRE DE MOIS TOTAL : {data.length}</h6>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: 'right'}}>
                        <h6>TOTAL DES POINTS : {nombreTotal()}</h6>
                    </Grid>

               </Grid>

                    <DataTable
                    columns={columns} 
                    data={data}
                    pagination={true}
                    
                />
            </Box>
        )}
        </div>
    </Box> );
}
 
export default ListeCotisationClientDetaches;