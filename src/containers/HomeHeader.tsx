import Search from '@components/Search';

const HomeHeader: React.FC = () => {
  return (
    <section className='flex items-center justify-between mb-10'>
      <h1 className='text-xl lg:text-[28px]  pl-4 lg:pl-0  font-semibold leading-8'>
        Harga Crypto dalam Rupiah Hari Ini
      </h1>
      <Search />
    </section>
  );
};

export default HomeHeader;
