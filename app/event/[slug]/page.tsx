import { Box, Container, Typography } from "@mui/material";
import React, { Suspense } from "react";
import MapContainer from "../../ui/components/map/MapContainer";
import "./event.scss";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <Container maxWidth="lg">
      <Box
        color={"#474646"}
        sx={{
          backgroundColor: "white",
          padding: "20px 40px",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h3" margin={"10px"}>
          Снимаем мачты в Невке
        </Typography>
        <p>20 мая 2025</p>
        <p>
          В Невке{" "}
          <a className="event_tip" href="#map">
            к карте v
          </a>
        </p>

        <p>Массовое снятие мачт</p>
        <p className="event_desctiption">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

      
          <MapContainer />
      
      </Box>
    </Container>
  );
}
