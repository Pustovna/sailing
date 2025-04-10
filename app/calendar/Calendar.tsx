"use client";
import { Container } from "@mui/material";
import SearchBar from "../ui/SearchBar";
import Grid from "@mui/material/Grid2";
import EventList from "../ui/EventList";
import { FilterProvider } from "../context/filter";

export default function Calendar({ posts, newDate } : { posts: [], newDate: Date }) {

  return (
    <Container>
      <FilterProvider>
        <Grid container columns={12} spacing={3}>
          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
            <SearchBar date={newDate} />
          </Grid>
          {posts?.length === 0 ? (
            <p>Нет событий</p>
          ) : (
            <Grid size={{ xs: 12, sm: 12, md: 8, lg: 9 }}>
              <EventList posts={posts} />
            </Grid>
          )}
        </Grid>
      </FilterProvider>
    </Container>
  );
}
