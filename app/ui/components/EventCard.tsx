import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import "./EventCard.scss";

interface EventCardProps {
    link: string;
}

export default function EventCard({link} : EventCardProps) {
  return (
    <Card className='event_card'>
      <CardMedia
        component="img"
        image="/static/images/Eco-Boat-Conrwall-300x300.jpg"
        title="green iguana"
        className='event_card_image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Событие
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Описание события
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Даты: 01.01.2022 - 01.01.2022
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Регистрация до: 01.01.2022
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Поделиться</Button>
        <Button size="small"> <Link href={`/event/${link}`}>Подробнее</Link> </Button>
      </CardActions>
    </Card>
  );
}