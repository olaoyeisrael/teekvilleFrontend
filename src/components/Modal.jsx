import React from 'react'

const Modal = ({open, onClose, children}) => {
  return (
    <div onClick={onClose}
    className={`fixed inset-0 flex justify-center items-center transition-all z-10 ${ open ? "visible bg-black/20" : "invisible"}`}>
        <div
        onClick={(e)=> e.stopPropagation()}
        className={`bg-white rounded-xl shadow py-10 px-1 transition-all   ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
            {children}
        </div>
        

    </div>
  )
}

export default Modal