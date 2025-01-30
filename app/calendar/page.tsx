import React from 'react';
import EventList from '../ui/EventList';
import Grid from "@mui/material/Grid2";
import { Container } from '@mui/material';
import SearchBar from '../ui/SearchBar';

const Page: React.FC = () => {
    return (
        
        <Container component={'main'} maxWidth="lg" sx={{marginTop: '100px'}}>

        <Grid container columns={12} spacing={3}>
            <Grid size={{xs: 0, sm: 3}}>
           <SearchBar />
            </Grid>
            <Grid size={{xs: 12, sm: 9}}>
           <EventList />
            </Grid>
        </Grid>
        </Container>
    );
};

export default Page; 