import { FC, ChangeEvent, useState} from 'react';
import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import 
{ Tooltip, Divider, Box, InputLabel, Card, Checkbox, IconButton, Table, TableBody, 
  TableCell, TableHead, TablePagination, TableRow, TableContainer,Select,
  MenuItem, Typography, useTheme, CardHeader, Input, Container, Grid, Menu,
} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ViewWeekRoundedIcon from '@mui/icons-material/ViewWeekRounded';

//Import locaux 
import Label from '@/app/components/shared/Label';
import { CryptoOrder, CryptoOrderStatus } from '@/data/models/crypto_order';
import BulkActions from './BulkActions';

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

interface Filters {
  status?: CryptoOrderStatus | null;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
  const statusMap : Record <CryptoOrderStatus, {text:string;color:string}> ={
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = statusMap[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (cryptoOrders: CryptoOrder[], filters: Filters): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches  = true;
   /*  return Object.entries(filters)
    .every(([key, value]) =>
    value ? cryptoOrder[key] ===value : true); */
    if (filters.status && cryptoOrder.status !== filters.status)
    {
      matches = false;
    }
    return matches
  });
};
// pAGINATION
const applyPagination = ( cryptoOrders: CryptoOrder[], page: number, limit: number): CryptoOrder[] => {
  const startIndex = page * limit ;
  return cryptoOrders.slice(startIndex, startIndex + limit);
};
//applySearch
/* const applySearch = (cryptoOrders : CryptoOrder[], searchText : string): CryptoOrder []=>{
  return cryptoOrders.filter((row) =>
    row.Details.toLowerCase().includes(searchText.toLowerCase()) ||
    row.ID_Account.toLowerCase().includes(searchText.toLowerCase()) ||
    row.Source.toLowerCase().includes(searchText.toLowerCase()) ||
    row.amount.toLowerCase().includes(searchText.toLowerCase()) ||
    row.status.toLowerCase().includes(searchText.toLowerCase())
  );
}; */
const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
//Select Columns to display
  const [selectedColumns, setSelectedColumns] = useState(Object.keys(cryptoOrders[0]));
  const handleColumnSelection = (column) => {
    setSelectedColumns(prev => {
      if (prev.includes(column)) {
        return prev.filter(c => c !== column);
      } else {
        return [...prev, column];
      }
    });
  };
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );

  const selectedBulkActions = selectedCryptoOrders.length > 0;

  //const [currentPage, setCurrentPage] = useState<number>(1);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

/*   const [searchTexte, setSearchTexte] = useState('');
  const [rows, setRows]= useState(cryptoOrders);
  useEffect(()=>{
    //appliquer la pagination avec les nouvelles lignes filtrées après la recherche
    const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
    const paginatedCryptoOrders = applyPagination(filteredCryptoOrders, currentPage, limit);
    setRows (paginatedCryptoOrders);
  },[cryptoOrders, filters, currentPage, limit]);
  const handleSearchChange =(event)=>
  {
    setSearchTexte(event.target.value);
    const filteredRows = applySearch(cryptoOrders, event.target.value) ;
    setRows(filteredRows);
    setCurrentPage(1);//Réinitialiser la page actuelle à 1 après la recherche
  } */
  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
        : []
    );
  };
function FilterTable()
{
  //Filtrer les lignes du tableaux en fonctions de leur status
  return(
    <>
     
        <InputLabel>Status</InputLabel>
          <Select
            value={filters.status || 'all'}
            onChange={handleStatusChange}
            label="Status"
            autoWidth
          >
            {statusOptions.map((statusOption) => (
              <MenuItem key={statusOption.id} value={statusOption.id}>
                {statusOption.name}
              </MenuItem>
            ))}
            </Select>
    </>
  );
}
function ColonnesAAfficher ()
{
  //Selectionner les colonnes à affichés
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
  return(
    <>  
      <button onClick={handleClick}>
      <ViewWeekRoundedIcon/>
      </button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.keys(cryptoOrders[0]).filter(column => column !== 'id').map((column) => (
          // .filter(column => column = 'id') selectionner les colonnes en dehors de la colonne id
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
    </>
  );
}
//Colonne à ne pas prendre en compte
const columnsToDisplay = selectedColumns.filter(column => column !== 'id');

  const handleSelectOneCryptoOrder = (
    _event: ChangeEvent<HTMLInputElement>,
    cryptoOrderId: string
  ): void => {
    if (!selectedCryptoOrders.includes(cryptoOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [
        ...prevSelected,
        cryptoOrderId
      ]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== cryptoOrderId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
  /* const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  ) */
  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < cryptoOrders.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === cryptoOrders.length;
  const theme = useTheme();

 //Search In table 
  // Les colonnes pour
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState(cryptoOrders);
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    const filteredRows = cryptoOrders.filter((row) =>
      row.Details.toLowerCase().includes(event.target.value.toLowerCase()) ||
      row.ID_Account.toLowerCase().includes(event.target.value.toLowerCase()) ||
      row.Source.toLowerCase().includes(event.target.value.toLowerCase()) ||
      row.amount.toLowerCase().includes(event.target.value.toLowerCase()) ||
      row.status.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRows(filteredRows);
    //setCurrentPage(1); //reset page to 1 after search
  };
//Apply pagination with the new filtered row 
const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  )
  return (
    <>
    {/** Espace de recherche */}
    <Container
      maxWidth="lg" 
      style={{margin:"20px"}}
    >
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
      >
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid gray', borderRadius: '5px', padding: '5px', width: '200px'}}>
          <SearchRoundedIcon style={{ color: 'gray' }} />
          <Input
            disableUnderline
            placeholder="Rechercher"
            value={searchText}
            onChange={handleSearchChange}
            style={{ marginLeft: '5px' }}
          />
        </div>
      
      </Grid>  
    </Container>
    {/** Contenue du tableau */}
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <>
            <Box sx={{ mr: 1, }} >
              <FilterTable />
              <Box sx={{ mx: 0.5 }} component="span">
               <ColonnesAAfficher/>
              </Box>
            </Box>
            </>
          }
          title="Recent Orders"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllCryptoOrders}
                  indeterminate={selectedSomeCryptoOrders}
                  onChange={handleSelectAllCryptoOrders}
                />
              </TableCell>
              {columnsToDisplay.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCryptoOrders.map((cryptoOrder, index) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(cryptoOrder.id);
              const row = rows[index];

              return (
                <React.Fragment key={cryptoOrder.id}>
                  <TableRow hover selected={isCryptoOrderSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isCryptoOrderSelected}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          handleSelectOneCryptoOrder(event, cryptoOrder.id)
                        }
                        value={isCryptoOrderSelected}
                      />
                    </TableCell>
                    {columnsToDisplay.map((column) => (
                      <TableCell key={column}>
                        {column !== 'status' ? ( 
                          // Verifier si le champ à afficher n'est pas le 'status'
                          column !== 'Date' ?(// Veriffier si le champ à afficher n'est pas le 'Date'
                          row && row[column]?(
                            <Typography
                              variant="body1"
                              fontWeight="bold"
                              color="text.primary"
                              gutterBottom
                              noWrap
                            >
                              {row[column]}
                            </Typography>
                            ): null
                        ):( // si le champ à afficher est le 'Date', formater la date
                            row && row['Date'] ? format(new Date(row['Date']), 'dd MMMM yyyy') : null
                        ) 
                        ):( // si le champ à afficher est le 'status', appliquer la fonction getStatusLabel aux différentes valeurs du champ
                            row?.['status'] ? getStatusLabel(row['status']) : null
                        )} 
                      </TableCell>
                    ))}
                    <TableCell align="right">
                      <Tooltip title="Edit Order" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.primary.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Order" arrow>
                        <IconButton
                          sx={{
                            '&:hover': { background: theme.colors.error.lighter },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[10, 25, 30]}
        />
      </Box>
    </Card>
    </>
  );
};

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: []
};

export default RecentOrdersTable;
