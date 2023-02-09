import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
  return (
    <form className='flex items-center bg-custom-grey-01 py-3 px-4 rounded-lg w-96'>
      <MagnifyingGlassIcon className='w-7 stroke-custom-grey-00' />
      <input
        name='search'
        className='bg-transparent text-sm outline-none w-full ml-4'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
export default Search;
