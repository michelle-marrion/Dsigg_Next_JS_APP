export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  id: string;
  Details: string;
  ID_Account: string;
  Source: string;
  amount: string;
  Date: number;
  status: CryptoOrderStatus;
}
