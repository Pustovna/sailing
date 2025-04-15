import Box from "@mui/material/Box";
import * as React from "react";
import SearchField from "./components/SearchField";
import SelectField from "./components/SelectField";
import DatePicker from "./components/DatePickerRange";
import { getEventFilters } from "../actions/events";
import { event } from "yandex-maps";

export default function SearchBar({date} : { date: Date }) {
  const [filters, setFilters] = React.useState({
    community: [],
    eventTypes: [],
  });

  
  React.useEffect(() => {
    const fetchFilters = async () => {
      const { error, success } = await getEventFilters();
      if (success) {
        setFilters(success.data[0].componentFilters);
      }
    };
    fetchFilters();
  }, []);
  


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
        names={[...filters.eventTypes]}
        title={"type"}
        label={"Тип"}
      />
      <SelectField
        names={[...filters.community]}
        title={"community"}
        label={"Сообщество"}
      />
      <Box sx={{ zIndex: "9" }}>
        <DatePicker date={date}/>
      </Box>
    </Box>
  );
}
