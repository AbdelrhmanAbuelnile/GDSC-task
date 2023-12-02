import phones from "../assets/image-mockups.png"
import desktopPattern from "../assets/bg-intro-desktop.svg"
import mobilePattern from "../assets/bg-intro-mobile.svg"

export default function Hero(){
    return(
        <>
            <div className="w-full flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row justify-between items-center py-10 lg:py-0 lg:pl-24 bg-Very-Light-Gray">
                
                <div className="mt-16 lg:mt-0 lg:w-2/5 flex flex-col justify-center items-center lg:items-start gap-10 overflow-hidden px-3">
                    <h1 className="text-Dark-Blue text-2xl lg:text-6xl">Next generation <br/> digital banking</h1>
                    <p className="text-Grayish-Blue w-10/12 lg:w-3/5 text-center lg:text-left">
                        Take your financial life online. Your Easybank account will be a 
                        one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <button  className="py-3 px-4 rounded-3xl text-white font-semibold bg-gradient-to-r from-Lime-Green to-Bright-Cyan hover:from-[#30d45cc9] hover:to-[#2bb7dac9]">Request Invite</button>
                </div>

                <div className="flex justify-center items-center h-full w-full lg:w-3/5 relative">
                    <img src={window.innerWidth <= 475 ? mobilePattern : desktopPattern} alt="" className="w-full lg:scale-150 lg:translate-x-96 lg:-translate-y-[123px] lg:-z-0 lg:overflow-hidden" />
                    <img src={phones} alt="" className="absolute lg:-right-14 lg:top-0 lg:scale-125" />
                </div>


            </div>

        </>
    )
}

