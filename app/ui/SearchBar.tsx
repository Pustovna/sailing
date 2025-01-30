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
        borderRadius: "10px",
        boxShadow: "4px 3px 11px 9px rgb(47 61 69 / 97%)",
      }}
      gap={1}
      display={"flex"}
      flexDirection={"column"}
    >
      <SearchField />
      <Calendar />
      <SelectField />
    </Box>
  );
}
