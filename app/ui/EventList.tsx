"use client";
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid2";

import EventCard from "./components/EventCard/EventCard";
import { useFilter } from "../context/filter";
import { Filters } from "../types/EventFilter";

export default function EventList({ posts }: { posts: [] }) {
  const { data, filters } = useFilter() as {
    data: { data: [] };
    filters: Filters;
  };


  const hasFilters = Object.values(filters).some(value => {
    if (typeof value === 'object') {
      return Object.values(value).some(innerValue => innerValue !== "");
    }
    return value !== "";
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 5, md: 2 }} columns={{ xs: 12 }}>
        {hasFilters && data && data.data?.length >= 0
          ? data.data.map((post, index) => {
              return (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 12 }}>
                  <EventCard post={post} link={String(index)} />
                </Grid>
              );
            })
          : posts?.map((post, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 12 }}>
                <EventCard post={post} link={String(index)} />
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}
