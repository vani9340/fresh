import img1 from './images/img1.svg'
// import dots from './images/dots.svg'
import dots1 from './images/dots1.svg'
import curves from './images/curves.svg'
import Nav from './nav'
function Part1(){
    return(
        <div class='min-h-[1115px] bg-gradient-to-b from-[#FAE3B6] max-sm:pt-[1.5rem]  pt-[2.8125rem] '>
<Nav/>
     <div class='max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center pl-[1.6vw] pr-[1.38vw] flex'>

 <div class='pt-[4rem]'>
    <h1 class='font-semibold max-sm:text-[2rem] text-[4rem]'>Find The Best Fashion Style 
    For You</h1>
 <p class='max-sm:text-[0.8rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
<button class='bg-black text-white'>SHOP NOW</button>
 </div>

 <div class="relative">
  <img src={img1} alt="Image" class="pl-[20%] h-full"/>
  <div class="absolute bottom-0 w-full h-full flex  pl-[2rem]">
    <img src={dots1} class='h-[50%] w-[20%]'/> 

  </div>
</div>


</div>
<img src={curves} class='max-sm:min-h-[300%]'/>
    </div>  
    )
}
export default Part1