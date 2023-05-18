import best from './images/best_fashion.svg'

function Part3(){
    return(
<div class='flex mt-[236px] pl-[3.472vw] pr-[4.166vw]'>
<div>
<img src={best}/>
</div>
<div>
    
</div>


<div class='flex flex-col justify-center items-center'>
    <h1 class='font-frank_ruhi font-bold text-[4rem] leading-[5.16375rem] max-w-[437px] min-h-[162px]'>
    Best Fashion
Since 2010
    </h1>
    <p class='font-semibold text-[1.5rem] leading-[2.25rem] max-w-[443px] min-h-[186px] mt-[63px]'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. 
    </p>

    <div class='mt-[132px] w-[793px] min-h-[280px]  border-[2px] flex items-center justify-between bg-gradient-to-r from-[#CD8922] to-[120%] rounded-[20px]  drop-shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] shadow-[4px_4px_4px_0px_rgba(0, 0, 0, 0.25)]'>
        
        <div class='border-r-[50%] border-r-[1px] border-black pr-[1.875vw] pl-[5.3472vw]'>
        <h1 class='font-Podkova text-[4rem] font-bold leading-[71px]'>2010</h1>
        <p class='font-normal text-[1.75rem] leading-[2.625rem] pt-[1.944vw]'>Founded</p></div>
    

        
        <div class='border-r-[50%] border-r-[1px] border-black pr-[3.055vw]'>
        <h1 class='font-Podkova text-[4rem] font-bold leading-[71px]'>5000+</h1>
        <p class='font-normal text-[1.75rem] leading-[2.625rem] pt-[1.944vw]'>Product Sold</p></div>
       
        <div class='pr-[2.91vw]'>
        <h1 class='font-Podkova text-[4rem] font-bold leading-[71px]'>4500+</h1>
        <p class='font-normal text-[1.75rem] leading-[2.625rem] pt-[1.944vw]'>Best Reviews</p></div>
    </div>
</div>
</div>
    )
}
export default Part3