import { SVGProps } from 'react';

interface CryptoPriceInterface {
  pair: string;
  latestPrice: string;
  day: null | string;
  week: null | string;
  month: null | string;
  year: null | string;
}

interface CryptoCurrencyInterface {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: Date;
  wallets: WalletInterface[];
}

interface SortedCryptoInterface {
  [key: string]: CryptoPriceInterface;
}

interface WalletInterface {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: Date;
  blockchainName: string;
  logo: string;
}

interface ResponseInterface<T> {
  code: string;
  message: string;
  payload: T;
}

interface TableHeaderInterface {
  id: string;
  name: string;
}

interface ArrowInterface {
  color?: string;
}

interface CategoryListInterface {
  name: string;
  href: string;
  Icon: JSX.Element;
}

interface CryptoDataListProps {
  currency: CryptoCurrencyInterface;
  lastIndex: boolean;
}
interface CryptoDataListMobileProps {
  currency: CryptoCurrencyInterface;
  selectedPeriod: string;
}
interface CryptoDataSectionMobileProps {
  currencies: CryptoCurrencyInterface[];
  selectedPeriod: string;
}

interface DeviceTypeInterface {
  width: number;
  device: string;
}

export const {
  CryptoPriceInterface,
  CryptoCurrencyInterface,
  SortedCryptoInterface,
  WalletInterface,
  ResponseInterface,
  TableHeaderInterface,
  ArrowInterface,
  CategoryListInterface,
  CryptoDataListProps,
  CryptoDataListMobileProps,
  CryptoDataSectionMobileProps,
  DeviceTypeInterface,
};
