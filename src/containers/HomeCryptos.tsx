import { CryptoCurrencyInterface } from '@interface/interface';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const HomeCryptos: React.FC<{ currencies: CryptoCurrencyInterface[] }> = ({
  currencies,
}) => {
  return (
    <section>
      <table className='w-full border-separate overflow-x-auto'>
        <TableHeader />
        <TableBody currencies={currencies} />
      </table>
    </section>
  );
};

export default HomeCryptos;
