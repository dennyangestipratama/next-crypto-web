import Logo from '@components/Logo';
import endpoints from '@constants/url';
import { currencyFormatter } from '@helpers/index';
import { usePriceChanges } from '@hooks/usePriceChanges';
import {
  CryptoPriceInterface,
  CryptoDataListMobileProps,
} from '@interface/interface';
import { useRenderPercentage } from '@hooks/useRenderPercentage';
import { mobileTableHeader } from '@data/table';

const CryptoDataListSection: React.FC<CryptoDataListMobileProps> = ({
  currency,
  selectedPeriod,
}) => {
  const { data: sortedCryptoData } = usePriceChanges();
  const { renderPercentage } = useRenderPercentage();

  const getLatestPrice: CryptoPriceInterface =
    sortedCryptoData?.[currency.currencySymbol.toLowerCase()];

  const percentageIndicator = (percent: CryptoPriceInterface) => {
    const findSelectedPeriod = mobileTableHeader.find((selected) => {
      return selected.name === selectedPeriod;
    });

    return renderPercentage(getLatestPrice[findSelectedPeriod.id]);
  };

  if (!sortedCryptoData) return;
  return (
    <div>
      {/* Data: Logo + Name + Symbol */}
      <a
        href={`${endpoints.webMarket}/${currency.currencySymbol.toLowerCase()}`}
      >
        <div className='p-4 flex items-center border-b'>
          <Logo url={currency.logo} color={currency.color} />
          <div className='pl-6 flex flex-1'>
            <div className='flex-1'>
              <span className='block font-semibold text-custom-black-01'>
                {currency.name}
              </span>
              <span className='block text-sm text-custom-grey-02'>
                {currency.currencySymbol}
              </span>
            </div>
          </div>
          <div>
            <span className='block text-custom-black-01 font-semibold text-right'>
              {currencyFormatter(Number(getLatestPrice.latestPrice))}
            </span>
            <div className='flex justify-end text-sm'>
              {percentageIndicator(getLatestPrice)}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CryptoDataListSection;
