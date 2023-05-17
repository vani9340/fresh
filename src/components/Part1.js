import img1 from './images/img1.svg'
import Nav from './nav'
function Part1(){
    return(
        <div class='w-screen pl-[6.1vw] pr-[20px] min-h-[1115px] bg-gradient-to-b from-[#FAE3B6] max-sm:pt-[1.5rem]  pt-[2.8125rem] '>
<Nav/>
     <div class='flex flex-col justify-center items-center'>
<div class='pt-4'>
    <img src={img1} class=''/>
</div>

 <div>
    <h1>Find The Best Fashion Style 
For You</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
<button class='bg-black'>SHOP NOW</button>


 </div>

</div>
        </div>
    )
}
export default Part1