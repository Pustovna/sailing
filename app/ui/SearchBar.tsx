import Box from "@mui/material/Box";
import * as React from "react";
import SearchField from "./components/SearchField";
import SelectField from "./components/SelectField";
import DatePicker from "./components/DatePickerRange";

export default function SearchBar({date} : { date: Date }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // minHeight: "100%",
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
      <SelectField
        names={["Сходка буеристов", "Л6", "Любительская регата", "ВФПС"]}
        title={"type"}
        label={"Тип"}
      />
      <SelectField
        names={["Невка", "Геркулес", "Яхтенный чат", "ВФПС"]}
        title={"community"}
        label={"Сообщество"}
      />
      <Box sx={{ zIndex: "9" }}>
        <DatePicker date={date}/>
      </Box>
    </Box>
  );
}
