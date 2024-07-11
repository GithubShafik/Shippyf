// @mui
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
// types
import { ItemListNew } from 'src/types/order'; 
// components
import Iconify from 'src/components/iconify';
import { Input } from '@mui/material';
import { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type Props = {
  row: ItemListNew;
  selected: boolean;
  onViewRow: VoidFunction;
  onSelectRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function ItemTableRow({
  row,
  selected,
  onViewRow,
  onSelectRow,
  onDeleteRow,
}: Props) {
  // const { items, category, subCategory, weight, quantity, } = row;


  const confirm = useBoolean();
  const popover = usePopover();

  const renderPrimary = (
    <TableRow hover selected={selected}>

      <TableCell sx={{ display: 'flex', alignItems: 'center' , justifyContent:"space-evenly" }}>
          <row.icon style={{ marginRight: "5px" }} />
        <ListItemText
          primary={row.item}
          secondary={`${row.category} ${row.subCategory}`} 
          primaryTypographyProps={{ typography: 'body2' }}
          secondaryTypographyProps={{ component: 'span', color: 'text.disabled' }}
        />
      </TableCell>

         
      <TableCell>
      <Input placeholder='Weight' value={row.weight} style={{width:50} }/> kg
      </TableCell>


      <TableCell>
      Quantity <Input type='number' placeholder='Quantity' value={row.quantity} style={{width:50} }/>
    </TableCell>

      <TableCell>
      <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </TableCell>
      
    </TableRow>
  );


  return (
    <>
      {renderPrimary}
    </>
  );
}
