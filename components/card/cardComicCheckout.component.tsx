import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react'
import Card from '@mui/material/Card';
import { CardContent, CardMedia,  Typography } from '@mui/material';
import { IComics } from 'dh-marvel/pages/index.page';




const CardComicCheckout: FC<IComics> = ({title, thumbnail, id, price }) => {

  const titleShort= (title: string) => {
    if (title.length > 40) {
      return title.slice(0, 40) + '...'; 
    }
    return title;
  };
 
  return (
    <Card sx={{width: "auto", maxWidth: 200, height:400, paddingBottom:3,  mt:10}}>
      
      <CardMedia
        component="img"
        height= "200"
        image={thumbnail?.path.concat(".", thumbnail?.extension)}
        alt="Foto portada del comic"
      />

      <CardContent>
        <Typography gutterBottom variant= "h5" component="div">
        {titleShort(title)}
      </Typography>
      <Typography gutterBottom variant= "h6" component="div">
        Precio. $ {price}
      </Typography>
      </CardContent>
          
    </Card>
  )
}

export default CardComicCheckout