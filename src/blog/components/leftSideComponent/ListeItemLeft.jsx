import * as React from 'react';
import { Box, Grid } from '@mui/material';
import {Link} from 'react-router-dom';
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import { useSelector } from 'react-redux';


export default function ListeItemLeft() {
  const { data: x } = useFetchDataWithPagination("adminheades");
  const [admnistration, setAdmnistration] = React.useState(null);

  const { currentLanguage } = useSelector((storeOf) => {
    return { currentLanguage: storeOf.nisys.currentLanguage };
  })

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
                <u>

                  {currentLanguage.code === "en" ?  (element.title_en ? element.title_en : element.title ):  element.title}
                  
                </u>
              </h6>
              <div>
                {element.admin_contents.map((x, y) => (
                  <Box key={y}
                    sx={{
                      textAlign: 'left'
                    }}
                  >
                    <Link to={"/article-search/"+x.id }>
                      {currentLanguage.code === "en" ? (x.title_en  ??  x.title ): x.title}
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


