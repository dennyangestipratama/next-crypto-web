import React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const useRenderPercentage = () => {
  const renderPercentage = (percentage: string): JSX.Element => {
    const isValueMin = percentage[0] === '-';
    const isZero = percentage === '0.00';
    const isValuePlus = !isValueMin && !isZero;

    const Arrow = () => {
      if (isValueMin)
        return <ChevronDownIcon className='stroke-custom-red-00 w-4' />;

      if (isValuePlus)
        return <ChevronUpIcon className='stroke-custom-green-00 w-4' />;

      return <div></div>;
    };

    if (!percentage)
      return (
        <p className='flex items-center align-middle justify-center'>0.00%</p>
      );

    return (
      <div
        className={
          'text-right lg:text-left font-semibold lg:font-normal flex items-center align-middle justify-center'
        }
      >
        <Arrow />
        <p
          className={`ml-1 ${
            isValueMin
              ? 'text-custom-red-00'
              : isValuePlus
              ? 'text-custom-green-00'
              : 'text-custom-black-01'
          }`}
        >
          {percentage}%
        </p>
      </div>
    );
  };

  return { renderPercentage };
};

export { useRenderPercentage };
