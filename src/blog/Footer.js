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
            <div className="col-md-4">
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
            <div className="col-md-4"  >
            <ul className="list-unstyled" style={{textAlign: 'right'}}>
            <li>E-mail : <a href="mailTO:onpr_burundi@onpr.bi" style={{
                color: '#ffffff'
            }}>onpr_burundi@onpr.bi</a>
            </li>
            <li>Site web : <a href="http://www.onpr.bi" style={{
            color: '#ffffff'
                                }}>www.onpr.bi</a></li>
            <li>Web Mail : <a href="http://www.onpr.bi:2096" style={{
            color: '#ffffff'
                                }}>www.onpr.bi</a></li>
                                
            <li> </li>
        </ul>
        
        </div>
        <div className="col-md-4">
        <td width="275">
        
        <table className="footer-link" width="275" height="130" border="0" cellpadding="2" cellspacing="0" class="tabl" >
        <tbody><tr>
        <td><div align="center">
        <table width="245" border="0" cellspacing="0" cellpadding="0">
        <tbody><tr>
        <td colspan="2"><div align="center">
        <table width="190"  border="0" cellspacing="0" height="17" border="0" cellpadding="0" cellspacing="0">
        <tbody><tr>
        <td width="168"><span class="style19">LIENS</span></td>
        </tr>
        </tbody></table>
        </div></td>
        </tr>
        <tr>
        <td width="12">&nbsp;</td>
        <td width="233"><span class="style15"><a href="https://www.presidence.gov.bi" 
        style={{
            color : 'white'
        }}
        >Présidence de la République</a> </span></td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td><span class="style15"><a href="http://www.vicepresidence2.gov.bi"  style={{
            color : 'white'
        }}>2ème Vice-Présidence </a></span></td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td><span class="style15"><a href="http://inss.gov.bi"  style={{
            color : 'white'
        }}>INSS</a></span></td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td><span class="style15"><a href="http://www.ecassa.org"  style={{
            color : 'white'
        }}>ECASSA</a></span></td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td><span class="style15"><a href="https://www.issa.int/fr"  style={{
            color : 'white'
        }}>ISSA</a></span></td>
        </tr>
        <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>
        </tbody></table>
        </div></td>
        </tr>
        </tbody></table></td>
        
        </div>
        </div>
        <CssBaseline />
        <Copyright />
        </Container>
        </Box>
        );
    }
    
    
    export default Footer;
    