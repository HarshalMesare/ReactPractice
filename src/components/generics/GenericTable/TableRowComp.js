// TableRowComponent.jsx
import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const TableRowComponent = ({ row, columns, handleEdit, deleteListItem }) => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
      {columns.map((column) => {
        if (column.id === 'actions') {
          return (
            <TableCell key={column.id} align={column.align}>
              <Button variant="outlined" onClick={() => handleEdit(row)}>
                Edit
              </Button>
              <Button variant="outlined" onClick={() => deleteListItem(row.id)}>
                Delete
              </Button>
            </TableCell>
          );
        }
        const value = row[column.id];
        return (
          <TableCell key={column.id} align={column.align}>
            {column.format && typeof value === 'number' ? column.format(value) : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
export default TableRowComponent;
