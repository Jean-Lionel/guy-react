import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Link from 'react-router-dom/Link';
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";


export default function ListeItemLeft() {
  const { data: x } = useFetchDataWithPagination("adminheades");
  const [admnistration, setAdmnistration] = React.useState();

  React.useEffect(() => {

    if (x?.data) {
      setAdmnistration(x?.data)
    }

  }, [x])

  return (
    <Box
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <Grid item xs={12} md={12}>

        {
          admnistration && admnistration.map((element, index) => (
            <div key={index}>
             
              <h6>
               <u> {element.title}</u>
              </h6>
              <div>
                {element.admin_contents.map((x, y) => (
                  <Box key={y}
                    sx={{
                      textAlign: 'left'
                    }}
                  >
                    <Link to={"/article-search/"+x.id }>
                      {x.title}
                    </Link>
                    
                  </Box>
                ))}
              </div>
            </div>
          ))
        }
      </Grid>
      
    </Box>
  );
}


