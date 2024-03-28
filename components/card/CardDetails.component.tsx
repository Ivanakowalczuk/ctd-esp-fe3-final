import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import AccordionsCharacters from '../accordions/acordionsCharacter.component';
import Box from '@mui/material/Box';

export interface CardDetailsComic {
    title: string,
    description: string,
    image: string,
    id: number,
    price: number,
    oldPrice: number
    stock: number
    characters: any
}

const CardDetails = ({ title, description, image, price, id, oldPrice, stock, characters }: CardDetailsComic) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', }}>
            <CardMedia
                sx={{ width: 300, height: 350 }}
                image={image}
                title={`${title} imagen`}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                        <span style={{ textDecoration: 'line-through' }}>${oldPrice}</span>
                        <span style={{ marginLeft: '0.5rem' }}>${price}</span>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {!description
                            ? "Sin descripción disponible"
                            : description
                        }
                    </Typography>
                </CardContent>
                <CardActions>
                    {stock > 0
                        ?
                        <Link href={{ pathname: "/checkout/", query: `comic=${id}` }} >
                            <Button variant="contained" >
                                Comprar
                            </Button>
                        </Link>
                        :
                        <Button variant="contained" disabled>
                            Sin stock disponible
                        </Button>
                    }
                </CardActions>
                <AccordionsCharacters title='Personajes del cómic' characters={characters} />
            </Box>
       
        </Card>
    );
}

export default CardDetails;
