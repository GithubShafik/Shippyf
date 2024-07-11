'use client';

import React from 'react';
import Container from '@mui/material/Container';
import { useSettingsContext } from 'src/components/settings';
// import { _companyCards } from 'src/_mock';
import CompanyCardList from 'src/sections/user/company-card-list';
import MainLayout from 'src/layouts/main';
import { Button } from '@mui/material';

export default function SelectCompany() {
  const settings = useSettingsContext();

  // // console.log(_companyCards);

  const companyData = [
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      role: 'Astimate time',
      name: 'Lueilwitz and Sons',
      coverUrl: 'undefined/assets/images/cover/cover_1.jpg',
      avatarUrl: 'undefined/assets/images/avatar/avatar_1.jpg',
      numberOfOrder: 999,
      numberOfCustomer: 999,
      astimateTime: 999,
      astimateCost: 999,
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
      role: 'Data Analyst',
      name: 'Gleichner, Mueller and Tromp',
      coverUrl: 'undefined/assets/images/cover/cover_2.jpg',
      avatarUrl: 'undefined/assets/images/avatar/avatar_2.jpg',
      numberOfOrder: 999,
      numberOfCustomer: 999,
      astimateTime: 99.9,
      astimateCost: 999,
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
      role: 'Legal Counsel',
      name: 'Nikolaus - Leuschke',
      coverUrl: 'undefined/assets/images/cover/cover_3.jpg',
      avatarUrl: 'undefined/assets/images/avatar/avatar_3.jpg',
      numberOfOrder: 999,
      numberOfCustomer: 999,
      astimateTime: 999,
      astimateCost: 999,
    },
  ];

  return (
    <MainLayout>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CompanyCardList users={companyData} />
      </Container>
      <div style={{display:"flex" , flexDirection:"row" , justifyContent:"flex-end" , padding:10 , width:"80%" , alignSelf:"center" , margin:"0px auto"}}>
      
  <Button variant="contained" color="primary" href='/' style={{ marginBottom: 10 }}>
  Next 
        </Button>          
          </div>
    </MainLayout>
  );
}
