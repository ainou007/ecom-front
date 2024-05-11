import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Counter = ({
  total,
  route,
  icon: Icon,
}: {
  total: number;
  route: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(true);
  useEffect(() => {
    const isFirstRender = ref.current;
    if (isFirstRender) {
      ref.current = false;
    } else {
      setAnimate(true);
      let debouce = setTimeout(() => {
        setAnimate(false);
      }, 300);
      return () => {
        clearTimeout(debouce);
      };
    }
  }, [total]);
  return (
    <Link to={route} className='rounded-md relative flex items-center justify-center size-8 bg-white/15'>
      {total != 0 && (
        <div
          className={`${
            animate ? 'animate-pulse' : 'animate-none'
          } duration-300 text-[11px] flex  items-center justify-center size-5 bg-primary -right-3 -top-3 absolute rounded-full text-white`}>
          {total}
        </div>
      )}

      <Icon className='w-5' />
    </Link>
  );
};

export default Counter;
