'use client';
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";

import EventCard from "./components/EventCard/EventCard";
import { useSearchParams } from "next/navigation";


export default function EventList({ posts }) {
  const params = useSearchParams();
  const filter = params.get("title");
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 5, md: 2 }} columns={{ xs: 12 }}>
        {filter}
        {posts?.map((post, index) => (
          <Grid  key={index} size={{ xs: 12, sm: 6, md: 12 }}>
            <EventCard post={post} link={String(index)}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
