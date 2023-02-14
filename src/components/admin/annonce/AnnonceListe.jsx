import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";

const AnnonceListe = () => {
    const { data, isLoading, paginate, refreshSearch } = useFetchDataWithPagination("annonces");
    const [annonces, setAnnonces] = useState(null);
    const { submitData } = usePostData();

    useEffect(() => {
        if (data?.data) {
            setAnnonces(data?.data.data);
        }

    }, [data])

    const deleteAnnoce = (e) => {
        const response = window.confirm("êtes-vous sûr ? ")
        if (response) {
            submitData("annonces/" + e, null, "DELETE");
            refreshSearch();
        }
    }

    return (<Box width={{
        width: "90%",
        margin: "auto",
    }}>
        {isLoading && <LinearProgress color="success" />}
        <div className="row">
            <div className="col-md-8">
                <h4> Liste des annonces </h4>
            </div>
            <div className="offset-md-2 col-md-2">
                <button><Link to="/annonce-add">ajouter une annonce</Link></button>
            </div>
        </div>
        <table className="table table-striped table-sm">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Titre</th>
                    <th>Action</th>
                </tr>

            </thead>

            <tbody>
                {annonces && annonces.map((annonce, index) => (
                    <tr key={annonce.id} style={{
                        textAlign: 'left'
                    }}>
                        <td>{index + 1}</td>
                        <td>{annonce.title}</td>
                        <td className="d-flex flex-row">

                            <button className="btn btn-danger btn-block btn-sm ml-2" onClick={() => deleteAnnoce(annonce.id)}>Supprimer</button>
                            <Link to={'annonce-translate/' + annonce.id}  >
                                <button className="btn btn-info btn-sm mr-2">Traduire en anglais</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>

        {paginate()}
    </Box >);
}

export default AnnonceListe;