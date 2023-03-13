
import { useSelector } from 'react-redux';
import { RootState } from '../store';


export default function Header() {
  const user = useSelector((state: RootState)=>state.user || null);

  
  
  const isLoggedIn = user?.name
  //{rows}        
      
  return (
    

<header className="flex">                
    <div>{isLoggedIn ? `${user.name }: ${user.id}`: '(log in button)'}</div>
</header>
  );
}

