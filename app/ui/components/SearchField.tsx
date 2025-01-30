'use client';
import React from 'react';
import { TextField } from '@mui/material';

const SearchField: React.FC = () => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        console.log(searchTerm);
        // Perform search logic here
    };

    return (
        <TextField
            fullWidth
            label="Поиск"
            variant="outlined"
            onChange={handleSearch}
        />
    );
};

export default SearchField;