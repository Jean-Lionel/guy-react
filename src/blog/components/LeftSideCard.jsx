import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import ListeItemLeft from './leftSideComponent/ListeItemLeft';

function LeftSideCard(props) {

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent >
            <ListeItemLeft data={leftData}/>
          </CardContent>
          
        </Card>
      </CardActionArea>
    </Grid>
  );
}

const leftData = [
   {
      title: 'Direction Générale',
      corps: [
        {
          label: 'Secrétariat',
        },
        {
          label: 'Conseillers',
        },
        {
          label: 'Agences',
        },
        {
          label: 'Cellule Communication  et Relations Publiques',
        },
        {
          label: 'Cellule Informatique',
        },
        {
          label: 'Médecin Conseil',
        },
        {
          label: 'Actuaire',
        },
        {
          label: 'Audit Interne',
        },
        {
          label: 'Bibliothèque et Archives',
        },
      ]
  },
  {
    title: 'Direction Administrative et Finacière',
    corps :[
      {
        label: 'Secrétariat',
      },
      {
        label: 'Service du Personnel et Logistique',
      },
      {
        label: 'Service de Recouvrement',
      },
      {
        label: 'Service Comptable',
      }
    ]

  },
  {
    title: 'Direction des Prestation',
    corps :[
      {
        label: 'Secrétariat',
      },
      {
        label: 'Service des Pensions',
      },
      {
        label: 'Service des Risques Professionnels',
      }
    ]
  }

]


export default LeftSideCard;


