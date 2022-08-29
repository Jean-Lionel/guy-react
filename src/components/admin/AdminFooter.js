import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://onpr.bi/">
        ONPR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function AdminFooter() {
  return (
    <Box
      sx={{
        position: "fixed",

        width: "100%",
      }}
    >

      <Box
        component="footer"
        sx={{
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Office National des Pensions et Risques Professionnels
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}