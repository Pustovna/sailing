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
import "./event.scss";
import type { Metadata } from "next";
import MapTwo from "@/app/ui/components/map/MapTwo";
import { getPostsById } from "@/app/actions/events";
import { Community, Contact, EventTypes } from "@/app/types/Event";

interface generateMetadataProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<URLSearchParams>; // Изменено на Promise<URLSearchParams>
}

export async function generateMetadata({
  params,
}: generateMetadataProps): // parent: ResolvingMetadata
Promise<Metadata> {
  // read route params
  const id = (await params).slug;
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

  const post = await getPostsById(slug);

  return (
    <Container maxWidth="lg">
      <Box
        component={"section"}
        color={"#474646"}
        className="event_container"
        marginBottom={"30px"}
      >
        {post.error && <div>Кажется что-то пошло не так</div>}
        {post.success && (
          <>
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
                {post.success.title}
              </Link>
            </Breadcrumbs>
            
            <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"} gap={2}>
              <Typography
                sx={{ typography: { sm: "h3", xs: "h4" } }}
                margin={"10px 0"}
              >
                {post.success.title}
              </Typography>

              {post.success.info.eventTypes && (
                <Stack direction="row" spacing={1}>
                  {post.success.info.eventTypes.map((type: EventTypes) => (
                    <Chip key={type.id} label={type.name} variant="outlined"/>
                  ))}
                </Stack>
              )}
            </Box>

            {post.success.info.community && (
              <Stack direction="row" spacing={1} marginBottom={"10px"}>
                {post.success.info.community.map((type: Community) => (
                  <Chip key={type.id} label={type.name} />
                ))}
              </Stack>
            )}

            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Typography variant="body1">
                <span className="event_note">Где: </span>{" "}
                {post.success.info.place?.address
                  ? post.success.info.place?.address
                  : post.success.info.place?.link
                  ? post.success.info.place?.link
                  : "Не указано"}
              </Typography>
              {post.success.place?.address && (
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
              )}
            </Box>

            <Typography variant="body1">
              <span className="event_note">Когда: </span>
              {post.success.info?.date}
            </Typography>
            {/* <Typography variant="body1">
              <span className="event_note">Регистрация до: </span>
            </Typography> */}
            {post.success.info?.price && (
              <Typography variant="body1">
                <span className="event_note">Цена участия: </span>{" "}
                {post.success.info?.price} рублей
              </Typography>
            )}

            <Box display={"flex"} alignItems={"baseline"} gap={"4px"}>
              <Typography variant="body1" className="event_note">
                Контакт:{" "}
              </Typography>

              {post.success.info?.contact.map((item: Contact) => {
                return (
                  <Box display={"flex"} flexWrap={"wrap"} key={item.id}>
                    <span>{item.name}</span>
                    {item.telegram && (
                      <a href={``} className="contact contact_first">
                        {item.telegram}
                      </a>
                    )}

                    {item.email && (
                      <a
                        href={`mailto:${item.email}`}
                        className="contact contact_first"
                      >
                        {item.email}
                      </a>
                    )}

                    {item.whatsapp && (
                      <a href={``} className="contact contact_first">
                        {item.whatsapp}
                      </a>
                    )}
                  </Box>
                );
              })}
            </Box>

            <Box
              sx={{ margin: "30px 0" }}
              maxWidth={"900px"}
              display={"flex"}
              flexDirection={"column"}
              gap={3}
            >
              <Divider />
              <p className="event_desctiption">
                {post.success.info?.fullDescription}
              </p>

              <Divider />
            </Box>

            {post.success.info?.place.offline ? (
              <MapTwo coordinates={post.success.info?.place.coordinates} />
            ) : (
              <Box className="video_container">
                <video autoPlay muted loop>
                  <source src="/static/fish.mp4" type="video/mp4" />
                </video>
              </Box>
            )}
          </>
        )}
      </Box>
    </Container>
  );
}
