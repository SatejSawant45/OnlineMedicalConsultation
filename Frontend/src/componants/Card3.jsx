import { FaHeart, FaBrain, FaTooth, FaBone } from 'react-icons/fa';
import { FaStethoscope } from 'react-icons/fa';
import { GiScalpel, GiBoneKnife } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

import RespiratoryDiesase from "../assets/RespiratoryDisease.png"
import LiverDisease from "../assets/LiverDisease.png"

export default function Card3()
{
    return(
        <div className="bg-gray-900 w-full h-full  p-2 border  border-zinc-600 rounded f">

        <div className="p-2  pb-4 w-full h-full border-0 rounded">

                    <div className="flex w-full mb-2 p-1 border-b border-zinc-600">
                        <div className="w/5/6  font-semibold text-white">Treatments for commmon Diseases</div>
                    </div>

                    <div className="flex items-center  border-0 rounded  p-2 ">

                            <div className="flex items-center w-5/6 h-20 ">

                                    <div className="flex bg-black  items-center justify-center border-0 rounded   w-1/3 h-3/4  border rounded border-zinc-600">
                                        <img src={RespiratoryDiesase} alt="Heart" className="w-full h-full object-cover" />
                                        
                                    </div>

                                    <div className=" w-1/2  text-white font-semibold group-hover:text-white pl-4 ">
                                        Respiratory Disorders 
                                    </div>
                            </div>


                            <div className=" w-1/6 flex justify-end text-white">
                                <BsThreeDotsVertical size="1.2em" />
                            </div>

                    </div>

                    <div className="flex items-center  border-0 rounded  p-2 ">

                            <div className="flex items-center w-5/6 h-20 ">

                                    <div className="flex bg-black  items-center justify-center border-0 rounded   w-1/3 h-3/4 ">
                                        <img src={LiverDisease} alt="Heart" className="w-full h-full object-cover" />
                                        
                                    </div>

                                    <div className=" w-1/2  text-white font-semibold group-hover:text-white pl-4 ">
                                        Liver Disorders
                                    </div>
                            </div>


                            <div className=" w-1/6 flex justify-end text-white">
                                <BsThreeDotsVertical size="1.2em" />
                            </div>

                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center bg-white font-semibold text-black mt-2 p-2 border-0 rounded w-1/2">
                            <div>Show More</div>
                        </div>
                    </div>

                    
            </div>
            </div>

    )
}