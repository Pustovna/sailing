'use client';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer  components={['DatePicker']} sx={{padding: '0'}}>
        <DatePicker label="C" sx={{width: '100%'}} />
        <DatePicker label="По" sx={{width: '100%'}} />
      </DemoContainer>
    </LocalizationProvider>
  );
}