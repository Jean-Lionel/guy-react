import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import PreviewIcon from '@mui/icons-material/Preview';
export default function CardMessage(props) {
  const message = props.message;
  const history = useHistory();
  const onpenMessage = (message) =>{
    //console.log(message);
    history.push("ricieved-message/"+ message.id)
  }

  return (
    <Card >
      <Box>
        <Grid>
          <Grid  md={12} sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            bgcolor:  (message.is_opened ? 'white' : 'rgba(0,0,0,0.2)')
          }}>
            <Box sx={{
              textAlign: 'left',
              marginLeft: "10px"
            }} >
              <div>
              Nom de l'instution : <b>{message.nom_instution}</b>
              </div>
              <div>
              Nom du Déclarant : {message.nom_declarant}
              </div>
              <div>
                Type de déclaration : <span >
                {message.type_declaration}
                </span>
              </div>
           
            </Box>
            <Typography sx={{
              mr: '10px',
              textAlign: 'right'
            }} >
              <div>
              <small>Date de déclaration  : {message.date_declaration}</small>
              </div>
              <div>
                <small>
                  <i>
                    Envoyé Le {new Date(message.created_at).toLocaleString()}
                  </i>
                </small>
              
              </div>
              <div>
                  <Button onClick={() => onpenMessage(message)}>
                    <PreviewIcon/>
                    Ouvrir La déclaration
                  </Button>
              </div>
            
              </Typography>
           </Grid>
        </Grid>

      </Box>
     
         
     </Card>
  );
}