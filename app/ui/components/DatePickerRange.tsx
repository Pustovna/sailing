'use client';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DatePickerRange.scss';
import * as React from 'react';
import { ru } from "date-fns/locale";
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import { useFilter } from '@/app/context/filter';

//documentation: https://github.com/hypeserver/react-date-range
interface IRanges {
  selection: { startDate: Date; endDate: Date; key: string; };
}

const DatePicker = () => {
  const [selectionRange, setSelectionRange] = React.useState<IRanges['selection']>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
    const { updateFilter } = useFilter();

  const handleSelect = (ranges: RangeKeyDict) => {
    console.log(ranges);
    const newSelection = ranges.selection as IRanges['selection'] | undefined;

    if (newSelection) {
      updateFilter('date', newSelection);
      setSelectionRange(newSelection);
    }

  };

  return (
    <DateRangePicker
      className='datePickerRange_container'
      ranges={[selectionRange]}
      onChange={handleSelect}
      locale={ru}
      staticRanges={[]}
      inputRanges={[]}
      minDate={new Date()}
    />
  );
};


export default DatePicker;
