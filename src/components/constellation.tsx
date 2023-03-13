import {FC, ReactNode}  from 'react';

type Props = {
  children: ReactNode
  className?: string,
};

const Constellation: FC<Props> = ({className='',children}) => {
  
  return <div  className={className}>
    {children}
  </div>
}

export default Constellation;