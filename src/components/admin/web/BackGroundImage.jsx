import { Alert, Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";

const BackGroundImage = () => {
    const {  isLoading, error, submitData } = usePostData()
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const { data, isLoading: loading , paginate, refreshSearch} = useFetchDataWithPagination("slides")
    const [imagesListe, setImagesList] = useState(null)
    useEffect(() => {
        if (data?.data) {
            setImagesList(data.data.data)
        }
    }, [data])

    const deleteImage = (id) => {
        const r = window.confirm("êtes-vous sûr ? ")
        if (r) {
            submitData(`slides/${id}`, null, "DELETE")
            refreshSearch();
        }
       
    }
 
    const saveData = (e) => {
        e.preventDefault();
        if (image === "" || title === "") {
            setErrorMessage("Veuillez remplir tous les champs")
        } else {
            const data = new FormData()
        data.append("image", image)
        data.append("title", title)
            submitData("/slides", data)
            refreshSearch();
            setImage("")
            setTitle("")
        }

        refreshSearch();
    }
    return (<>
        
        <Box sx={{ width: '80%', margin: 'auto'}}>
            {isLoading && <LinearProgress color="success" />}
            <form action="" onSubmit={saveData}>
                <div className="row">
                    <div className="col-md-8 offset-1">
                        {errorMessage && <Alert severity="error">Une erreur est survenue : {errorMessage}</Alert>}
                        {error && <Alert severity="error">Une erreur est survenue : {error?.message}</Alert>}
                    </div>
                <div className="col-md-4">
                    <div className="form-group">
                            <label htmlFor="title">Titre</label>
                            <input required type="text" className="form-control form-control-sm"
                                value={title}
                                onChange={(e)=> setTitle(e.target.value)}
                                placeholder />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                            <label htmlFor="titles">Image</label>
                            <input required type="file" accept=".jpeg,.jpg"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="form-control  form-control-sm" placeholder />
                    </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <button className="btn btn-primary mt-3 btn-sm" onClick={saveData}> Uppload </button>
                        </div>
                    </div>
            </div>
            </form>
            <div className="row mt-2">
                {loading && <LinearProgress color="error" />}
                <h4>Les images partagés</h4>
            
                {imagesListe && imagesListe.map((item, index) => (
                    <div className="col-md-3" key={index}>
                        <img src={item.image} alt={item.title} className="img-fluid" />
                        <div className="text-center">
                            <h6>{item.title}</h6>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger btn-block" onClick={() => deleteImage(item.id)}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                Supprimer
                            </button>
                        </div>
                    </div>
                ))}

                {paginate()}
                
            </div>
        
        </Box>
    </>);
}
 
export default BackGroundImage;