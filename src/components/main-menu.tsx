import Button from "./button";





export default function MainMenu() {
  
  
  return (
    <div className="w-96 border border-black">
    <ul>
      <li><Button to="/game/new" className=''>New Game</Button></li>
      <li><Button to="/settings" className=''>Settings</Button></li>
      <li><Button to="/rules" className=''>Rules</Button></li>
    </ul>          
  </div>
    );
  }
  