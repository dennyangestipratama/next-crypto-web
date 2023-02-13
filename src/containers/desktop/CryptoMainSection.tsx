import { CryptoCurrencyInterface } from '@interface/interface';
import CryptoDataSection from './CryptoDataSection';
import CryptoDataHeaderSection from './CryptoDataHeaderSection';

const CryptoMainSection: React.FC<{
  currencies: CryptoCurrencyInterface[];
}> = ({ currencies }) => {
  return (
    <section>
      <table className="w-full border-separate overflow-x-auto">
        <CryptoDataHeaderSection />
        <CryptoDataSection currencies={currencies} />
      </table>
    </section>
  );
};

export { CryptoMainSection };
