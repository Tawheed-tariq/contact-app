import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from './config/firebase'
import ContactCard from './components/contactCard'
import Modal from './components/modal'
import { AiOutlineClose } from 'react-icons/ai'


function App() {
  const [contacts, setContacts] = useState([]);

  const [open, setOpen] = useState(false)
  const click = () => {
    setOpen(prev => !prev)
  }
// on click of Plus(+) button this changes to cross symbol or back to plus symbol
  const [sign, setSign] = useState('+')
    const toggleSign = () => {
        setSign(() => {
            if(sign === '+')
                return(
                  <div className='flex justify-center items-center'>
                    <AiOutlineClose className='text-sm'/>
                  </div>
              )
            else    return '+'
        })
        {click()}
    }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts')
        const getSnapshots = await getDocs(contactsRef)
        const contactList = getSnapshots.docs.map((doc) => {
          return {
            id:doc.id,
            ...doc.data()
          }
        })
        setContacts(contactList)
      } catch (error) {
        console.log("unknown error occured " + error)
      }
    }
    getContacts()
    }, [])



  return (
    <>
      <div className='w-full bg-dark-gray h-screen flex flex-col items-center'>
        <Header toggle={toggleSign} sign={sign}/>
        <div className={`sm:w-4/5 w-11/12 sm:max-w-2xl mt-2`}>
          {
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact}/>
            ))
          }
        </div>
        <Modal isOpen={open} toggle={toggleSign} />
      </div>
    </>
  )
}

export default App
