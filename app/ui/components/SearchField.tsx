"use client";
import React from "react";
import { TextField } from "@mui/material";

const SearchField: React.FC = ({ ...props }) => {
  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const searchTerm = event.target.value;
  //     console.log(searchTerm);
  //     // Perform search logic here
  // };
  const { onChange } = props;

  return (
    <TextField
      fullWidth
      label="Поиск события"
      variant="outlined"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchField;
