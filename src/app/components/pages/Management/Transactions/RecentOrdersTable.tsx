import { FC, ChangeEvent, useState} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  Input,
  Container, Grid,
  Menu,
} from '@mui/material';

import Label from '@/app/components/shared/Label';
import { CryptoOrder, CryptoOrderStatus } from '@/data/models/crypto_order';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ViewWeekRoundedIcon from '@mui/icons-material/ViewWeekRounded';
import BulkActions from './BulkActions';

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
  const map = {
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

  const { text, color }: any = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

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
/*   const FilterList =()=>
  {
    {Object.keys(cryptoOrders[0]).map((column) => (
      <div key={column}>
        <input
          type="checkbox"
          checked={selectedColumns.includes(column)}
          onChange={() => handleColumnSelection(column)}
        />
        <label>{column}</label>
      </div>
    ))}
  } */
  //
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );

  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

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
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );
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
  };

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
 {/*      <TableContainer>
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
              
             {selectedColumns.filter(column =>column !== 'id').map(  
              (column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
              <TableCell align="right">Actions</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCryptoOrders.map((cryptoOrder) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                cryptoOrder.id
              );
              return (
              <>
                <TableRow
                  hover
                  key={cryptoOrder.id}
                  selected={isCryptoOrderSelected}
                >
                  
            {rows.map((row)=>

              <TableRow
                hover
                key={row.id}
                selected={isCryptoOrderSelected}
              >
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
                  {selectedColumns.map((column) => (
                    <>
                      <TableCell key={column}>
                        <Typography variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            gutterBottom
                            noWrap>
                          {row[column]}
                        </Typography>
                      </TableCell>
                    </>   
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
            )}
        </TableRow>
        </>        
              );
            })}
          </TableBody>
        </Table>
      </TableContainer> */}
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
        {selectedColumns.filter(column => column !== 'id').map((column) => (
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
              {selectedColumns.filter(column => column !== 'id').map((column) => (
                <TableCell key={column}>
                  {column !== 'status' ? ( 
                    // Veriffier si le champ à afficher n'est pas le 'status'
                    row && column && row[column]?(
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
                  ): // si le champ à afficher est le 'status', appliquer la fonction getStatusLabel aux différentes valeurs du champ
                  row && row['status'] ? getStatusLabel(row['status']) : null} 
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
          rowsPerPageOptions={[5, 10, 25, 30]}
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
