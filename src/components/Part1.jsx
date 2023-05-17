import img1 from './images/img1.svg'
// import dots from './images/dots.svg'
import dots1 from './images/dots1.svg'
import Nav from './nav'
function Part1(){
    return(
        <div class='min-h-[1115px] bg-gradient-to-b from-[#FAE3B6] max-sm:pt-[1.5rem]  pt-[2.8125rem] '>
<Nav/>
     <div class='flex flex-col justify-center items-center pl-[1.6vw] pr-[1.38vw]'>
<div class='pt-4 flex'>
<img src={dots1} class='h-[20%] w-[30%] absolute -bottom-[10%]'/>
    <img src={img1} class='relative pl-[20%] '/>
</div> 





 <div>
    <h1>Find The Best Fashion Style 
For You</h1>
{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p> */}
<button class='bg-black'>SHOP NOW</button>


 </div>

</div>
        </div>
    )
}
export default Part1



{/* <div className="relative h-[30rem] w-[20rem] bg-center bg-cover bg-[url(/images/img1.svg)]">
  {/* <img src="D:\fresh\src\components\images\dots1.svg" class="absolute top-1/4 left-1/4 w-1/2" alt="Small Image"/> */}
{/* // </div> */}