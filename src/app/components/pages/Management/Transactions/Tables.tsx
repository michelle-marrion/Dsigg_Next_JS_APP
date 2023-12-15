
import { useState } from 'react';
import { subDays } from 'date-fns';
import React from 'react';
import {Menu, MenuItem, Checkbox, TextField, Input} from '@mui/material';
import ViewWeekRoundedIcon from '@mui/icons-material/ViewWeekRounded';
import { DataGrid } from '@mui/x-data-grid';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const products = [
  // Ajoutez vos données de produit ici
  // Exemple : { image: 'url', name: 'Produit 1', brand: 'Marque 1', visibility: 'Public', price: '100€', columns: '4', sku: '1234', publishDate: '2023-01-01' }
  {
      id: '1',
      orderDetails: 'Fiat Deposit',
      //orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: '$'
    },
{
      id: '2',
      orderDetails: 'Fiat Deposit',
      //orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      orderID: '23M3UOG65G8K',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '3',
      orderDetails: 'Fiat Deposit',
     // orderDate: subDays(new Date(), 5).getTime(),
      status: 'failed',
      orderID: 'F6JHK65MS818',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '4',
      orderDetails: 'Fiat Deposit',
      //orderDate: subDays(new Date(), 55).getTime(),
      status: 'completed',
      orderID: 'QJFAI7N84LGM',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '5',
      orderDetails: 'Fiat Deposit',
      //orderDate: subDays(new Date(), 56).getTime(),
      status: 'pending',
      orderID: 'BO5KFSYGC0YW',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '6',
      orderDetails: 'Fiat Deposit',
      //orderDate: subDays(new Date(), 33).getTime(),
      status: 'completed',
      orderID: '6RS606CBMKVQ',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 6.58454334,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '7',
      orderDetails: 'Fiat Deposit',
      //orderDate: new Date().getTime(),
      status: 'pending',
      orderID: '479KUYHOBMJS',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1212',
      amountCrypto: 2.346546,
      amount: 234234,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '8',
      orderDetails: 'Paypal Withdraw',
      //orderDate: subDays(new Date(), 22).getTime(),
      status: 'completed',
      orderID: 'W67CFZNT71KR',
      sourceName: 'Paypal Account',
      sourceDesc: '*** 1111',
      amountCrypto: 3.345456,
      amount: 34544,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '9',
      orderDetails: 'Fiat Deposit',
      //orderDate: subDays(new Date(), 11).getTime(),
      status: 'completed',
      orderID: '63GJ5DJFKS4H',
      sourceName: 'Bank Account',
      sourceDesc: '*** 2222',
      amountCrypto: 1.4389567945,
      amount: 123843,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '10',
      orderDetails: 'Wallet Transfer',
      //
      orderDate: subDays(new Date(), 123).getTime(),
      status: 'failed',
      orderID: '17KRZHY8T05M',
      sourceName: 'Wallet Transfer',
      sourceDesc: "John's Cardano Wallet",
      amountCrypto: 765.5695,
      amount: 7567,
      cryptoCurrency: 'ADA',
      currency: '$'
    }
];
// Les colonnes pour DataGrid
/* const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'orderDetails', headerName: 'Order Details', width: 130 },
      { field: 'status', headerName: 'Status', width: 130 },
      { field: 'orderID', headerName: 'Order ID', width: 130 },
      { field: 'sourceName', headerName: 'Source Name', width: 130 },
      { field: 'sourceDesc', headerName: 'Source Description', width: 130 },
      { field: 'amountCrypto', headerName: 'Amount (Crypto)', width: 130 },
      { field: 'amount', headerName: 'Amount', width: 130 },
      { field: 'cryptoCurrency', headerName: 'Crypto Currency', width: 130 },
      { field: 'currency', headerName: 'Currency', width: 130 },
    ]; */
export default function ProductTable() {
  const [selectedColumns, setSelectedColumns] = useState(Object.keys(products[0]));

  const handleColumnSelection = (column) => {
    setSelectedColumns(prev => {
      if (prev.includes(column)) {
        return prev.filter(c => c !== column);
      } else {
        return [...prev, column];
      }
    });
  };
// for the Dropdown Menu with checkbox
const [anchorEl, setAnchorEl] = React.useState(null);
  const [checked, setChecked] = React.useState([0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  const [searchText, setSearchText] = useState('');
      const [rows, setRows] = useState(products);
    
      const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        const filteredRows = products.filter((row) =>
          row.orderDetails.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.status.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.orderID.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.sourceName.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.sourceDesc.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.amountCrypto.toString().includes(event.target.value.toLowerCase()) ||
          row.amount.toString().includes(event.target.value.toLowerCase()) ||
          row.cryptoCurrency.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.currency.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setRows(filteredRows);
      };
  return (
    <div>
      <button onClick={handleClick}>
      <ViewWeekRoundedIcon/>
      </button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.keys(products[0]).map((column) => (
          <MenuItem key={column} onClick={handleClose}>
            <Checkbox
              edge="start"
              checked={selectedColumns.includes(column)}
              tabIndex={-1}
              disableRipple
              onChange={() => handleColumnSelection(column)}
              inputProps={{ 'aria-labelledby': `checkbox-list-label-${column}` }}
              onClick={handleToggle(column)} 
            />
           <label>{column}</label>
          </MenuItem>
        ))}
      </Menu>
     {/*  <TextField
            id="outlined-basic"
            label="Rechercher"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
          /> */}

<div style={{ display: 'flex', alignItems: 'center', border: '1px solid gray', borderRadius: '5px', padding: '5px' }}>
      <SearchRoundedIcon style={{ color: 'gray' }} />
      <Input
        disableUnderline
        placeholder="Rechercher"
        value={searchText}
        onChange={handleSearchChange}
        style={{ marginLeft: '5px' }}
      />
    </div>
      {/* <SearchElement/> */}
{/*       <div style={{height:400, width :'100%'}}>
            <TextField 
            id="outlined-basic"
            label="Rechercher"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            />
            <DataGrid rows={lignes} column={products} pageSize={5} checkboxSelection />
      </div> */}
      {/* 
      {Object.keys(products[0]).map((column) => (
        <div key={column}>
          <input
            type="checkbox"
            checked={selectedColumns.includes(column)}
            onChange={() => handleColumnSelection(column)}
          />
          <label>{column}</label>
        </div>
      ))} */}
      <table>
        <thead>
          <tr>
            {selectedColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        
        <tbody>
            {rows.map((row)=>
            <tr key={row.id}>
                  {selectedColumns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
            )}
          {/* {products.map((product, i) => (
            <tr key={i}>
              {selectedColumns.map((column) => (
                <td key={column}>{product[column]}</td>
              ))}
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

/* function SearchElement()
{
      const [searchText, setSearchText] = useState('');
      const [rows, setRows] = useState(products);
    
      const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        const filteredRows = products.filter((row) =>
          row.orderDetails.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.status.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.orderID.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.sourceName.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.sourceDesc.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.amountCrypto.toString().includes(event.target.value.toLowerCase()) ||
          row.amount.toString().includes(event.target.value.toLowerCase()) ||
          row.cryptoCurrency.toLowerCase().includes(event.target.value.toLowerCase()) ||
          row.currency.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setRows(filteredRows);
      };
      return(
            <>
                  <div style={{ height: 400, width: '100%' }}>
          <TextField
            id="outlined-basic"
            label="Rechercher"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
          />
          <DataGrid rows={rows} columns={columns} checkboxSelection />
        </div>
            </>
      );
} */