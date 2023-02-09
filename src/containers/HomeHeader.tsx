import Search from '@components/Search';

const HomeHeader: React.FC = () => {
  return (
    <section className='flex items-center justify-between mb-10'>
      <h1 className='text-[28px] font-semibold leading-8'>
        Harga Crypto dalam Rupiah Hari Ini
      </h1>
      <Search />
    </section>
  );
};

export default HomeHeader;
