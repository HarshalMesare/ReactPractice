// EmployeeTable.jsx
import React, { useState } from 'react';
import Navbar from '../../generics/Navbar/Navbar';
import XLSX from 'sheetjs-style';
import styles from '../../pages/TodoListPage/Table.module.css';
import  DialogComponent from  '../../generics/GenericTable/DialogueComp';
import SearchBarComponent from '../../generics/GenericTable/SearchBarComp';
import TableComponent from '../../generics/GenericTable/TableComp';

const columns = [
  { id: 'id', label: 'S.No' },
  { id: 'name', label: 'Name' },
  { id: 'department', label: 'Department' },
  { id: 'designation', label: 'Designation' },
  { id: 'type', label: 'Type' },
  { id: 'number', label: 'Number' },
  { id: 'actions', label: 'Actions' },
];    
   
const rows = [
  {
    id: 1,
    name: 'Harshal Mesare',
    department: 'IT',
    designation: 'Front-end developer',
    type: '9-5',
    number: '82826732526'
  },
  {
    id: 2,
    name: 'Riya Patidar ',
    department: 'IT',
    designation: 'Flutter Developer',
    type: 'fulltime',
    number: '82823226'
  },
  {
    id: 3,
    name: 'Eddie Brock ',
    department: 'IT',
    designation: 'Software Developer',
    type: 'fulltime',
    number: '82826732526'
  },
  {
    id: 4,
    name: 'Awani Panwar',
    department: 'IT',
    designation: 'Android Developer',
    type: '9-5',
    number: '82826732526'
  },
  {
    id: 5,
    name: 'Roman Valley',
    department: 'IT',
    designation: 'IOS Developer',
    type: '9-5',
    number: '82826732526'
  },
  {
    id: 6,
    name: 'allu arjun ',
    department: 'IT',
    designation: 'Angular Developer',
    type: '9-5',
    number: '82826732526'
  },
  {
    id: 7,
    name: 'Tom holand ',
    department: 'IT',
    designation: 'Full-stack Web developer',
    type: '9-5',
    number: '82826732526'
  },
  {
    id: 8,
    name: 'peter parker',
    department: 'IT',
    designation: 'Back-end developer', 
    type: '9-5',
    number: '82826732526'
  },
  {
    id: 9,                                
    name: 'chris hamsworth',             
    department: 'IT',
    designation: 'mern-stack developer',
    type: '9-5',
    number: '82826732526'
  },
  {
    id: 10,
    name: 'nick fury ',      
    department: 'IT',      
    designation: 'Testing',   
    type: '9-5',             
    number: '82826732526'    
  },
];

  const EmployeeTable = () => {
  const [editRowIndex, setEditRowIndex] = useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    designation: '',
    type: '',
    number: '',
  });
  const [employeeList, setEmployeeList] = useState([...rows]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const _employees = [...employeeList];
  
    const data = {
      ...formData,
      id: employeeList.length + 1,
    };
  
    if (editRowIndex !== null) {
      _employees[editRowIndex] = data;
    } else {
      _employees.push(data);
    }
    setEmployeeList(_employees);

    setFormData({
      name: '',
      department: '',
      designation: '',
      type: '',
      number: '',
    });
    setOpen(false);
    setEditRowIndex(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (row) => {
    const rowIndex = employeeList.findIndex((item) => item.id === row.id);
    setEditRowIndex(rowIndex);
    setOpen(true);

    setFormData({
      name: row.name,
      department: row.department,
      designation: row.designation,
      type: row.type,
      number: row.number,
    });
  };

  const deleteListItem = (id) => {
    const updatedList = employeeList.filter((item) => item.id !== id);
    setEmployeeList(updatedList);
  };

  const handleSearch = () => {
    const results = employeeList.filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return results;
  };

  const handleExcelDownload = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(employeeList);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employee List');
    XLSX.writeFile(workbook, 'employee_list.xlsx');
  };

  const filteredEmployeeList = handleSearch();

  return (
    <div className={styles.homePage}>
      {/* {/ Table's navbar /} */}
      <Navbar />

      {/* {/ Dialog /} */}
      <DialogComponent
        open={open}
        handleClose={handleClose}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* {/ Search bar and buttons /} */}
      <SearchBarComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleExcelDownload={handleExcelDownload}
        handleClickOpen={handleClickOpen}
      />
      
   <TableComponent 
   columns = {columns}
   filteredEmployeeList = {filteredEmployeeList}
   page = {page}
   rowsPerPage = {rowsPerPage}
   handleChangePage = {handleChangePage}
   handleChangeRowsPerPage = {handleChangeRowsPerPage}
   handleEdit = {handleEdit}
   deleteListItem = {deleteListItem}
   />

   {/* <TableRowComponent
   row ={rows}
    columns={columns}
    //  handleEdit={handleEdit}
    //   deleteListItem={deleteListItem} 
   /> */}
      {/* <Paper sx={{ overflow: 'hidden', padding: '20px' }}>
        {employeeList.length === 0 ? (
          <h3>No Employees found!</h3>
        ) : (
          <TableComponent
            columns={columns}
            filteredEmployeeList={filteredEmployeeList}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleEdit={handleEdit}
            deleteListItem={deleteListItem}
          />
        )}
      </Paper> */}
    </div>
  );
};

export default EmployeeTable;
































































































































































































// import React, { useState } from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import styles from './Table.module.css';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogTitle from '@mui/material/DialogTitle';
// import Navbar from '../../generics/Navbar/Navbar';
// import {  TextField } from '@mui/material';
// import XLSX from 'sheetjs-style';
// import dialogcomp from  '../../generics/GenericTable/dialogcomp';
// import filtercomp from '../../generics/GenericTable/filtercomp';
// import tablecomp from '../../generics/GenericTable/tablecomp';

// const columns = [
//   { id: 'id', label: 'S.No' },
//   { id: 'name', label: 'Name' },
//   { id: 'department', label: 'Department' },
//   { id: 'designation', label: 'Designation' },
//   { id: 'type', label: 'Type' },
//   { id: 'number', label: 'Number' },
//   { id: 'actions', label: 'Actions' }
// ];
// const rows = [
  // {
  //   id: 1,
  //   name: 'Harshal Mesare',
  //   department: 'IT',
  //   designation: 'Front-end developer',
  //   type: '9-5',
  //   number: '82826732526'
  // },
  // {
  //   id: 2,
  //   name: 'Riya Patidar ',
  //   department: 'IT',
  //   designation: 'Flutter Developer',
  //   type: 'fulltime',
  //   number: '82823226'
  // },
  // {
  //   id: 3,
  //   name: 'Eddie Brock ',
  //   department: 'IT',
  //   designation: 'Software Developer',
  //   type: 'fulltime',
  //   number: '82826732526'
  // },
  // {
  //   id: 4,
  //   name: 'Awani Panwar',
  //   department: 'IT',
  //   designation: 'Android Developer',
  //   type: '9-5',
  //   number: '82826732526'
  // },
  // {
  //   id: 5,
  //   name: 'Roman Valley',
  //   department: 'IT',
  //   designation: 'IOS Developer',
  //   type: '9-5',
  //   number: '82826732526'
  // },
  // {
  //   id: 6,
  //   name: 'allu arjun ',
  //   department: 'IT',
  //   designation: 'Angular Developer',
  //   type: '9-5',
  //   number: '82826732526'
  // },
  // {
  //   id: 7,
  //   name: 'Tom holand ',
  //   department: 'IT',
  //   designation: 'Full-stack Web developer',
  //   type: '9-5',
  //   number: '82826732526'
  // },
  // {
  //   id: 8,
  //   name: 'peter parker',
  //   department: 'IT',
  //   designation: 'Back-end developer', 
  //   type: '9-5',
  //   number: '82826732526'
  // },
  // {
  //   id: 9,
  //   name: 'chris hamsworth',
  //   department: 'IT',
  //   designation: 'mern-stack developer',
  //   type: '9-5',
  //   number: '82826732526'
  // },
  // {
  //   id: 10,
  //   name: 'nick fury ',
  //   department: 'IT',
  //   designation: 'Testing',
  //   type: '9-5',
  //   number: '82826732526'
  // },
// ]

// export default function StickyHeadTable() {
//   const [editRowIndex, setEditRowIndex] = useState(null);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [open, setOpen] = React.useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     department: '',
//     designation: '',
//     type: '',
//     number: ''
//   });
//   const [employeeList, setEmployeeList] = useState([...rows]);
//   const [searchQuery, setSearchQuery] = useState('');


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {

//     const _employees = [...employeeList];

//     const _data = {
//       ...formData,
//       id: employeeList.length + 1
//     };

//     if (editRowIndex !== null) {
//       _employees[editRowIndex] = _data;
//     } else {
//       _employees.push(_data);
//     }
//     setEmployeeList(_employees);

//     setFormData({
//       name: '',
//       department: '',
//       designation: '',
//       type: '',
//       number: ''
//     });
//     setOpen(false);
//     setEditRowIndex(null);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleEdit = (row) => {
//     const rowIndex = employeeList.findIndex((item) => item.id === row.id);
//     setEditRowIndex(rowIndex);
//     setOpen(true);

//     setFormData({
//       name: row.name,
//       department: row.department,
//       designation: row.designation,
//       type: row.type,
//       number: row.number
//     });
//   };
//   const deleteListItem = (id) => {
//     const updatedList = employeeList.filter((item) => item.id !== id);
//     setEmployeeList(updatedList);
//   };
//   const handleSearch = () => {
//     const results = employeeList.filter((employee) =>
//       employee.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     return results;
//   };

//   const handleExcelDownload = () => {
//     const workbook = XLSX.utils.book_new();
//     const worksheet = XLSX.utils.json_to_sheet(employeeList);

//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Employee List');
//     XLSX.writeFile(workbook, 'employee_list.xlsx');
//   };

//   const filteredEmployeeList = handleSearch();

//   return (
//     <div className={styles.homePage}>
//       {/* --------------------Table's navbar start here-------------------------- */}
//       <Navbar />
//       {/* --------------------Table's navbar start here-------------------------- */}

//       {/* ------------------------------------------dialog starts here------------------------------------------------------ */}
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description">
//         <DialogTitle className={styles.wholeformpage} id="alert-dialog-title">
//           {"Add Data Here"}
//         </DialogTitle>
//         <div className={styles.formsblocks}>
//           <TextField className={styles.namebox}
//             name='name'
//             label="Name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <TextField
//             name='department'
//             label="Department"
//             value={formData.department}
//             onChange={handleChange}
//           />
//           <TextField
//             name='designation'
//             label="Designation"
//             value={formData.designation}
//             onChange={handleChange}
//           />
//           <TextField
//             name='type'
//             label="Employee Type"
//             value={formData.type}
//             onChange={handleChange}
//           />
//           <TextField
//             name='number'
//             label="Contact Number"
//             value={formData.number}
//             onChange={handleChange}
//           />
//         </div>
//         <DialogActions className={styles.savecancel}>
//           <Button onClick={handleClose}>CANCEL</Button>
//           <Button onClick={handleSubmit} autoFocus>SAVE</Button>
//         </DialogActions>
//       </Dialog>
//       {/* ----------------------------------------------dialog ends here------------------------------------------------- */}

//       {/*-------------------- Search starts here----------------------- */}

//       <div className={styles.searchContainer}>
//         <div className={styles.searchInputContainer}>
//           <TextField
//             className={styles.searchInput}
//             placeholder={'Search Here'}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />

//         </div>
//         <Button className={styles.excelButton} variant="outlined" onClick={handleExcelDownload}>
//           Download Excel
//         </Button>
//         <Button className={styles.wholeform} variant="outlined" onClick={handleClickOpen}>
//           Add-Details
//         </Button>
//       </div>


//       {/* -----------------search ends here ---------------------*/}

//       <Paper sx={{ overflow: 'hidden', padding: '20px' }}>
//         {
//           employeeList.length === 0 ? (
//             <h3>No Employees found!</h3>
//           ) : (
//             <>
//               <TableContainer sx={{ maxHeight: 440 }}>
//                 <Table stickyHeader aria-label="sticky table">
//                   <TableHead>
//                     <TableRow>
//                       {columns.map((column) => (
//                         <TableCell
//                           key={column.id}
//                           align={column.align}
//                           style={{ minWidth: column.minWidth }}
//                         >
//                           {column.label}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {filteredEmployeeList
//                       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                       .map((row) => {
//                         return (
//                           <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                             {columns.map((column) => {
//                               if (column.id === 'actions') {
//                                 return (
//                                   <TableCell key={column.id} align={column.align}>
//                                     <Button
//                                       variant="outlined"
//                                       onClick={() => handleEdit(row)}>
//                                       Edit
//                                     </Button>
//                                     <Button
//                                       variant="outlined"
//                                       onClick={() => deleteListItem(row.id)}
//                                     >
//                                       Delete
//                                     </Button>
//                                   </TableCell>
//                                 );
//                               }
//                               const value = row[column.id];
//                               return (
//                                 <TableCell key={column.id} align={column.align}>
//                                   {column.format && typeof value === 'number'
//                                     ? column.format(value)
//                                     : value}
//                                 </TableCell>
//                               );
//                             })}
//                           </TableRow>
//                         );
//                       })}
//                   </TableBody>

//                 </Table>
//               </TableContainer>
//               <TablePagination
//                 rowsPerPageOptions={[1, 5, 10, 25]}
//                 component="div"
//                 count={employeeList.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//               />
//             </>
//           )
//         }

//       </Paper>
//     </div>

//   );
// }
