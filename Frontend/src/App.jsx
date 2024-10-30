import Navbar1 from "./componants/Navbar1"
import Sidebar1 from "./componants/Sidebar1"
import Card1 from "./componants/Card1"
import Card2 from "./componants/Card2"
import Card3 from "./componants/Card3"
import NextMeeting from "./componants/NextMeeting"
function App() {
  return(
    <div className="bg-black">
      <Navbar1></Navbar1>
      <div className="flex  justify-between">
        <Sidebar1></Sidebar1>
        <div className="w-7/12 h-svh p-2"> 

        <div className="w-full h-1/2 mb-1"> <NextMeeting></NextMeeting></div>

       

        <div className="w-full h-1/2  mt-4 flex">
            <div className="w-1/2 h-full  mr-1"><Card2></Card2></div>
            <div className="w-1/2 h-full  ml-1"><Card3></Card3></div>
        </div>

        
        </div>
        <Card1></Card1>
      
      </div>
      
    </div>
  )
}

export default App
