import React from 'react';
import EventList from '../ui/EventList';
import Grid from "@mui/material/Grid2";
import { Container } from '@mui/material';
import SearchBar from '../ui/SearchBar';

import './calendar.scss';

const Page: React.FC = () => {
    return (
        
        <Container className='calendarPage_container' component={'main'} maxWidth="lg">

        <Grid container columns={12} spacing={3}>
            <Grid size={{xs: 12, sm: 3}}>
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