import IonIcon from "@reacticons/ionicons"
import { useState } from "react"

const navBar = () => {
  let institute =[
    {name:"About Us",link:"/"},
    {name:"History",link:"/"},
    {name:"Vision and Mision",link:"/"},
  ];
  let people =[
    {name:"Scientist",link:"/"},
    {name:"Academics",link:"/"},
    {name:"Non Academics",link:"/"},
    {name:"Volunteer",link:"/"},
    {name:"Alumin",link:"/"},
  ];
  let leadership =[
    {name:"Board of Govrnors",link:"/"},
    {name:"Chairman",link:"/"},
    {name:"Directir",link:"/"},
    {name:"Research Council",link:"/"},
  ];
  let administration =[
    {name:"Account Division",link:"/"},
    {name:"Administration Division",link:"/"},
    {name:"Computer Division",link:"/"},
    {name:"Science Education & Dissemination Unit",link:"/"},
    {name:"Instrument & Maintenance Division",link:"/"},
    {name:"Internal Audit Division",link:"/"},
    {name:"Office of the Director",link:"/"},
    {name:"Procurement & Kabiratory Service Divison",link:"/"},
  ];
  let society =[
    {name:"Young Scientist Association",link:"/"},
    {name:"Welfare",link:"/"},
  ];
  let facilities =[
    {name:"Research Center",link:"/"},
    {name:"Library",link:"/"},
    {name:"Conference Facilities",link:"/"},
  ];


  let [openMenu, setMenu] = useState(false);
  let [openAbout, AboutOpen] = useState(false);


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
              <span className="cursor-pointer flex" onClick={() => AboutOpen(!openAbout)}>About <span className="pl-2 pt-[0px]"><IonIcon name={openAbout ? "chevron-up" : "chevron-down"}/></span></span>
              <div className={`rounded items-center py-6 px-4 absolute static bg-gray-700  z-auto z-[-1] md:w-11/12 w-11/12 md:left-12 left-[-2px] ml-4 md:mr-12 mt-[35px] w-auto ml-0 pr-24 md:pl-12 pl-9 md:mt-[-14px] md:mr-10 mr-8 transition-all duration-500 ease-in ${openAbout ? 'top-20':'md:top-[-3500px] top-[-1500px]'}`}>
                <div className="md:grid md:grid-cols-3 gap-2 md:px-12 px-0 py-4">  
                  <div>
                    <span className="text-2xl">Institute</span>
                    <ul className="py-4 ml-2">
                      {
                        institute.map((link)=>(
                          <li key={link.name} className='pb-[5px] duration-500 hover:bg-white hover:px-2 hover:text-gray-700 rounded-sm font-medium'>
                            <a href={link.link} className=''>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div>
                    <span className="text-2xl">People</span>
                    <ul className="py-4 ml-2">
                      {
                        people.map((link)=>(
                          <li key={link.name} className='pb-[5px] duration-500 hover:bg-white hover:px-2 hover:text-gray-700 rounded-sm font-medium'>
                            <a href={link.link} className=''>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div>
                    <span className="text-2xl">Leadership</span>
                    <ul className="py-4 ml-2">
                      {
                        leadership.map((link)=>(
                          <li key={link.name} className='pb-[5px] duration-500 hover:bg-white hover:px-2 hover:text-gray-700 rounded-sm font-medium'>
                            <a href={link.link} className=''>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div>
                    <span className="text-2xl">Administration</span>
                    <ul className="py-4 ml-2">
                      {
                        administration.map((link)=>(
                          <li key={link.name} className='pb-[5px] duration-500 hover:bg-white hover:px-2 hover:text-gray-700 rounded-sm font-medium'>
                            <a href={link.link} className=''>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div>
                    <span className="text-2xl">Society</span>
                    <ul className="py-4 ml-2">
                      {
                        society.map((link)=>(
                          <li key={link.name} className='pb-[5px] duration-500 hover:bg-white hover:px-2 hover:text-gray-700 rounded-sm font-medium'>
                            <a href={link.link} className=''>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div>
                    <span className="text-2xl">Facilities</span>
                    <ul className="py-4 ml-2">
                      {
                        facilities.map((link)=>(
                          <li key={link.name} className='pb-[5px] duration-500 hover:bg-white hover:px-2 hover:text-gray-700 rounded-sm font-medium'>
                            <a href={link.link} className=''>{link.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>

                </div>
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