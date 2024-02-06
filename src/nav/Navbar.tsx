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
        <div onClick={() => setMenu(!openMenu)} className="text-2xl absolute cursor-pointer md:hidden right-8 top-4">
            <IonIcon name={openMenu ? "close" : "menu"}/>
          </div>
        <div>
          <ul className="md:flex md:item-center md:pb-0 pb-6 md:pt-0 pt-4 pl-4">
            <li className="px-4 py-4 md:py-0"><a href="">Home</a></li>
            <li className="px-4 py-4 md:py-0">
              <span className="cursor-pointer flex" onClick={() => AboutOpen(!openAbout)}>About <span className="pl-2 pt-[0px]"><IonIcon name={openAbout ? "chevron-down" : "chevron-up"}/></span></span>
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