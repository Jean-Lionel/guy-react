import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import axios from "axios";
import { Alert, Box, CssBaseline, Grid, LinearProgress } from "@mui/material";
import DataTable from 'react-data-table-component';


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

const ListeCotisationClient = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [matricule, setMatricule] = useState("");
    const searchInformation = (e) => {
        fetchData()
    }
    const nombreTotal = () => {
        let somme = 0;
        data.map(item => {
            somme += item.points;
            return {}
        })
        return somme;
    }

    const fetchData = async () => {
        if (matricule === "") {
            setError("Veuillez entrer un matricule");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`cotisations_afiliers/${ matricule }`);
            const json = await response.data;
            setData(json);
            if (json.length === 0) {
                setError("Aucun résultat");
            }
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };


    return (<div>

        <div className="row">
            <SearchBar onChange={setMatricule}
                size="small"
                onRequestSearch={searchInformation}
                placeholder="Saisissez ici votre Numéro matricule ONPR" />

        </div>
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

            {!error && Array.isArray(data) && data.length !== 0 && (
                <Box>
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <h6>RELEVE DES COTISATIONS DE : </h6>
                            <CssBaseline />
                        </Grid>
                        <Grid item xs={6} sx={{
                            textAlign: 'left',
                        }}>
                            <h6>NOM ET PRENOM : {data[0]?.nom} {data[0]?.prenom}</h6>

                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <h6>Matricule : {data[0]?.matricule}</h6>
                        </Grid>
                        <Grid item xs={6} sx={{
                            textAlign: 'left',
                        }}>
                            <h6>NOMBRE DE MOIS TOTAL : {data.length}</h6>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
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
    </div>);
}

export default ListeCotisationClient;