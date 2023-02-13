import { useState, useEffect } from 'react';
import Logo from '@components/Logo';
import endpoints from '@constants/url';
import { currencyFormatter } from '@helpers/index';
import { usePriceChanges } from '@hooks/usePriceChanges';
import { CryptoPriceInterface, CryptoDataListProps } from '@interface/interface';
import { useRenderPercentage } from '@hooks/useRenderPercentage';

const CryptoDataListSection: React.FC<CryptoDataListProps> = ({ currency, lastIndex }) => {
  const { data: sortedCryptoData } = usePriceChanges();
  const { renderPercentage } = useRenderPercentage();

  const getLatestPrice: CryptoPriceInterface =
    sortedCryptoData?.[currency.currencySymbol.toLowerCase()];

  const defaultTextColor = 'text-custom-black-01';
  const [prevPrice, setPrevPrice] = useState(getLatestPrice?.latestPrice);
  const [textColor, setTextColor] = useState(defaultTextColor);

  useEffect(() => {
    if (Number(getLatestPrice?.latestPrice) > Number(prevPrice)) {
      setTextColor('text-custom-green-00');
      setTimeout(() => setTextColor(defaultTextColor), 1500);
    } else if (Number(getLatestPrice?.latestPrice) < Number(prevPrice)) {
      setTextColor('text-custom-red-00');
      setTimeout(() => setTextColor(defaultTextColor), 1500);
    }

    setPrevPrice(getLatestPrice?.latestPrice);
  }, [getLatestPrice]);

  if (!sortedCryptoData) return;
  return (
    <tr className="text-base">
      {/* Data: Logo + Name + Symbol */}
      <td className={`border-l border-b ${lastIndex ? 'rounded-bl-lg' : ''}`}>
        <a
          className="block p-5"
          href={`${endpoints.webMarket}/${currency.currencySymbol.toLowerCase()}`}
        >
          <div className="flex items-center">
            <Logo url={currency.logo} color={currency.color} />
            <div className="flex items-center flex-wrap flex-1">
              <span className="flex-1 font-semibold ml-6 text-custom-black-01">
                {currency.name}
              </span>
              <span className="text-custom-grey-02 mx-6 w-14">{currency.currencySymbol}</span>
            </div>
          </div>
        </a>
      </td>
      <td className="w-56 border-b">
        <p className={`${textColor} p-5 font-semibold transition-colors duration-1000 ease-in`}>
          {currencyFormatter(Number(getLatestPrice.latestPrice))}
        </p>
      </td>
      {/* Data: Day 24 Hrs */}
      <td className="p-2 font-semibold border-b w-32">{renderPercentage(getLatestPrice?.day)}</td>
      {/* Data: Week 1 Week */}
      <td className="p-2 font-semibold border-b w-32">{renderPercentage(getLatestPrice?.week)}</td>
      {/* Data: Month 1 Month */}
      <td className="p-2 font-semibold border-b w-32">{renderPercentage(getLatestPrice?.month)}</td>
      {/* Data: Year 1 Year */}
      <td
        className={`p-2 font-semibold border-b border-r w-32 ${lastIndex ? 'rounded-br-lg' : ''}`}
      >
        {renderPercentage(getLatestPrice?.year)}
      </td>
    </tr>
  );
};

export default CryptoDataListSection;
