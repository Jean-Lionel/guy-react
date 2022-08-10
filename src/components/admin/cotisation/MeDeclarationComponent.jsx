import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import CardDeclaration from "../Declaration/CardDeclaration";

const MeDeclarationComponent = () => {
    const {data, isLoading,paginate, refreshSearch} = useFetchDataWithPagination("online_declaration_detaches");
    const [declarations, setDeclaration] = useState(null);

    useEffect(() => {
        if (data?.data) {
            setDeclaration(data.data.data);
        }
        return () => {
            setDeclaration(null);
        }

    }, [data]);

    return (
        <Box>
            {isLoading && <LinearProgress color="success" />}
            <h6>Mes declarations</h6>
          
            {declarations && declarations.length > 0 && declarations.map((declaration, index) =>  (
                <Box key={index}>
                  
                    <CardDeclaration declaration={declaration} refreshSearch={refreshSearch} />
                    <hr />
                </Box>
            ))}
            {declarations && declarations.length > 8 && paginate()}
        </Box>
      );
}
 
export default MeDeclarationComponent;