// TableComponent.jsx
// import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableRowComponent from '../../generics/GenericTable/TableRowComp';
import React, { useState, useMemo } from 'react';
       
const TableComponent = ({ columns, filteredEmployeeList, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, handleEdit, deleteListItem }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (columnId) => {
    if (sortColumn === columnId) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnId);
      setSortDirection('asc');
    }
  };

  const sortedList = useMemo(() => {
    if (!sortColumn) return filteredEmployeeList;

    const sorted = filteredEmployeeList.slice().sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredEmployeeList, sortColumn, sortDirection]);
  
return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
      <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
            <button onClick={() => handleSort(column.id)}>
              {sortColumn === column.id ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
            </button>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
       {/* <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead> */}
        <TableBody>
        {sortedList
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
              <TableRowComponent
                key={row.id}
                row={row}
                columns={columns}
                handleEdit={handleEdit}
                deleteListItem={deleteListItem}
              />
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[1, 5, 10, 25]}
        component="div"
        count={filteredEmployeeList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TableComponent;
