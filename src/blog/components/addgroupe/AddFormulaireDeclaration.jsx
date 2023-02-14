import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Admin from "../../../Pages/Admin";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";


const AddFormulaireDeclaration = () => {
    const [title, setTitle] = useState("");
    const { error, submitData } = usePostData();
    const { data, isLoading, refreshSearch } = useFetchDataWithPagination("downloawddoc")
    const [groupeFormulaire, setgroupeFormulaire] = useState(null);
    const [groupeId, setGroupeId] = useState(null);
    const [showUploadFormulaire, setShowUploadFormulaire] = useState(0)
    const [titleFormulaire, setTitleFormulaire] = useState("")
    const [selectedFile, setSelectedFile] = useState("")

    useEffect(() => {
        if (data?.data) {
            setgroupeFormulaire(data?.data)
        }
        return () => {
        };
    }, [data]);

    const addDocument = (e) => {
        // e.preventDefault();
        setShowUploadFormulaire(e.id)
        setGroupeId(e.id)
    }
    const uploadFile = (e) => {
        // alert(groupeId)
        e.preventDefault();
        // alert('je suis cool')
        const form = new FormData();
        form.append("file", selectedFile);
        form.append("title", titleFormulaire);
        form.append("downloawd_doc_id", groupeId);
        submitData("file_declarations", form)
        setSelectedFile("")
        setTitleFormulaire("")
        setShowUploadFormulaire(0)
        setGroupeId(null)
        refreshSearch()
    }
    const updateGroupe = (item) => {
        setGroupeId(item.id)
        setTitle(item.title)
    }

    const saveGroupe = (e) => {
        e.preventDefault();
        const x = { title: title };
        if (groupeId) {
            submitData("downloawddoc/" + groupeId, x, "PUT");
            setGroupeId(null)
            refreshSearch();
        } else {
            submitData("downloawddoc", x, "POST");
             refreshSearch();
        }
        setTitle("")
        setGroupeId(null)
        refreshSearch();
    }

    const deleteContenu = ({id}) => {
        const response = window.confirm("Vous êtes sûr de vouloir supprimer ? ")
        if (response) {
            submitData("file_declarations/" + id, null, "DELETE");
            refreshSearch()
        }
    }
    return (<Admin>
        <Box sx={{
            width: "80%",
            margin: "auto",
        }}>
           {isLoading && <LinearProgress color="success" />} 
            <h6>Ajout un groupe de Formulaire</h6>
            <form action="" onSubmit={saveGroupe}>
            <div className="row">
                    <div className="col">
                        <label htmlFor="">Titre</label>
                    </div>
                    <div className="col">
                        <input type="text" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} />
                        {error && <div className="alert alert-danger">{error.message}</div>}
                    </div>
                    <div className="col">
                        <button className="btn btn-primary"> Sauvegarder </button>
                    </div>
                    </div>
            </form>
            <div className="row">

                {groupeFormulaire && <Box>
                    <h6>
                        Groupe des Formulaires
                    </h6>
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Titre</th>
                                <th>Contenu</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupeFormulaire.map((item, index) => {
                                return (
                                    <>
                                    <tr key={item.id}  style={{ 
                                                            textAlign: 'left',
                                                            
                                                            }}>
                                        <td>{index + 1}</td>
                                            <td>{item.title}</td>
                                            <td>
                                                <ul>
                                                    {item.documents && item.documents.map((doc) => (
                                                        <li
                                                            style={{ 
                                                            textAlign: 'left',
                                                            display: 'flex',
                                                            justifyContent: "space-between",
                                                            gap: "3px",
                                                            }}
                                                        >
                                                            <a href={doc.name}
                                                                
                                                                rel="noreferrer" target="_blank">{doc.title}</a>
                                                            <button
                                                            onClick={() => deleteContenu(doc)}
                                                            >X</button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                        <td>
                                        <button className="btn btn-secondary btn-sm" onClick={() => addDocument(item)}>
                                                Ajouter un document
                                            </button>

                                            <button className="btn btn-primary btn-sm " onClick={() => 
                                               updateGroupe(item)
                                            
                                            }>Modifier</button>
                                            <button className="btn btn-danger btn-sm " onClick={() => {
                                                const r = window.confirm("Vous êtes sûr ? ")
                                                if (r) {
                                                    submitData("downloawddoc/" + item.id, null, "DELETE");
                                                    refreshSearch();
                                                }
                                               
                                            }
                                            }>Supprimer</button>
                                            
                                            
                                        </td>
                                        </tr>
                                        {(
                                            showUploadFormulaire === item.id) && <tr>
                                                <td colSpan={4}>
                                                    <form action="" onSubmit={uploadFile}>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <input type="text" className="form-control form-control-sm" placeholder="Titre du formulaire" value={titleFormulaire} onChange={(e)=> setTitleFormulaire(e.target.value) } />
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input
                                                                    accept=".pdf"
                                                                    type="file" onChange={(e) => (setSelectedFile(e.target.files[0]))} />
                                                            </div>
                                                            <div className="col-md-2">
                                                                <button type="submit"
                                                                    onClick={uploadFile}
                                                                    className="btn btn-sm btn-warning mr-2">
                                                                    Sauvegarder
                                                                </button>
                                                                <button className="btn btn-default btn-sm" onClick={() => {
                                                    setShowUploadFormulaire(0)
                                                }}>
                                                    Fermer
                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </td>
                                           
                                        </tr>
                                        }
                                       
                                    </>
                                )
                            }
                            )}

                        </tbody>

                    </table>

                </Box>
                }
            </div>
            
        </Box>
    </Admin>);
}
 
export default AddFormulaireDeclaration;