import categories from '@data/categories';
import ButtonCategory from '@components/ButtonCategory';

const HomeCategories: React.FC = () => {
  return (
    <section className='flex items-center mb-6 px-4 lg:px-0 overflow-x-auto'>
      {categories.map((category) => (
        <ButtonCategory
          key={category.name}
          Icon={category.Icon}
          title={category.name}
          href={category.href}
        />
      ))}
    </section>
  );
};

export default HomeCategories;
