import IonIcon from "@reacticons/ionicons"

const navBar = () => {
  return (
    <div className="shadow-md w-full top-0 left-0 bg-blue-900">
      <div className="md:flex items-center justify-between bg-gray-700 text-white py-4 md:px-20 px-7">
        <IonIcon name="menu" /> 
      </div>
    </div>
  )
}

export default navBar