'use client';
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";

import EventCard from "./components/EventCard";



export default function EventList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid  key={index} size={{ xs: 4, sm: 4, md: 4 }}>
            <EventCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
