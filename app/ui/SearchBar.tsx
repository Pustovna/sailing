import Box from "@mui/material/Box";
import * as React from "react";
import Calendar from "./components/Calendar";
import SearchField from "./components/SearchField";
import SelectField from "./components/SelectField";

export default function SearchBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100%",
        backgroundColor: "white",
        padding: "10px",
      }}
      gap={4}
    >
      <SearchField />
      <Calendar />
      <SelectField />
    </Box>
  );
}
