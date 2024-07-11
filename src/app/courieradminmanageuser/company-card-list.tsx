// @mui
import Box from '@mui/material/Box';
// types
import { ICompanyrCard } from 'src/types/user';
//
import CompanyCard from './company-card';

// ----------------------------------------------------------------------

type Props = {
  users: ICompanyrCard[];
};

export default function CompanyCardList({ users }: Props) {
  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
    >
      {users.map((user) => (
        <CompanyCard key={user.id} user={user} />
      ))}
    </Box>
  );
}
