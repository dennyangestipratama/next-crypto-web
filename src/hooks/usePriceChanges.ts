import { useCallback } from 'react';
import { useQuery } from 'react-query';

import endpoints from '@constants/url';
import { PRICE_INTERVAL } from '@constants/constants';
import {
  CryptoPriceInterface,
  ResponseInterface,
  SortedCryptoInterface,
} from '@interface/interface';

const fetchPriceChanges = async () => {
  const URL = endpoints.priceChanges;
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseJson: ResponseInterface<CryptoPriceInterface[]> = await response.json();

  return responseJson;
};

const usePriceChanges = () => {
  return useQuery([endpoints.priceChanges], () => fetchPriceChanges(), {
    staleTime: PRICE_INTERVAL,
    refetchInterval: PRICE_INTERVAL,
    select: useCallback(({ payload }) => {
      const priceList: CryptoPriceInterface[] = payload;
      const groupingObject: SortedCryptoInterface = {};

      priceList?.forEach(function (priceData) {
        const symbol = priceData.pair.split('/')?.[0];
        return (groupingObject[symbol] = priceData);
      });

      return groupingObject;
    }, []),
  });
};
export { usePriceChanges };
