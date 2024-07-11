import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import SpeakerIcon from '@mui/icons-material/Speaker';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DvrIcon from '@mui/icons-material/Dvr';
import Search from './search-input';
import ProductList from './productList';

interface Item {
  id: number;
  name: string;
  icon: React.ElementType; // This indicates the type of the icon component
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  height: "85%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const items: Item[] = [
  { id: 11, name: 'Mobiles', icon: SmartphoneIcon },
  { id: 12, name: 'Laptops', icon: LaptopIcon },
  { id: 13, name: 'Speaker', icon: SpeakerIcon },
  { id: 14, name: 'TV', icon: DvrIcon },
  { id: 21, name: 'Refrigerators', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
  { id: 22, name: 'Washing Machines', icon: KitchenIcon },
];

const SelectCategoryComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  const toggleItem = (itemId: number) => {
    const selectedIndex = selectedItems.indexOf(itemId);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selectedItems, itemId];
    } else {
      newSelected = selectedItems.filter((item) => item !== itemId);
    }

    setSelectedItems(newSelected);
  };


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "start", width: "80%", margin: "10px auto" }}>
        <Button onClick={handleOpen} variant="contained" color="primary" style={{ marginBottom: 10 }}>
          Add Item +
        </Button>
      </div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #000",
            padding: 10
          }}>
            <Search />
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "row",
            padding: 10
          }}>
            <ProductList />

            <div style={{ display: "flex", flexWrap: "wrap", width: "70%", justifyContent: "center", padding: 10, gap: 30, height: 400, overflow: "scroll" }}>
              {items.map(item => (
                <div key={item.id} style={{}}>
                  <Button
                    variant={selectedItems.includes(item.id) ? "contained" : "outlined"}
                    style={{ width: 200, marginBottom: 10 }}
                    onClick={() => toggleItem(item.id)}
                    startIcon={<item.icon />}
                  >
                    <h4>{item.name}</h4>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
  submit 
        </Button>   
        </Box>
      </Modal>
    </div>
  );
}

export default SelectCategoryComponent;
