import { FaHeart, FaBrain, FaTooth, FaBone } from 'react-icons/fa';
import { FaStethoscope } from 'react-icons/fa';
import { GiScalpel, GiBoneKnife } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Antibiotics from "../assets/Antibiotics.png"
import Analgesics from "../assets/Analgesics.png"
import Antihistamines from "../assets/Antihistamines.png"
import Antidepressant from "../assets/Antidepressant.png"
import Steroids from "../assets/Steroids.png"
import Vaccines from "../assets/Vaccines.png"

export default function Card2()
{
    return(
       

        <div className="bg-gray-900 p-2  w-full h-full border rounded border-zinc-600">
            <div className='flex items-center justify-center font-semibold text-white'>Medicines info</div>
            <div className=" p-1 flex items-center justify-evenly w-full h-1/2">
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border rounded bg-black w-full h-3/4 flex justify-center items-center border-zinc-600 hover:bg-white hover:text-black">
                                    <img src={Antibiotics} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded  w-full h-1/4 text-white">
                                    Antibiotics
                                </div>
                            </div>
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border-0 rounded bg-black w-full h-3/4 flex justify-center items-center  hover:bg-white hover:text-black">
                                    <img src={Analgesics} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded  w-full h-1/4 text-white">
                                    Analgesics
                                </div>
                            </div>
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border-0 rounded bg-black w-full h-3/4 flex justify-center items-center hover:bg-white hover:text-black">
                                    <img src={Antihistamines} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded  w-full h-1/4 text-white">
                                    Antihistamines
                                </div>
                            </div>
                    </div>


                    <div className=" p-1 flex items-center justify-evenly w-full h-1/2">
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border-0 rounded bg-black w-full h-3/4 flex justify-center items-center hover:bg-white hover:text-black">
                                    <img src={Antidepressant} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded  w-full h-1/4 text-white">
                                    Antidepressant
                                </div>
                            </div>
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border-0 rounded bg-black w-full h-3/4 flex justify-center items-center  hover:bg-white hover:text-black">
                                    <img src={Steroids} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded  w-full h-1/4 text-white">
                                    Steroids
                                </div>
                            </div>
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border-0 rounded bg-black w-full h-3/4 flex justify-center items-center hover:bg-white hover:text-black">
                                    <img src={Vaccines} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded  w-full h-1/4 text-white">
                                    Vaccines
                                </div>
                            </div>
                    </div>
            
        </div>
        
    )
}