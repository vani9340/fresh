import img1 from './images786/part8_1.svg'
import img2 from './images786/part8_2.svg'
import img3 from './images786/part8_3.svg'
import img4 from './images786/part8_4.svg'
import img5 from './images786/part8_5.svg';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'



function Part8(){
    return(
        <BrowserRouter>
<div class='mt-[54px]'>
{/* images */}
    <div class='flex justify-center overflow-hidden'>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
        <img src={img5}/>
 
    </div>
    {/* div */}
    <div class='min-h-[424px] bg-black flex flex-col items-center'>
    <div class='rounded-[10px] min-h-[128px] max-w-[638px] bg-[#ffffffe6] flex items-center justify-center px-[88px] -mt-[3%]'>
    <p class='text-[1.75rem] font-bold w-full'>Follow Our INSTAGRAM : @FRESH</p>
    </div>
    <div class=' text-white mt-[54px]'>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold'>Men</Link>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold '>Woman</Link>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold'> Kids</Link>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold'>Collection</Link>
        <Link class='mr-[59px] text-[1.5rem] leading-[2.25rem] font-semibold'>Trends</Link>
        </div>
        <p class='mt-[111px] text-white text-[1.5rem] leading-[2.25rem] font-semibold'>Copyright FRESH. All Right Reserved</p>

    </div>
</div>

        </BrowserRouter>
    )
}
export default Part8