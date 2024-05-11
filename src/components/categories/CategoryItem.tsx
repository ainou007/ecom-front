import { TCategory } from '@/lib/types';
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }: { category: TCategory }) => {
  const { img, prefix, title } = category;
  return (
    <Link to={`/products/${prefix}`}>
      <div className='flex items-center justify-center  shadow-b rounded-md flex-col overflow-hidden'>
        <div className='size-[319px] bg-gray-100'>
          <img className='' src={img} alt={title} />
        </div>

        <h2 className='font-semibold p-4'> {title} </h2>
      </div>
    </Link>
  );
};
export default CategoryItem;
