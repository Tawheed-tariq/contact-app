//creating a custom hook which will be reused in other components

import { useState } from "react"
export default function UseDisclosure(){
    const [isOpen, setOpen] = useState(false)
  const onOpen = () => {
    setOpen(() => (true))
  }
  const onClose = () => {
    setOpen(() => (false))
  }
  return {isOpen, onOpen, onClose}
}