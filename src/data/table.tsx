import { TableHeaderInterface } from '@interface/interface';

export const mobileTableHeader: TableHeaderInterface[] = [
  { id: 'day', name: '24 JAM' },
  { id: 'week', name: '1 MGG' },
  { id: 'month', name: '1 BLN' },
  { id: 'year', name: '1 THN' },
];

export const desktopTableHeader: TableHeaderInterface[] = [
  { id: 'name', name: 'CRYPTO' },
  { id: 'lastPrice', name: 'HARGA' },
  ...mobileTableHeader,
];
