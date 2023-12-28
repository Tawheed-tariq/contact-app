import {AiOutlineClose} from 'react-icons/ai'
import {addDoc, collection, updateDoc, doc} from 'firebase/firestore'
import {db} from '../config/firebase'
import {Form, Formik, Field, ErrorMessage} from 'formik'
import {toast} from 'react-toastify'
import * as Yup from 'yup'

const contactSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required").email("Invalid email")
})

export default function Modal({isOpen, onClose , isUpdate, contact}){
    const addcontact = async (values) => {
        try{
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, values)
            onClose()
            toast.success('contact added successfully')
        }catch(err){
            console.log("error occured " + err)
        }
    }
    const updateContact = async (values, id) => {
        try{
            const contactRef = doc(db, "contacts", id)
            await updateDoc(contactRef, values)
            onClose()
            toast.success('contact updated successfully')
        }catch(err){
            console.log("error occured " + err)
        }
    }
    
    return (
        <>
            {isOpen && <Formik
                validationSchema={contactSchema}
                initialValues={
                    isUpdate ? 
                    {
                        name: contact.name,
                        email: contact.email
                    }
                    :
                    {
                        name: "",
                        email: ""
                    }}
                onSubmit={(values) => {
                    isUpdate ? 
                    updateContact(values, contact.id)
                    :
                    addcontact(values)
                }}
                
            >
                <Form className="bg-white flex flex-col gap-2 w-11/12 max-w-xl rounded-xl py-5 px-5 absolute top-32 z-40 ">
                    <AiOutlineClose onClick={onClose} className='self-end cursor-pointer'/>
                    <label className="font-medium text-lg" htmlFor="name">Name</label>
                    <Field  name='name' className="border-2 h-8 rounded-full border-gray px-4" type="text" id="name" />
                    <ErrorMessage name='name'/>
                    <label className="font-medium text-lg" htmlFor="email">Email</label>
                    <Field  name='email' className="border-2  h-8 rounded-full border-gray px-4" type="text" id="email" />
                    <ErrorMessage name='email'/>
                    <button type='submit' className="self-end p-3 px-4 bg-orange rounded-full cursor-pointer text-lg">{isUpdate? "Update" : "Add"} Contact</button>
                </Form>
            </Formik>}
        </>
    )
}