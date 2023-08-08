import React, { useState } from 'react';
import Navbar from '../../generics/Navbar/Navbar';
import XLSX from 'sheetjs-style';
import styles from '../../pages/TodoListPage/Table.module.css';
import DialogComponent from '../../generics/GenericTable/DialogueComp';
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
        columns={columns}
        filteredEmployeeList={filteredEmployeeList}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleEdit={handleEdit}
        deleteListItem={deleteListItem}
      />

    </div>
  );
};

export default EmployeeTable;
