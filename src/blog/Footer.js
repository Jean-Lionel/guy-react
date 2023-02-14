import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import navHeader from '../asset/img/navheader.jpg';
import { CssBaseline } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CallIcon from '@mui/icons-material/Call';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
       <img src={navHeader}  alt="Bar de Footer" loading="lazy"  style={{ height: "auto", width: "100%" }}/>
      {'Copyright © '}
      <Link color="inherit" href="https://onpr.bi/">
       ONPR 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} 

    </Typography>
  );
}

function Footer(props) {
 

  return (
    <Box id="web-footer" component="footer" sx={{  }}>
      <Container maxWidth="lg" sx={{ backgroundColor: '#359901', color: 'white'}}>
        <div className="row" >
          <div className="col-md-12">
            <h5>Contact</h5>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled" style={{textAlign: 'left'}}>
              <li>
                <AddLocationAltIcon/>
                <span> Quartier ROHERO I : Chaussée du P.L.RWAGASORE, N°187</span>
              </li>
             
              <li>
              <CallIcon/>
              <span> :(+257) 22 27 6229</span>
              </li>
              <li>
                <MarkunreadMailboxIcon />
                <span> B.P : 3079 Bujumbura II</span>
               
              </li>
            </ul>

          </div>
          <div className="col-md-6" >
            <ul className="list-unstyled" style={{textAlign: 'right'}}>
              <li>E-mail : <a href="mailTO:onpr_burundi@onpr.bi">onpr_burundi@onpr.bi</a>
                 </li>
              <li>Site web : <a href="http://www.onpr.bi">www.onpr.bi</a></li>
            </ul>
       
          </div>
        </div>
        <CssBaseline />
        <Copyright />
      </Container>
    </Box>
  );
}


export default Footer;
