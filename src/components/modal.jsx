import {AiOutlineClose} from 'react-icons/ai'
export default function Modal({isOpen, toggle}){
    return (
        <>
            {isOpen && <div className="bg-white flex flex-col gap-2 w-11/12 max-w-xl rounded-xl py-5 px-5 absolute top-32 z-40 ">
                <AiOutlineClose onClick={toggle} className='self-end cursor-pointer'/>
                <label className="font-medium text-lg" htmlFor="name">Name</label>
                <input required className="border-2 h-8 rounded-full border-gray px-4" type="text" id="name" />
                <label className="font-medium text-lg" htmlFor="email">Email</label>
                <input required className="border-2  h-8 rounded-full border-gray px-4" type="email" id="email" />
                <input type='submit' value="Add Contact" className="self-end p-3 px-4 bg-orange rounded-full cursor-pointer text-lg"/>
            </div>}
        </>
    )
}