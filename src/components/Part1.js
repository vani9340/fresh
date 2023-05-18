import img1 from './images/img1.svg'
// import dots from './images/dots.svg'
import dots1 from './images/dots1.svg'
import curves from './images/curves.svg'
import Nav from './nav'
function Part1(){
    return(
        <div class='min-h-[1115px] bg-gradient-to-b from-[#FAE3B6] max-sm:pt-[1.5rem]  pt-[2.8125rem] '>
<Nav/>
     <div class='max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center pl-[6.111vw] pr-[5.555vw] pt-[119px] flex justify-between'>

     <div>
    <div class='max-w-[556px] min-h-[45px]'>
    <h1 class='font-semibold max-sm:text-[2rem] text-[4rem] leading-[6rem] max-w-[90%]'>Find The Best Fashion Style 
    For You</h1>
    </div>
    <p class='max-sm:text-[0.8rem] sm:text-[1.375rem] max-w-[531px] font-normal leading-[2.06rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
    <button class='bg-black text-white py-[25px] px-[91px] rounded-[10px] mt-[76px]'>SHOP NOW</button>
    </div>

    {/* <div class="relative">
    <img src={img1} alt="Image" class="pl-[20%] h-full w-full"/>
    <div class="absolute bottom-0 w-full h-full flex  pl-[2rem]">
    <img src={dots1} class='h-[50%] w-[20%]'/> 
    </div> */}
    {/* </div> */}
    <div class='flex justify-end'>
    <img src={img1} class='min-h-[643px]'/>
    </div>
</div>

<img src={curves} class='max-sm:min-h-[300%] w-screen'/>


    </div>  
    )
}
export default Part1