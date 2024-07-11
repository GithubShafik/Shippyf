import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import SpeakerIcon from '@mui/icons-material/Speaker';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DvrIcon from '@mui/icons-material/Dvr';

const categories = [
  {
    "id": 1,
    "category": "Electronics",
    "icon": SmartphoneIcon,
    "items": [
      { "id": 11, "name": "Mobiles", "icon": SmartphoneIcon },
      { "id": 12, "name": "Laptops", "icon": LaptopIcon },
      { "id": 13, "name": "Speaker", "icon": SpeakerIcon },
      { "id": 14, "name": "TV", "icon": DvrIcon }
    ]
  },
  {
    "id": 2,
    "category": "Home Appliances",
    "icon": KitchenIcon,
    "items": [
      { "id": 21, "name": "Refrigerators", "icon": KitchenIcon },
      { "id": 22, "name": "Washing Machines", "icon": KitchenIcon },
      { "id": 23, "name": "Washing Machines", "icon": KitchenIcon },
      { "id": 24, "name": "Washing Machines", "icon": KitchenIcon },
      { "id": 25, "name": "Washing Machines", "icon": KitchenIcon },
    ]
  }
];

export default function ProductList() {
  const [openCategories, setOpenCategories] = React.useState<any>({});

  const handleClickCategory = (index:number) => {
    setOpenCategories({
      ...openCategories,
      [index]: !openCategories[index]
    });
  };

  const handleClickItem = (itemId:number, itemName:string) => {
    // console.log(`Clicked item ${itemId}: ${itemName}`);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: "30%", bgcolor: 'background.paper', borderRight:"1px solid" , height:400 , overflow:"scroll"  , scrollbarWidth:1}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Product Categories
        </ListSubheader>
      }
    >
      {categories.map((category, index) => (
        <React.Fragment key={category.id}>
          <ListItemButton onClick={() => handleClickCategory(index)}>
            <ListItemIcon>
              <category.icon />
            </ListItemIcon>
            <ListItemText primary={category.category} />
            {openCategories[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCategories[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.items.map((item) => (
                <ListItemButton key={item.id} onClick={() => handleClickItem(item.id, item.name)} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}
