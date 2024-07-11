import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Location {
  id: number;
  description: string;
}

interface DropDownProps {
  label: string;
  list: Location[];
  selected: Location | null;
  setSelected: (value: Location | null) => void;
  placeholder?: string;
}

const DropDown: React.FC<DropDownProps> = ({ label, list, selected, setSelected, placeholder = "Select" }) => {

  const handleChange = (event: SelectChangeEvent<any>) => {
    const selectedIndex = event.target.value as string; // event.target.value is a string, as inferred from the MenuItem key and value
    const selectedLocation = list.find(item => item.id === parseInt(selectedIndex, 10)) || null; // Specify radix 10
    setSelected(selectedLocation);
    console.log('location:', selectedLocation);
  };

  const menuItems = list?.map((subItem) => (
    <MenuItem key={subItem.id} value={subItem.id.toString()}>
      {subItem.description}
    </MenuItem>
  ));

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl style={{ width: 200 }}>
        {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected ? selected.id.toString() : ''}
          onChange={handleChange}
          placeholder={placeholder}
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
