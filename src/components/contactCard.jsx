import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
import {RiEditCircleLine} from 'react-icons/ri'
import {db} from '../config/firebase'
import { doc , deleteDoc} from 'firebase/firestore'
import Modal from './modal'
import {toast} from 'react-toastify'
import UseDisclosure from '../hooks/useDisclosure'
export default function ContactCard({contact}){

  const {isOpen, onOpen, onClose} = UseDisclosure() //using the custom hook that is created in hooks folder

  const deleteContact = async (id)=>{
    try {
      await deleteDoc(doc(db, 'contacts', id))
      toast.success('Contact deleted successfully')
    } catch (error) {
      console.log(error)
    }
  }
    return(
        <div key={contact.id} className='w-[100%] mt-2 flex gap-3 items-center bg-yellow rounded-md px-3 py-2 '>
          <HiOutlineUserCircle className='text-orange size-9'/>
          <div className='cursor-pointer overflow-x-scroll hideScrollbar'>
            <h2 className='font-bold'>{contact.name}</h2>
            <p>{contact.email} </p>
          </div>
          <div className='flex ml-auto gap-2'>
            <RiEditCircleLine onClick={onOpen} className='size-6 cursor-pointer'/>
            <IoMdTrash 
              onClick={() => {
                deleteContact(contact.id)
              }} 
              className='size-6 text-purple cursor-pointer'
            />
          </div>
          <Modal isUpdate={true} contact={contact} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </div>
    )
}