import { desktopTableHeader } from '@data/table';

const TableHeader = () => {
  const lastIndex: number = desktopTableHeader.length - 1;

  const styledTableHeader = (index: number) => {
    if (index === 0)
      return 'p-5 pl-20 border-t border-b border-l rounded-tl-lg default-th';
    if (index === lastIndex) return 'border-r rounded-tr-lg default-th';
    return 'default-th';
  };

  return (
    <thead>
      <tr>
        {desktopTableHeader.map((header, index) => (
          <th scope='col' key={header.id} className={styledTableHeader(index)}>
            <span className='font-semibold text-base text-custom-grey-02'>
              {header.name}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
