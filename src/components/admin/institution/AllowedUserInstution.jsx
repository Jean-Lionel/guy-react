import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import useGetConnectedUser from "../../../utility/useGetConnectedUser";
import usePostData from "../../../utility/usePostData";

const AllowedUserInstution = () => {
   const {userConnected} = useGetConnectedUser();

    const {id} = useParams()
    const {data, isLoading, refreshSearch} = useFetchDataWithPagination("get_user_by_instutions/"+id);
    const [users, setUsers] = useState([]);
    const {submitData } = usePostData()

    useEffect(() => {
        if(data?.data) {
            setUsers(data?.data)
        }
    }, [data])

    // useEffect(() => {
    //     refreshSearch()
    // }, [refreshSearch])

    const deleteUser = (id) => {
        const x = window.confirm(`Are you sure you want to delete`)

        if (x) {
            submitData("users/" + id, null, "DELETE")
            refreshSearch()
        }
       
    }

    return ( <Box>
        <Grid container>
            {isLoading && <div>Loading...</div>}
            <Grid item md={12}>
                <h6>Liste des utilisateurs de l'instution</h6>
                <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" size="small">
                    <TableHead size="small">
                        <TableRow size="small">
                            <TableCell>#</TableCell>
                            <TableCell>Nom et prénom</TableCell>
                            <TableCell>Téléphone</TableCell>
                            <TableCell>Email</TableCell>
                            {
                                userConnected.isAdmin() &&
                                <TableCell>Action</TableCell>
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody size="small">
                        {users.map((row, index) => (
                            <TableRow key={row.id} size="small">
                                <TableCell component="th" scope="row">
                                    {index+1}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.telephone}</TableCell>
                                <TableCell>{row.email}</TableCell>

                                <TableCell>{row.role?.name}</TableCell>
                                {
                                userConnected.isAdmin() &&
                                    <TableCell>
                                        <Button onClick={() => deleteUser(row.id)}>
                                        <PersonRemoveIcon color="red"/>
                                        </Button>
                                    </TableCell>
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Box> );
}
 
export default AllowedUserInstution;