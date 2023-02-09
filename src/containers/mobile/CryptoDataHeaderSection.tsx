import { useState } from 'react';
import { mobileTableHeader } from '@data/table';

interface CryptoDataHeaderProps {
  selectedPeriod: string;
  handlePeriod: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CryptoDataHeaderSection: React.FC<CryptoDataHeaderProps> = ({
  selectedPeriod,
  handlePeriod,
}) => {
  return (
    <div className='border-t border-b flex items-center p-4'>
      <div className='text-xs font-semibold flex-1 text-custom-black-01'>
        CRYPTO
      </div>
      <div className='pl-4'>
        <select
          className='rounded-md font-semibold text-xs p-1 border outline-none'
          value={selectedPeriod}
          onChange={handlePeriod}
        >
          {mobileTableHeader.map((header) => (
            <option key={header.id} value={header.name}>
              {header.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CryptoDataHeaderSection;
