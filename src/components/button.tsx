

import {FC, ReactNode}  from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode
  className?: string,
  to: string
};

const Constellation: FC<Props> = (props) => {
  const {className='',children, to} = props;
  console.log(props)
  return <div  className={className}>
    <Link className="text-white w-full text-center py-2 px-4 block border border-black hover:bg-green-600 bg-green-700 w-full rounded" to={to}><>{children}</></Link>
  </div>
}

export default Constellation;