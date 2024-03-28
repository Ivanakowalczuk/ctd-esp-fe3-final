import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Card, Divider, Typography} from '@mui/material';



export interface IPersonaje {
    name: string,
    description: string,
    image: string,
}

const CardPersonaje = ({ name, description, image }: IPersonaje) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', width: 600,}}>
            <CardMedia
                sx={{ width: 200, height: 300 }}
                image={image}
                title={`${name} imagen`}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                    Personaje:
                </Typography>
                <Typography gutterBottom variant="h6" component="div" color="primary">
                    {name}
                </Typography>
                <Divider />
                
                <Typography gutterBottom variant="h5" component="div">
                 Descripción:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description === ''
                        ? "No tiene descripción"
                        : description
                    }
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardPersonaje;
