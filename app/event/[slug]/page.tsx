import {
  Box,
  Breadcrumbs,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import React from "react";
import MapContainer from "../../ui/components/map/MapContainer";
import "./event.scss";
import type { Metadata, ResolvingMetadata } from "next";

interface generateMetadataProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<URLSearchParams>; // Изменено на Promise<URLSearchParams>

}

export async function generateMetadata(
  { params, searchParams }: generateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = (await params).slug;
  console.log(searchParams, parent);
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: "Событие",
    description: "Описание события на странице " + id,
    // openGraph: {
    //   // images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <Container maxWidth="lg">
      <Box component={"section"} color={"#474646"} className="event_container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Главная
          </Link>
          <Link underline="hover" color="inherit" href="/calendar">
            Календарь
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href={`/event/${slug}`}
            aria-current="page"
          >
            {slug}
          </Link>
        </Breadcrumbs>
        <Typography
          sx={{ typography: { sm: "h3", xs: "h4" } }}
          margin={"10px 0"}
        >
          Снимаем мачты в Невке
        </Typography>

        <Stack direction="row" spacing={1} marginBottom={"10px"}>
          <Chip label="Невка" />
          <Chip label="Л6" />
        </Stack>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography variant="body1">
            <span className="event_note">Где: </span>в Невке
          </Typography>
          <a className="event_tip" href="#map">
            <SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="gray"
                  d="M12 18a1 1 0 0 0 .74-.33C13.38 16.95 19 10.59 19 7A7 7 0 0 0 5 7c0 3.59 5.62 9.95 6.26 10.67A1 1 0 0 0 12 18zM9 7a3 3 0 1 1 3 3 3.009 3.009 0 0 1-3-3z"
                />
                <path
                  fill="gray"
                  d="M29 11h-9a1 1 0 0 0 0 2h9a1.003 1.003 0 0 1 1 1v5.58l-4.29-4.29a1.008 1.008 0 0 0-1.42 0l-6.38 6.38L26.24 30h-2.83c-6.728-6.74-9.686-9.696-10.7-10.71a1.008 1.008 0 0 0-1.42 0L2 28.58V14a1.003 1.003 0 0 1 1-1h1a1 1 0 0 0 0-2H3a3.009 3.009 0 0 0-3 3v15a2.773 2.773 0 0 0 .3 1.28 2.948 2.948 0 0 0 1.41 1.42A2.947 2.947 0 0 0 3 32h26a3.009 3.009 0 0 0 3-3V14a3.009 3.009 0 0 0-3-3z"
                />
              </svg>
            </SvgIcon>
          </a>
        </Box>

        <Typography variant="body1">
          <span className="event_note">Когда: </span>20.11.2021
        </Typography>
        <Typography variant="body1">
          <span className="event_note">Регистрация до: </span>19.11.2021
        </Typography>
        <Typography variant="body1">
          <span className="event_note">Цена участия: </span>1000 рублей
        </Typography>
        <Typography variant="body1">
          <span className="event_note">Контакт: </span>

          <a href="tel:49354935843" className="contact contact_first">
            +79040000000000
          </a>
          <a href="mailto:mail@mail.com" className="contact">
            mail@mail.ru
          </a>
        </Typography>

        <Box
          sx={{ margin: "30px 0" }}
          maxWidth={"900px"}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
        >
          <Divider />
          <p className="event_desctiption">
            В эту субботу в рамках мероприятия по снятию мачт соберутся яхтсмены
            класса Л6. Да, вы не ослышались — именно это и называется
            «спортивным духом». В процессе они будут носиться вокруг и
            запутываться в веревках, как будто это какая-то хореографическая
            композиция на тему &quot;Мачта и чай&quot;.
          </p>
          <p className="event_desctiption">
            Кстати, планируется и дегустация: кто-то поднимет чашку с чаем, а
            кто-то решит, что пиво — это отличный способ “пополнить запасы
            энергии”. Не удивляйтесь, если в процессе кто-то упадет в столик с
            чаем: это все часть концепции “испытание на выносливость”. В
            перерывах между попытками справиться с мачтами, организаторы
            собираются обсудить, кто из участников уже успел стать мастером
            “пивного метания”, потому что это точно главная цель дня.
          </p>
          <p className="event_desctiption">
            {" "}
            Ну а когда все устанут от “плодотворной” работы, можно будет
            посидеть за столом и попробовать выяснить, кто все-таки лучше — те,
            кто пьет чай, или те, кто предпочитает пиво. В общем, мачты сняты,
            ребята за столом, и все ловят моменты, как будто это действительно
            важно. Главное не забывать, что в таких мероприятиях выбранный стиль
            важнее самой цели!
          </p>
          <Divider />
        </Box>
        {slug && parseInt(slug) % 2 === 0 ? (
          <Box  className='video_container'>
          <video autoPlay muted loop>
            <source
              src="/static/fish.mp4"
              type="video/mp4"
            />
          </video>
          </Box>
        ) : (
          <MapContainer />
        )}
      </Box>
    </Container>
  );
}
