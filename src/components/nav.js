import {HashLink as Link} from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

// import MenuBar from './menubar'
import Dropdown from './dropdown'
function Nav(){
    return(
<BrowserRouter>
    <nav class='flex justify-between items-center pl-[2vw] pr-[1.38vw] sm:pl-[6.111vw] sm:pr-[20px]'>
        <div class='font-semibold text-[1.5rem] md:text-[3rem] leading-[4.5rem]'>
        Fresh
        </div>

        <div class='max-sm:hidden'>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold'>Men</Link>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold '>Woman</Link>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold'> Kids</Link>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold'>Collection</Link>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold'>Trends</Link>
        </div>

        <div class='flex gap-2'>
        <div class='hidden'>
          <Dropdown/>  
          </div>
        
        <button className="text-[1.5rem] leading-[2.25rem] font-semibold   max-sm:text-[0.8rem] max-sm:w-[5rem] max-sm:h-[2rem] w-[121px] h-[57px] 
        bg-gradient-to-r   from-[#FDBB57] from-[-60%] 
      rounded-[10px] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[4px_4px_4px_0px_rgba(242,208,155,1)]">Login</button>
        
        <button className="text-[1.5rem] leading-[2.25rem] font-semibold max-sm:text-[0.8rem]    
        max-sm:w-[5rem] max-sm:h-[2rem]  w-[121px] h-[57px] bg-gradient-to-r   from-[#FDBB57] from-[-60%] 
      rounded-[10px] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[4px_4px_4px_0px_rgba(242,208,155,1)]">Sign up</button>
        </div>
</nav>


   
</BrowserRouter>
    )
}
export default Nav


