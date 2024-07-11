'use client';

import React, { useEffect, useState } from 'react';
import MainLayout from 'src/layouts/main';
import Button from '@mui/material/Button';
import { paths } from 'src/routes/paths';
import { getDropLocation, getPickUpLocation } from 'src/services/get-request';
import ItemList from './itemTable';
import SelectCategoryComponent from './selectCategoryComponent';
import DropDown from './drop-down';

interface Location {
  id: number;
  description: string;
}

const SelectCategory: React.FC = () => {
  const [fromLocation, setFromLocation] = useState<Location | null>(null);
  const [toLocation, setToLocation] = useState<Location | null>(null);
  const [pickUpLocation, setPickUpLocation] = useState<Location[]>([]);
  const [dropLocation, setDropLocation] = useState<Location[]>([]);

  useEffect(() => {
    getPickUpLocation()
      .then((res) => {
        if (res.code === "Success") {
          setPickUpLocation(res.data);        
        } else {
          throw new Error(`Error fetching pick up locations: ${res.message}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    getDropLocation()
      .then((res) => {
        if (res.code === "Success") {
          setDropLocation(res.data);
        } else {
          throw new Error(`Error fetching drop locations: ${res.message}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });      
  }, []);

  return (
    <MainLayout>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <DropDown
          label="From Location"
          list={pickUpLocation}
          selected={fromLocation}
          setSelected={setFromLocation}
          placeholder="Choose pickup"
        />
        <DropDown
          label="To Location"
          list={dropLocation}
          selected={toLocation}
          setSelected={setToLocation}
          placeholder="Choose drop"
        />
      </div>
      <SelectCategoryComponent />
      <ItemList />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          width: '80%',
          alignSelf: 'center',
          margin: '0px auto',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          href={paths.selectCompany}
          style={{ marginBottom: 10 }}
        >
          Next
        </Button>
      </div>
    </MainLayout>
  );
}

export default SelectCategory;
