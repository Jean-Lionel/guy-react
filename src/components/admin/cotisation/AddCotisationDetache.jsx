import { Box, Input, Alert, LinearProgress, Grid, Button, AlertTitle } from "@mui/material";
import useReadExcel from "../../../utility/useReadExcel";
import { useEffect, useState } from "react"
import usePostDate from "../../../utility/usePostData";
const AddCotisationDetache = () => {

    const { response, isLoading, error, finished, submitData } = usePostDate();
    const { data, dataTable, handleFileUpload } = useReadExcel();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        return () => {

        };
    }, [finished]);
    const saveData = (e) => {
        e.preventDefault();
        // console.log(data);
        const postData = new FormData()
        postData.append('data', JSON.stringify(data));
        postData.append('institution_id', 1);  // name of the file

        if (data.length > 0) {
            submitData("cotisations_detaches", postData);
        } else {
            setErrorMessage("Veuillez charger un fichier excel");
        }

    }
    return (
        <Box>
            <h5>Chargement des données des detaches</h5>
            {response && (
                <Alert severity="success"> {response?.data.success}</Alert>
            )}

            {errorMessage && <Alert severity="error"> {errorMessage}</Alert>}

            {
                error && (
                    <Alert severity="error">
                        <AlertTitle>Erreur</AlertTitle>
                        <p>
                            une erreur est survenue lors de l'enregistrement des données. Verfiez vos données et Réessayez encore !!!
                        </p>
                        <p>
                            {JSON.stringify(error)}
                        </p>
                    </Alert>
                )
            }

            {isLoading && (
                <LinearProgress color="success" />
            )}
            {/* {JSON.stringify(loadInstitutions)} */}

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    {data.length && <h5>
                        {data.length}
                    </h5>}

                    <form onSubmit={saveData}>
                        <Grid container spacing={2}>
                            {/* <Grid item>
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300 }}
                    required
                    renderInput={(params) => <TextField {...params} size="small" label="INSTUTION" />}

                    onChange={(event, v) => {setInstutionId(v?.value)}}
                />
                </Grid> */}
                            <Grid item sx={{ m: 2 }}>
                                <Input required type="file" label="Chargement du fichier excel" accept="csv,xlsx,xls" onChange={handleFileUpload} />
                            </Grid>
                            <Grid item sx={{ m: 2 }}>
                                <Button type="submit" variant="contained" onClick={saveData}  >Enregistrer</Button>
                            </Grid>

                        </Grid>
                    </form>


                </div>
            </Box>
            <div>
                {dataTable()}
            </div>
        </Box>
    );
}


export default AddCotisationDetache;