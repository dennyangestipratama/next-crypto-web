import { deviceType } from '@constants/constants';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import useResponsiveness from '@hooks/useResponsiveness';

type SearchProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
};
const Search: React.FC<SearchProps> = ({
  type = 'text',
  placeholder = 'Cari aset di Pintu...',
  value,
  onChange,
}) => {
  const { device } = useResponsiveness();
  const isMobile = device === deviceType.mobile;

  return (
    <form className='flex items-center lg:bg-custom-grey-01 py-3 lg:px-4 rounded-lg lg:w-96'>
      <MagnifyingGlassIcon className='w-6 lg:w-7 stroke-custom-grey-00 mr-2 lg:mr-0' />
      {!isMobile && (
        <input
          name='search'
          className='bg-transparent text-sm outline-none w-full ml-4'
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </form>
  );
};
export default Search;
