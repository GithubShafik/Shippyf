import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import SpeakerIcon from '@mui/icons-material/Speaker';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DvrIcon from '@mui/icons-material/Dvr';


const items = [
  { id: 11, name: 'Mobiles', icon: SmartphoneIcon },
  { id: 12, name: 'Laptops', icon: LaptopIcon },
  { id: 13, name: 'Speaker', icon: SpeakerIcon },
  { id: 14, name: 'TV', icon: DvrIcon },
  { id: 21, name: 'Refrigerators', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon }
];

export default function Search() {
  const [filteredOptions, setFilteredOptions] = React.useState(items);

  const handleSearch = (event:any, value:any) => {
    if (!value) {
      setFilteredOptions(items);
      return;
    }

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filteredItems);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={filteredOptions}
      getOptionLabel={(option) => option.name}
      onInputChange={handleSearch}
      sx={{ width: '50%' }}
      renderInput={(params) => <TextField {...params} label="Category" />}
      renderOption={(props, option) => (
        <li {...props}>
          {option.icon && <option.icon sx={{ mr: 1 }} />}
          {option.name}
        </li>
      )}
    />
  );
}
