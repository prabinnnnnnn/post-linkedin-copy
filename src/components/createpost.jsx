import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useRef, useState } from 'react'
import { FaImage } from 'react-icons/fa'

function CreatePost({ getValue }) {
  
  let [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const uploadReff = useRef('')
  const [uploadImage, setUploadImage] = useState()

  const handleGetValueOfFile = (e) => {
    const file = e.target.files[0]
    setUploadImage(URL.createObjectURL(file))
  }

  const handleUploadPhoto = () => {
    uploadReff.current.click()
  }

  const handleGetValue = () => {
    getValue(value,uploadImage)
    setIsOpen(false)
    setUploadImage('')
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}
        className="h-full w-full bg-stone-100 border hover:bg-stone-50 hover:text-black duration-[0.2s] p-3 rounded-full flex justify-start text-[13px] font-semibold text-gray-600 outline-none">
          Start a post
    </button>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-3 bg-[rgb(0,0,0,0.3)]">
        <DialogPanel className="h-[70%] w-[50%] space-y-4 border bg-white rounded-md">
            <DialogTitle className={"h-full w-full flex"}>
              <div className='w-[55%] h-full flex justify-center items-center p-3'>
                {uploadImage ?
                  <div className='h-full w-full' >
                   <img src={uploadImage} className=' object-cover h-full w-full' />
                  </div>
                  : <div onClick={handleUploadPhoto} className='h-full w-full rounded-md cursor-pointer flex flex-col justify-center items-center border border-gray-400 border-dashed'>
                  <button className='text-sm font-semibold flex gap-x-1'>
                    <FaImage className="text-sky-500 text-[20px]" />Upload photo
                  </button>
                  <input type="file" onChange={handleGetValueOfFile} ref={uploadReff} className=' hidden' />
                </div> }
              </div>
              <div className='w-[45%] h-full flex flex-col justify-between border-l p-2 '>
                <div className='h-4/5 w-full'>
                  <div className='flex gap-2 items-center '>
                    <img src="/profile.jpg" alt="" className='h-[30px] w-[30px] rounded-full' />
                    <p className=' text-[11px] font-semibold'>prabinnnnn_</p>
                  </div>
                  <textarea onChange={(e)=>setValue(e.target.value)}
                    spellCheck='false' className='w-full h-full text-[14px] font-normal py-2 outline-none resize-none' placeholder='What do you want to talk abouts?' >
                  </textarea>
                </div>
                  <div className='h-1/5 w-full flex justify-end items-end'>
                    <button className='bg-sky-500 rounded-md h-8 w-20' onClick={handleGetValue}>post</button>
                  </div>
                
              </div>
            </DialogTitle>
        </DialogPanel>
      </div>
      </Dialog>
      </>
  )
}

export default CreatePost