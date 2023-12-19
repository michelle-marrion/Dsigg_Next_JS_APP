//import { Card, Container,Grid, CardHeader, CardContent, Input, Divider } from '@mui/material';
import { CryptoOrder } from '@/data/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';
//import { useState} from 'react';
//import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      Details: 'Fiat Deposit',
      ID_Account: 'VUVX709ET7BY',
      Source: 'Bank Account',
      amount: '34.4565 ETH',
      Date: new Date().getTime(),
      status: 'completed',
    },
    {
      id: '2',
      Details: 'Fiat Deposit',
      ID_Account: '23M3UOG65G8K',
      Source: 'Bank Account',
      amount: '6.58454334 BTC',
      Date: subDays(new Date(), 1).getTime(),
      status: 'completed',
    },
    {
      id: '3',
      Details: 'Fiat Deposit', 
      ID_Account: 'F6JHK65MS818',
      Source: 'Bank Account',
      amount: '6.58454334 BTC',
      Date: subDays(new Date(), 5).getTime(),
      status: 'failed',
    },
    {
      id: '4',
      Details: 'Fiat Deposit',
      ID_Account: 'QJFAI7N84LGM',
      Source: 'Bank Account',
      amount: '6.58454334 BTC',
      Date: subDays(new Date(), 55).getTime(),
      status: 'completed',

    },
    {
      id: '5',
      Details: 'Fiat Deposit',
      ID_Account: 'BO5KFSYGC0YW',
      Source: 'Bank Account',
      amount: '6.58454334 BTC',
      Date: subDays(new Date(), 56).getTime(),
      status: 'pending',
    },
    {
      id: '6',
      Details: 'Fiat Deposit',
      ID_Account: '6RS606CBMKVQ',
      Source: 'Bank Account',
      amount: '6.58454334 BTC',
      Date: subDays(new Date(), 33).getTime(),
      status: 'completed',
    },
    {
      id: '7',
      Details: 'Fiat Deposit',
      ID_Account: '479KUYHOBMJS',
      Source: 'Bank Account',
      amount: '2.346546 BTC',
      Date: new Date().getTime(),
      status: 'pending',
    },
    {
      id: '8',
      Details: 'Paypal Withdraw',
      ID_Account: 'W67CFZNT71KR',
      Source: 'Paypal Account',
      amount: '3.345456 BTC',
      Date: subDays(new Date(), 22).getTime(),
      status: 'completed',
    },
    {
      id: '9',
      Details: 'Fiat Deposit',
      ID_Account: '63GJ5DJFKS4H',
      Source: 'Bank Account',
      amount: '1.4389567945 BTC',
      Date: subDays(new Date(), 11).getTime(),
      status: 'completed',
    },
    {
      id: '10',
      Details: 'Wallet Transfer',
      ID_Account: '17KRZHY8T05M',
      Source: 'Wallet Transfer',
      amount: '765.5695 BTC',
      Date: subDays(new Date(), 123).getTime(),
      status: 'failed',
    }
  ];
  return (
   <>
       <RecentOrdersTable cryptoOrders={cryptoOrders} />
   </>
  );
}

export default RecentOrders;
