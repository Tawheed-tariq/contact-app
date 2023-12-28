import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from './config/firebase'
import ContactCard from './components/contactCard'
import Modal from './components/modal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoContacts from './components/NoContacts'
import UseDisclosure from './hooks/useDisclosure'

function App() {
  const [contacts, setContacts] = useState([]);

  
  const {isOpen, onOpen, onClose} = UseDisclosure() //using the custom hook that is created in hooks folder

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts')
        // const getSnapshots = await getDocs(contactsRef)
        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id:doc.id,
              ...doc.data()
            }
          })
          setContacts(contactList)
          return contactList
        })
      } catch (error) {
        console.log("unknown error occured " + error)
      }
    }
    getContacts()
    }, []);

    const filterContacts = (e) => {
      const value = e.target.value
      const contactsRef = collection(db, 'contacts')
        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id:doc.id,
              ...doc.data()
            }
          })
          const filteredContacts = contactList.filter((contact) => (
            contact.name.toLowerCase().includes(value.toLowerCase())
          ))
          setContacts(filteredContacts)
          return filteredContacts
        })
    }

  return (
    <>
      <div className='w-full bg-dark-gray h-screen flex flex-col items-center'>
        <Header filterContacts={filterContacts} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        <div className={`sm:w-4/5 w-11/12 sm:max-w-2xl mt-2`}>
          {
            contacts.length <= 0? 
            <NoContacts/>
            :
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            ))
          }
        </div>
        <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <ToastContainer/>
      </div>
    </>
  )
}

export default App
