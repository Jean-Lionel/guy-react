import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./cardBlog.css"
import {useHistory} from "react-router-dom"

export default function CardBlog(props) {
  const article = props.article;
  const history = useHistory();

  return (
    <Card sx={{
      maxWidth: { md: 300, xs: '100%' },
      '&:hover': {
        cursor: 'pointer',
        border: '1px solid #25fdab'
      },
    }} className="card_blog"
    
    onClick={() => history.push("/detail/"+article.id)}
    >
      <CardMedia
        className="image_artcle"
        component="img"
       
        image={article.image_source_url}
        alt={article.title}

       
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {article.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"   variant="contained">Lire plus</Button>
      </CardActions>
    </Card>
  );
}