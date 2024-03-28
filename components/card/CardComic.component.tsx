import { useRouter } from 'next/router';
import React, { FC } from 'react'
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { IComics } from 'dh-marvel/pages/index.page';



const CardComic: FC<IComics> = ({title, thumbnail, id }) => {
const router = useRouter();

const handleClickDetails = () => {
  router.push(`/comic/${id}`);
};
const handleClickCheckout = () => {
  router.push(`/checkout/${id}`);
};


  const titleShort= (title: string) => {
    if (title.length > 40) {
      return title.slice(0, 40) + '...'; 
    }
    return title;
  };


  return (
    <Card  sx={{width: "auto", maxWidth: 300, height:380, paddingBottom:3, marginBottom: 1, marginTop: 1}}>
      
      <CardMedia
        component="img"
        height= "200"
        image={thumbnail?.path.concat(".", thumbnail?.extension)}
        alt="Foto portada del comic"
      />

      <CardContent>
        <Typography gutterBottom variant= "h6" component="div">
        {titleShort(title)}
     
        </Typography>
       
      </CardContent>
      <CardActions >
        <Stack  direction='row' spacing={8} >
          <Button   onClick={handleClickDetails} size="medium" color="primary">
            Ver Detalles
            </Button>
            <Button onClick={handleClickCheckout} size="small" variant="contained"  color="primary">
              Comprar
            </Button>
          
        </Stack>
      </CardActions>

      
    </Card>
  )
}

export default CardComic