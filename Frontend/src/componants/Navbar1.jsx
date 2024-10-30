
import lamboImg from '../assets/lamboImg.png'
import Cardiology from "../assets/Cardiology.png"
import Doctor2 from "../assets/Doctor2.png"
export default function Navbar1()
{
    return(
        <div className="flex  h-14 items-center justify-between border border-b-zinc-600">

            <div className="flex w-1/6 items-center justify-center">
                <div className="flex items-center justify-center object contain p-1 medconnect-text text-white font-semibold text-xl" >
                    MedConnect
                </div>
            </div>

            <div className="flex items-center justify-around  w-1/2">
            <div className="flex items-center justify-evenly  p-1 w-full">
                    <div className="flex items-center justify-center p-1 w-1/5 hover:text-black border-0 rounded hover:bg-white  font-semibold text-white">Features</div>
                    <div className="flex items-center justify-center p-1 w-1/5 hover:text-black border-0 rounded hover:bg-white  font-semibold text-white">Pricing</div>
                </div>
            </div>

            <div className="flex items-center justify-end  w-1/4">
                <div className="flex items-center justify-evenly p-1 w-1/2">
                    <div className="flex items-center justify-center border-0 rounded p-1 w-1/2 hover:text-white hover:bg-black font-semibold text-slate-500"> <img src={Doctor2} alt="Profile" className="w-8 h-8 rounded-full object-cover group-hover:bg-black" /></div>
                    <div className="flex items-center justify-center bg-white border-0 rounded p-1 w-1/2  font-semibold text-black mr-2">Log out</div>
                </div>
            </div>

        </div>
    )
}