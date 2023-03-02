import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import usePostData from '../utility/usePostData';
import { useState } from 'react';
import { Alert, LinearProgress } from '@mui/material';


const theme = createTheme();

export default function SignUp() {
   
    const [backendError, setBackendError] = useState('')
    const [succesMessage, setSuccesMessage] = useState('')
    
    const { response, isLoading, error, submitData } = usePostData();
    
    React.useEffect(() => {
        if (error?.response) {
            setBackendError(error.response.data.error);
        }
        if (response && !error) {
            setSuccesMessage(`Enregistrement réussi.  Utilisez votre Matricule et votre Mot de passe pour se connecter  `);
        }
        
    }, [error,backendError, response])
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //console.log(data);

        if (data.get('c_password') !== data.get('password')) {
            setBackendError({
                c_password : 'Les deux mots de passe sont différents'
            });
            return;
        } else {
           submitData('saveMember', data); 
        }
        
        // console.log(response)
        
        console.log('Error ',error)
    };
    
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Idéntification
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
        <TextField
        autoComplete="given-name"
        name="firstName"
        required
        fullWidth
        id="firstName"
        label="First Name / Nom"
        autoFocus
        size="small"
        error={ backendError['firstName'] ? true : false}
        helperText={ backendError['firstName']}
        
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        
        required
        fullWidth
        id="lastName"
        label="Last Name / Prénom"
        name="lastName"
        autoComplete="family-name"
        size="small"
        error={ backendError['lastName'] ? true : false}
        helperText={ backendError['lastName']}
        
        />
        
        </Grid>
        <Grid item xs={12}>
        <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        size="small"
        error={ backendError['email'] ? true : false}
        helperText={ backendError['email']}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
        required
        fullWidth
        id="numero_matricule"
        label="Numéro Matricule"
        name="numero_matricule"
        autoComplete="numero_matricule"
        size="small"
        error={ backendError['numero_matricule'] ? true : false}
        helperText={ backendError['numero_matricule']}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
        required
        fullWidth
        id="telephone"
        label="Téléphone"
        name="telephone"
        autoComplete="telephone"
        size="small"
        error={ backendError['telephone'] ? true : false}
        helperText={ backendError['telephone']}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
        required
        fullWidth
        variant="outlined" 
        size="small"
        
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        error={ backendError['password'] ? true : false}
        helperText={ backendError['password']}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
        required
        fullWidth
        variant="outlined" 
        size="small"
        
        name="c_password"
        label="Confirmer votre Mot de passe"
        type="password"
        id="c_password"
        autoComplete="no"
        error={ backendError['c_password'] ? true : false}
        helperText={ backendError['c_password']}
        />
        </Grid>
        <Grid item xs={12}>
        <FormControlLabel
        control={<Checkbox value="allowExtraEmails" color="primary" />}
        label="Enregistrer vous pour recevoir vos informations"
        />
                            </Grid>
                            {
                                succesMessage &&
                                <Grid item>
                                        <Alert severity="info">{ succesMessage}</Alert>
                            </Grid>
                          }  
                            
        </Grid>
        {
            isLoading && <LinearProgress/>
        }
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >
        S'enregistrer
        </Button>
        
        
        <Grid container justifyContent="flex-end">
        <Grid item>
        <Link to="/login" variant="body2">
        Avez-vous déjà un compte ? Entre ici 
        </Link>
        </Grid>
        </Grid>
        </Box>
        </Box>
        
        </Container>
        </ThemeProvider>
        );
    }
    