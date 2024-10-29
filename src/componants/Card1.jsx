import { FaHeart, FaBrain, FaTooth, FaBone } from 'react-icons/fa'; // Font Awesome icons
import { FaStethoscope } from 'react-icons/fa';
import { GiScalpel, GiBoneKnife } from 'react-icons/gi';
import { FaUserCircle, FaEllipsisV } from 'react-icons/fa';
import { MdPersonOutline } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Cardiology from "../assets/Cardiology.png"
import Neurology from "../assets/Neurology.png"
import Dental from "../assets/Dental.png"
import Ophthalmology from "../assets/Ophthalmology.png"
import Osteology from "../assets/Osteology.png"
import Pathology from "../assets/Pathology.png"

import Doctor1 from "../assets/Doctor1.png"
import Doctor2 from "../assets/Doctor2.png"
import Doctor3 from "../assets/Doctor3.png"
import Doctor4 from "../assets/Doctor4.png"




export default function Card1()
{
    return(
        <div className="bg-gray-900 m-2 p-2 w-1/4 h-svh border border-zinc-600 rounded">
            <div className="flex justify-center items-center">
            <div className="text-white font-semibold"> Medical Peofessionals</div> 
            </div>
            

            <div className=" p-1 w-full h-1/2 border-0 rounded">

                    <div className=" p-1 flex items-center justify-evenly w-full h-1/2">
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border border-zinc-600 rounded bg-black w-full h-3/4 flex justify-center items-center hover:bg-white hover:text-black">
                                    <img src={Cardiology} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded  text-white  w-full h-1/4">
                                    Cariology
                                </div>
                            </div>
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border  border-zinc-600 rounded bg-black w-full h-3/4 flex justify-center items-center  hover:bg-white hover:text-black">
                                    <img src={Neurology} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded text-white  w-full h-1/4">
                                    Neurology
                                </div>
                            </div>
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border  border-zinc-600 rounded bg-black w-full h-3/4 flex justify-center items-center hover:bg-white hover:text-black">
                                    <img src={Dental} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded text-white  w-full h-1/4">
                                    Dental
                                </div>
                            </div>
                    </div>

                {/*line 2*/}

                    <div className=" p-1 flex items-center justify-evenly w-full h-1/2">
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border  border-zinc-600 rounded bg-black w-full h-3/4 flex justify-center items-center hover:bg-white hover:text-black">
                                    <img src={Ophthalmology} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded text-white  w-full h-1/4">
                                    Ophthalmology
                                </div>
                            </div>
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border  border-zinc-600 rounded bg-black w-full h-3/4 flex justify-center items-center hover:bg-white hover:text-black">
                                <img src={Osteology} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded text-white  w-full h-1/4">
                                    Osteology
                                </div>
                            </div>
                            <div className="border-0 rounded   w-1/3 h-3/4 p-1">
                                <div className="border  border-zinc-600 rounded bg-black w-full h-3/4 flex justify-center items-center hover:bg-white hover:text-black">
                                <img src={Pathology} alt="Heart" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-center justify-center border-0 rounded text-white  w-full h-1/4">
                                    Pathology
                                </div>
                            </div>
                    </div>
            </div>
            {/* <div className="bg-yellow-500 p-2  pb-4 w-full h-2/5 border-0 rounded">hi</div> */}


            <div className="p-2  pb-4 w-full h-2/5 border-0 rounded">

                    <div className="flex w-full mb-2 p-1 border-b border-zinc-600">
                        <div className="w/5/6 text-white  font-semibold">Doctors</div>
                    </div>

                    <div className="flex items-center justify-between border-0 rounded  p-2 hover:bg-white hover:text-black group">
                            <div className="flex items-center justify-evenly">
                                <div className="p-1 pr-2">
                                <img src={Doctor1} alt="Profile" className="w-8 h-8 rounded-full object-cover group-hover:bg-black" />
                                </div>
                                <div className="text-white  font-semibold group-hover:text-black">Dr. Pawan Patel</div>
                            </div>
                            <div>
                                <BsThreeDotsVertical size="1.2em" className="text-white group-hover:text-black"/>
                            </div>

                    </div>

                    <div className="flex items-center justify-between border-0 rounded  p-2 hover:bg-white hover:text-white group">
                            <div className="flex items-center justify-evenly">
                                <div className="p-1 pr-2">
                                <img src={Doctor2} alt="Profile" className="w-8 h-8 rounded-full object-cover group-hover:bg-black" />
                                </div>
                                <div className="text-white  font-semibold group-hover:text-black">Dr. Anvar Ali</div>
                            </div>
                            <div>
                                <BsThreeDotsVertical size="1.2em" className="text-white group-hover:text-black"/>
                            </div>

                    </div>

                    <div className="flex items-center justify-between border-0 rounded  p-2 hover:bg-white hover:text-white group">
                            <div className="flex items-center justify-evenly">
                                <div className="p-1 pr-2">
                                    <img src={Doctor3} alt="Profile" className="w-8 h-8 rounded-full object-cover group-hover:bg-black" />
                                </div>
                                <div className="text-white  font-semibold group-hover:text-black">Dr. Julie Ryan</div>
                            </div>
                            <div>
                                <BsThreeDotsVertical size="1.2em" className="text-white group-hover:text-black"/>
                            </div>

                    </div>

                    <div className="flex items-center justify-between border-0 rounded  p-2 hover:bg-white hover:text-white group">
                            <div className="flex items-center justify-evenly">
                                <div className="p-1 pr-2">
                                    <img src={Doctor4} alt="Profile" className="w-8 h-8 rounded-full object-cover group-hover:bg-black" />
                                </div>
                                <div className="text-white  font-semibold group-hover:text-black">Dr. Teena DSuza</div>
                            </div>
                            <div>
                                <BsThreeDotsVertical size="1.2em" className="text-white group-hover:text-black"/>
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