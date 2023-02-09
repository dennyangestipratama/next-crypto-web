type ButtonCategoryProps = {
  title: string;
  Icon: JSX.Element;
  href: string;
};

const ButtonCategory: React.FC<ButtonCategoryProps> = ({
  Icon,
  title,
  href,
}) => {
  return (
    <a
      href={href}
      className='flex items-center bg-custom-blue-01 p-2 rounded-lg cursor-pointer mr-2'
    >
      {Icon}
      <span className='text-custom-blue-00 text-xs font-bold whitespace-nowrap'>{title}</span>
    </a>
  );
};

export default ButtonCategory;
