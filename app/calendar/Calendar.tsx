import { Container } from "@mui/material";
import SearchBar from "../ui/SearchBar";
import Grid from "@mui/material/Grid2";
import EventList from "../ui/EventList";

export default function Calendar({ posts }) {
  console.log(posts);
  return (
    <Container>
      <Grid container columns={12} spacing={3}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
          <SearchBar />
        </Grid>
        {posts.length === 0 ? (
          <p>Нет событий</p>
        ) : (
          
            <Grid  size={{ xs: 12, sm: 12, md: 8, lg: 9 }}>
              <EventList posts={posts}/>
            </Grid>
      
        )}
      </Grid>
    </Container>
  );
}
