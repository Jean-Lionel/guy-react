import { LinearProgress, Box } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";

const CardTableCotisation = ({ url }) => {
    const { data, isLoading, error, paginate } = useFetchDataWithPagination(url)
    const [cotisations , setCotisatios] = useState(null);
    useEffect(() => {
        if (data?.data) {
            setCotisatios(data.data.data);
        }
    }, [data,cotisations,paginate])


    return (<Box>

        {isLoading && <LinearProgress color="success" />}
        {error && <div>{JSON.stringify(error)}</div>}

        <div className="row">

            <table className="table table-striped table-sm table-responsive">
                <thead>
                    <tr>
                        <th>#</th>
                        {/* <th>Code de Societe</th> */}
                        {/* <th>Classement</th> */}
                        <th>Matricule</th>
                        <th>Nom et Prénom</th>
                        <th>Salaire de base</th>
                        <th>Année</th>
                        <th>Mois</th>
                        <th>Point</th>
                    </tr>
                </thead>
                <tbody>
                {cotisations && cotisations.map((el, index) => (
                    <tr key={index}>
                        <td>{el.id}</td>
                        {/* <td>{ el?.institution.identify}</td> */}
                        {/* <td>{ el?.institution.typeInstution}</td> */}
                        <td>{ el.matricule}</td>
                        <td>{el.nom} {el.prenom }</td>
                        <td>{el.salaire_base} </td>
                        <td>{el.annee} </td>
                        <td>{el.mois} </td>
                        <td>{el.points} </td>
                       
                    </tr>
                ))}
                </tbody>
                
            </table>
            {paginate()}
        </div>

    </Box>);
}
 
export default CardTableCotisation;