import {HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

// import MenuBar from './menubar'
import Dropdown from './dropdown'
function Nav(){
    return(
<BrowserRouter>
    <nav class='flex justify-between'>
        <div class='font-semibold text-[1.5rem]'>
        Fresh
        </div>

        <div class='hidden'>
        <Link>Men</Link>
        <Link>Woman</Link>
        <Link>Kids</Link>
        <Link>Collection</Link>
        <Link>Trends</Link>
        </div>

        <div class='flex'>
        
          <Dropdown/>  
        
        
        <button className="max-sm:text-[0.8rem] max-sm:w-[5rem] max-sm:h-[2rem] w-[121px] h-[57px]   font-semibold mr-[10px]
        bg-gradient-to-r   from-[#FDBB57] from-[-60%] 
      rounded-[10px] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[4px_4px_4px_0px_rgba(242,208,155,1)]">Login</button>
        
        <button className="font-semibold max-sm:text-[0.8rem]    
        max-sm:w-[5rem] max-sm:h-[2rem]  w-[121px] h-[57px] bg-gradient-to-r   from-[#FDBB57] from-[-60%] 
      rounded-[10px] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[4px_4px_4px_0px_rgba(242,208,155,1)]">Sign up</button>
        </div>
</nav>


   
</BrowserRouter>
    )
}
export default Nav


