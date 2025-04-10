"use client";
import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Cancel } from "@mui/icons-material";
import { useFilter } from "../../context/filter";

const SearchField: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  const { updateFilter, filters } = useFilter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    // Perform search logic here
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      updateFilter("query", search);
    }
  };

  const handleClear = () => {
    console.log(filters);
    setSearch("");
    updateFilter("query", "");
  };

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="search">Поиск</InputLabel>
      <OutlinedInput
        id="search"
        type="text"
        value={search}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="Поиск"
              onClick={() => updateFilter("query", search)}
              edge="end"
            >
              <SearchIcon fontSize={"small"} htmlColor="blue" />
            </IconButton>
            <IconButton
              aria-label="Поиск"
              onClick={() => handleClear()}
              edge="end"
            >
              <Cancel fontSize={"small"} htmlColor="blue" />
            </IconButton>
            
            
          </InputAdornment>
        }
        label="Поиск"
      />
    </FormControl>
  );
};

export default SearchField;
