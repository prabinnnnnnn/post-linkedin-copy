import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React, { useRef, useState } from 'react'
import { FaImage } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Uploadphoto({getUploadPhoto}) {

  const [isUpload, setIsUpload] = useState(false)
  const [imageSrc, setImageSrc] = useState()
  const uploadRef = useRef(null)
  const reffInputValue = useRef('')

  const handleUpload = () => {
    uploadRef.current.click()
  }

  const handleGetFileValue = (e) => {
    const file = e.target.files?.[0]
    setImageSrc(URL.createObjectURL(file))
  }

  const sendPhoto = () => {
    const value = reffInputValue.current.value
    getUploadPhoto(imageSrc,value)
    setIsUpload(false)
    setImageSrc('')
  }

  console.log(imageSrc)

  return (
    <>
        <button onClick={()=> setIsUpload(true)} className="px-4 py-2 hover:bg-slate-100 rounded-md flex outline-none justify-center items-center gap-1 text-[14px]">
          <FaImage className="text-sky-500 text-[20px]" />Media
        </button>
          <Dialog open={isUpload} onClose={() => setIsUpload(false)} className=" z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-3 bg-[rgb(0,0,0,0.5)]">
        <DialogPanel className="h-[65%] w-[35%] space-y-4 border bg-white p-3 rounded-md">
            <DialogTitle className={"h-full w-full flex flex-col items-end gap-2"}>
              <textarea  ref={reffInputValue} spellCheck='false' className='w-full h-[50px] text-[16px] font-normal p-2 outline-none rounded-md resize-none' placeholder='What do you want to talk abouts?' />
              {imageSrc ?<div className='h-[90%] w-full border rounded-md overflow-hidden'>
                <video width="100%" height="100px" controls  className=' rounded-md'>
                    <source src={imageSrc} type="video/webm"/>
                </video>
              </div>: <div className='h-[90%] w-full border rounded-md overflow-hidden'></div> }
              {imageSrc ?
                <button onClick={sendPhoto} className=' border bg-sky-500 px-6 rounded-md text-sm font-medium py-2' >Post</button> 
                : <button className='flex items-center hover:bg-sky-600 gap-x-2 border bg-sky-500 px-4 py-2 rounded-md' onClick={handleUpload}>
                <input type="file" onChange={handleGetFileValue} ref={uploadRef} className=' hidden' />
                <IoCloudUploadOutline className='text-[30px] text-stone-50' />
                <p className='text-sm text-white'>Upload Media</p>
              </button>}
            </DialogTitle>
        </DialogPanel>
      </div>
      </Dialog>
    </>
  )
}
