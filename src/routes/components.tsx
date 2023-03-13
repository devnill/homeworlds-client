
import { ReactComponent as Ship } from '../assets/ship.svg';
import Button from '../components/button';

export default function Components() {
  return (
    <div className="components">
      <Ship fill="red" />
 
      <Button to="/some/other/page" className='w-48'>Clicky</Button>
</div>
  )
}


