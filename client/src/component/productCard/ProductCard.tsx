import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
type CardProps={
    src?:string,
    title?:string,
    price?:string,
    body?:string,
    quantity?:string



}
export default function MediaCard(props: CardProps) {
    const {src,title,price,body,quantity}= props
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={src}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {price}
        </Typography>
        <Typography component="p">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
        {body}</Typography>
      </CardContent>
      <Typography>{quantity}</Typography>
      <CardActions>
       
      </CardActions>
    </Card>
  );
}

