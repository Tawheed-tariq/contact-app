export default function Header({toggle, sign}){
    
    return(
        <header className="sm:w-4/5 w-11/12 sm:max-w-2xl mt-2">
            <div className="px-5 py-4  bg-white rounded-lg flex items-center justify-center">
                <img src="images/logos_firebase.png" className="w-5 h-5" alt="logo" />
                <h2 className="ml-3 font-semibold">Firebase Contacts App</h2>
            </div>
            <div className="py-4">
                <input type="text" className="xs:w-5/6 w-2/3 px-3 py-2 rounded-lg focus:outline-none bg-transparent text-white border-2 border-gray" placeholder="Search contact" />
                <button className=" ml-2  text-black bg-white rounded-full w-8 h-8 text-xl  font-semibold" onClick={toggle}>{sign}</button>
            </div>
        </header>
    )
}