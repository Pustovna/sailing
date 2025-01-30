'use client';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DatePickerRange.scss';
import * as React from 'react';
import { ru } from "date-fns/locale";
import { DateRangePicker } from 'react-date-range';

//documentation: https://github.com/hypeserver/react-date-range

const MyComponent = () => {
  const [selectionRange, setSelectionRange] = React.useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    console.log(ranges);
    setSelectionRange(ranges.selection);
  };

  return (
    <DateRangePicker
    className='datePickerRange_container'
      ranges={[selectionRange]}
      onChange={handleSelect}
      locale={ ru }
      staticRanges={[]}
      inputRanges={[]}
      minDate={new Date()}

    />
  );
};

export default MyComponent;
