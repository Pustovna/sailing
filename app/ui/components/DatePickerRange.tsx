"use client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./DatePickerRange.scss";
import * as React from "react";
import { ru } from "date-fns/locale";
import format from "date-fns/format";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { useFilter } from "@/app/context/filter";
import { Button } from "@mui/material";

//documentation: https://github.com/hypeserver/react-date-range
interface IRanges {
  selection: { startDate: Date; endDate: Date; key: string };
}

const DatePicker = ({date} : {date: Date}) => {
  const [selectionRange, setSelectionRange] = React.useState<
    IRanges["selection"]
  >({
    startDate: date,
    endDate: date,
    key: "selection",
  });
  const { updateFilter } = useFilter();

  const handleSelect = (ranges: RangeKeyDict) => {
    const newSelection = ranges.selection as IRanges["selection"] | undefined;

    if (newSelection) {
      const startDate = format(newSelection.startDate, "yyyy-MM-dd");
      const endDate = format(newSelection.endDate, "yyyy-MM-dd");
      updateFilter("date", { startDate, endDate });
      setSelectionRange(newSelection);
    }
  };

  const handleReset = () => {
    setSelectionRange({
      startDate: date,
      endDate: date,
      key: "selection",
    });
    updateFilter("date", {
      startDate: "",
      endDate: "",
    });
  };

  return (
    <>
      <DateRangePicker
        className="datePickerRange_container"
        ranges={selectionRange ? [selectionRange] : []}
        onChange={handleSelect}
        locale={ru}
        staticRanges={[]}
        inputRanges={[]}
        minDate={date}
        dateDisplayFormat="dd.MM.yyyy"
      />
      <Button onClick={handleReset}>Сбросить даты</Button>
    </>
  );
};

export default DatePicker;
