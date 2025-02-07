import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import "./EventCard.scss";
import { Box } from "@mui/material";

interface EventCardProps {
  link: string;
  post: any;
}

export default function EventCard({ link, post }: EventCardProps) {
  return (
    <Card className="event_card">
      <CardMedia
        component="img"
        image="/static/images/Eco-Boat-Conrwall-300x300.jpg"
        title="green iguana"
        className="event_card_image"
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"space-between"}
      >
        <CardContent sx={{height: 'calc(100% - 46px)', display: 'flex', flexDirection: 'column'}}>
          <Typography gutterBottom variant="h5" component="h5">
          {post.title}
          </Typography>

          <Box display={"flex"} flexDirection={"column"} marginBottom={'16px'}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <span className="event_note">Даты:</span> 01.01.2022 - 01.01.2022
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary"}}>
            <span className="event_note">Регистрация до:</span> 01.01.2022
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <span className="event_note">Цена участия:</span> 1000 руб.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ color: "text.secondary", margin: 'auto 0' }}>
            Замечательное событие в городе Санкт-Петребурге. Приглашаем всех
            желающих принять участие. Или не всех. Или не приглашаем. Сами
            решайте. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Поделиться</Button>
          <Button size="small">
            {" "}
            <Link href={`/event/${link}`}>Подробнее</Link>{" "}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
