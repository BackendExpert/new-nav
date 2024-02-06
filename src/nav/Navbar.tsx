import IonIcon from "@reacticons/ionicons"
import { useState } from "react"

const navBar = () => {
  let [openAbout, AboutOpen] = useState(false);
  let [openMenu, setMenu] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 bg-blue-900">
      <div className="md:flex items-center justify-between bg-gray-700 text-white py-4 md:px-20 px-7">
        <span className="flex">
          <IonIcon className="text-3xl" name="chatbubbles" />
          <span className="text-xl px-2">Logo Here</span>
        </span>
        <div onClick={() => setMenu(!openMenu)} className="text-2xl absolute cursor-pointer right-8 top-4 md:hidden ">
            <IonIcon name={openMenu ? "close" : "menu"}/>
          </div>
        <div>
          <ul className={`md:flex md:items-center md:pb-0 absolute md:static z-auto z-[-1] md:bg-gray-700 bg-gray-800 left-0 md:mt-0 mt-[-16px] w-full md:w-auto md:pl-0 md:py-0 py-4 md:px-0 px-2 transition-all duration-500 ease-in ${openMenu ? 'top-20 ':'top-[-590px]'}`}>
            <li className="px-4 py-4 md:py-0"><a href="">Home</a></li>
            <li className="px-4 py-4 md:py-0">
              <span className="cursor-pointer flex" onClick={() => AboutOpen(!openAbout)}>About <span className="pl-2 pt-[0px]"><IonIcon name={openAbout ? "chevron-down" : "chevron-up"}/></span></span>
              <div className={`rounded items-center py-6 px-4 absolute static bg-gray-700  z-auto z-[-1] left-16 md:w-11/12 md:mr-12 w-auto ml-0 pr-24 md:pl-12 pl-9 md:mt-[-14px] md:mr-10 mr-8 transition-all duration-500 ease-in ${openAbout ? 'top-20':'md:top-[-100px] top-[-150px]'}`}>
                  asdasd
              </div>
            </li>
            <li className="px-4 py-4 md:py-0"><a href="">Home</a></li>
            <li className="px-4 py-4 md:py-0"><a href="">Home</a></li>
            <li className="px-4 py-4 md:py-0"><a href="">Home</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navBar