import {HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'
// import MenuBar from './menubar'
import Dropdown from './dropdown'
function Nav(){
    return(
<BrowserRouter>
    <div class='w-screen min-h-[1115px] bg-gradient-to-b from-[#FAE3B6] flex pt-[35px]'>
        <div class='font-semibold text-[1.125rem]'>
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
        <div >
          <Dropdown/>  
        </div>
        
        <button className="font-semibold text-[0.8rem]    
        w-[1px] h-[25px]  bg-gradient-to-r   from-[#FDBB57] from-[-60%] 
      rounded-[10px] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[4px_4px_4px_0px_rgba(242,208,155,1)]">Login</button>
        
        <button className="font-semibold text-[0.8rem]    
        w-[60px] h-[25px]  bg-gradient-to-r   from-[#FDBB57] from-[-60%] 
      rounded-[10px] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[4px_4px_4px_0px_rgba(242,208,155,1)]">Sign up</button>
        </div>

    </div>
</BrowserRouter>
    )
}
export default Nav


