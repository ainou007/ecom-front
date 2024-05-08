import { ReactNode } from 'react';

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => ReactNode;
};
const GridList = <T extends { id?: number }>({
  records,
  renderItem,
}: GridListProps<T>) => {
  const list =
    records.length > 0
      ? records.map((record) => <div key={record.id}>{renderItem(record)}</div>)
      : 'Error';

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 '>
      {list}
    </div>
  );
};
export default GridList;
