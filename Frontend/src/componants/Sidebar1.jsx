import { FaHome, FaUser, FaCog, FaInfoCircle } from 'react-icons/fa'; 
import { FaFolderOpen, FaCode, FaUserShield, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaStethoscope } from 'react-icons/fa';

export default function Sidebar1(){
    return(
        <div className="bg-gray-900 w-1/6 h-dvh  border-r border-zinc-600 border mr-2 font-semibold">
            <div className="flex items-start justify-center w-full h-full  p-4">
                <div className="w-full p-1">

                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group ">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaHome size={20}></FaHome></div>
                            <div className="w/5/6 text-white group-hover:text-black">Home</div>
                        </div>
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaUser size={20}></FaUser></div>
                            <div className="w/5/6 text-white group-hover:text-black">About Us</div>
                        </div>
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaCog size={20}></FaCog></div>
                            <div className="w/5/6 text-white group-hover:text-black">Settings</div>
                        </div>
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaInfoCircle size={20}></FaInfoCircle></div>
                            <div className="w/5/6 text-white group-hover:text-black">T & C</div>
                        </div>

                    <div className="flex w-full mt-4 mb-4 p-1 border-b border-zinc-600">
                        
                        <div className="w/5/6 text-white">Resources</div>
                    </div>


                        {/* Projects */}
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaFolderOpen size={20} /></div>
                            <div className="w-5/6 text-white group-hover:text-black">Records</div>
                        </div>

                        {/* Developers */}
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaStethoscope size={20}></FaStethoscope></div>
                            <div className="w-5/6 text-white group-hover:text-black">Book Meeting</div>
                        </div>

                        {/* Administrators */}
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaUserShield size={20} /></div>
                            <div className="w-5/6 text-white group-hover:text-black">Your Meetings</div>
                        </div>

                    <div className="flex w-full mt-4 mb-4 p-1  border-b border-zinc-600">
                        
                        <div className="w/5/6 text-white">Connect with Us</div>
                    </div>



                        {/* GitHub */}
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaGithub size={20} /></div>
                            <div className="w-5/6 text-white group-hover:text-black">GitHub</div>
                        </div>

                        {/* Instagram */}
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white  hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaInstagram size={20} /></div>
                            <div className="w-5/6 text-white group-hover:text-black">Instagram</div>
                        </div>

                        {/* Email */}
                        <div className="flex w-full mt-4 mb-4 p-1 border-0 rounded hover:bg-white hover:text-black group">
                            <div className="w-1/6 mr-2 text-white group-hover:text-black"><FaEnvelope size={20} /></div>
                            <div className="w-5/6 text-white group-hover:text-black">Email</div>
                        </div>

                </div>
                
            </div>
        </div>
    )
}