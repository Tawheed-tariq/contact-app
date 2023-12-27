import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
import {RiEditCircleLine} from 'react-icons/ri'
export default function ContactCard({contact}){
    return(
        <div key={contact.id} className='w-[100%] mt-2 flex gap-3 items-center bg-yellow rounded-md px-3 py-2 '>
          <HiOutlineUserCircle className='text-orange size-9'/>
          <div className='cursor-pointer overflow-x-scroll hideScrollbar'>
            <h2 className='font-bold'>{contact.name}</h2>
            <p>{contact.email} </p>
          </div>
          <div className='flex ml-auto gap-2'>
            <RiEditCircleLine className='size-6 cursor-pointer'/>
            <IoMdTrash className='size-6 text-purple cursor-pointer'/>
          </div>
        </div>
    )
}