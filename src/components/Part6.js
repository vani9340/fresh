import img1 from './images786/img1.svg'

function Part6(){
    return(
        <div class='flex flex-col items-center'>
        <div class='min-h-[681px] bg-[#FAE3B6]  rounded-[20px]  max-w-[1334px] w-full flex items-center justify-between pl-[5.208vw] pr-[4.166vw]'>
        {/* content */}
            <div>
            <h1 class='font-frank_ruhi font-bold text-[4rem] leading-[5.16375rem] max-w-[490px] min-h-[93px]'>
            Deal Of The Day
            </h1>
            <p class='font-frank_ruhi font-bold text-[1.5rem] leading-[30.98px] max-w-[569px] min-h-[89px] pt-[30px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis.
            </p>
            <div class= 'flex gap-[27px] pt-[69px]'>
                    <div class='bg-white w-[104px] min-h-[104px] flex flex-col justify-center items-center'>
                        <h1 class='font-bold text-[2.5rem] leading-[3.75rem]'>03</h1>
                        <p class='font-normal text-[0.875rem] leading-[21px]'>Day</p>
                    </div>
                    <div class='bg-white w-[104px] min-h-[104px] flex flex-col justify-center items-center'>
                        <h1 class='font-bold text-[2.5rem] leading-[3.75rem]'>08</h1>
                        <p class='font-normal text-[0.875rem] leading-[21px]'>Hour</p>
                    </div>
                    <div class='bg-white w-[104px] min-h-[104px] flex flex-col justify-center items-center'>
                        <h1 class='font-bold text-[2.5rem] leading-[3.75rem]'>09</h1>
                        <p class='font-normal text-[0.875rem] leading-[21px]'>Minute</p>
                    </div>
           </div>

           <button class='bg-black text-white px-[86px] py-[23px] rounded-[10px] mt-[70px]'>
           SHOP NOW
</button>
            </div>
            <div>
            <img src={img1}/>
            </div>
        </div>
        </div>
    )
}
export default Part6