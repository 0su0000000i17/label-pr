import Input from '@mui/material/Input';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react';

export const InputHeader = () => {
  const [inputValue, setInputValue] = useState('');
  const [firtsDateValue, setFrstDataValue] = useState<Date | null>(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Input
        placeholder="НАИМЕНОВАНИЕ ПРОДУКТА"
        onChange={(e) => setInputValue(e.target.value)}
        sx={{
          width: '240px',
          color: '#FFFF',
        }}
      />
      <DatePicker
  label="Controlled picker"
  value={firtsDateValue}
  onChange={(newValue) => setFrstDataValue(newValue)}
/>
    </LocalizationProvider>
  );
};
