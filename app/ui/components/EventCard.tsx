import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function EventCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/Eco-Boat-Conrwall-300x300.jpg"
        title="green iguana"
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
        <Button size="small">Подробнее</Button>
      </CardActions>
    </Card>
  );
}