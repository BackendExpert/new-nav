import IonIcon from "@reacticons/ionicons"
import { useState } from "react"

const navBar = () => {
  let [openAbout, AboutOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 bg-blue-900">
      <div className="md:flex items-center justify-between bg-gray-700 text-white py-4 md:px-20 px-7">
        <span className="flex">
          <IonIcon className="text-3xl" name="chatbubbles" />
          <span className="text-xl px-2">Logo Here</span>
        </span>
        <div>
          <ul className="flex">
            <li className="px-8"><a href="">Home</a></li>
            <li className="px-8">
              <span className="cursor-pointer" onClick={() => AboutOpen(!openAbout)}>About <IonIcon name={openAbout ? "" : ""}/></span>
            </li>
            <li className="px-8"><a href="">Home</a></li>
            <li className="px-8"><a href="">Home</a></li>
            <li className="px-8"><a href="">Home</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navBar