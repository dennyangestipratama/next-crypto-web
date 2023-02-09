import { CryptoCurrencyInterface } from '@interface/interface';
import TableData from './TableData';

const TableBody: React.FC<{
  currencies: CryptoCurrencyInterface[];
}> = ({ currencies }) => {
  return (
    <tbody>
      {currencies &&
        currencies
          ?.filter((remove) => remove.currencySymbol !== 'Rp')
          .map((currency, index) => {
            const lastIndex: number = currencies.length - 2;
            return (
              <TableData
                key={currency.currencySymbol}
                currency={currency}
                lastIndex={index === lastIndex}
              />
            );
          })}
    </tbody>
  );
};

export default TableBody;
