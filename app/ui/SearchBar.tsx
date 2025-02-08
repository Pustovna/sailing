'use client';
import Box from "@mui/material/Box";
import * as React from "react";
import SearchField from "./components/SearchField";
import SelectField from "./components/SelectField";
import DatePicker from "./components/DatePickerRange";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const setFilter = (data) => { 
    router.push("?title=" + data);
  }

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
      <SearchField onChange={setFilter}/>
      <SelectField names={["Сходка буеристов", "Л6", "Любительская регата", "ВФПС"]} title={'Тип события'}/>
      <SelectField names={["Невка", "Геркулес", "Яхтенный чат", "ВФПС"]} title={'Сообщество'}/>
      <Box sx={{zIndex: '9'}}>
      <DatePicker />
      </Box>
      
    </Box>
  );
}
