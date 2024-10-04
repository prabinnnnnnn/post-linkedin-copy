import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { useRef, useState } from "react"
import { FiEdit } from "react-icons/fi"

const Edit = ({post,handleEditValue}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [editInput, setEditInput] = useState(post.postText)


  const handleSavePost = () => {
    setIsOpen(false)
    handleEditValue(post.id,editInput)
  }

  const handleEditOpen = () => {
    if (confirm('do you want to edit your post?') === true) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <FiEdit onClick={handleEditOpen} className=" cursor-pointer text-[12px] text-sky-500" title="edit post" />
      
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className=" z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-3 bg-[rgb(0,0,0,0.3)]">
        <DialogPanel className="h-[45%] w-[50%] space-y-4 border bg-white p-3 rounded-md">
            <DialogTitle>
              <div className='flex flex-col gap-3 justify-end'>
                <div className='flex  gap-x-2  items-center'>
                  <img src="/profile.jpg" alt="" className='h-[40px] w-[40px] rounded-full' />
                  <p className=' text-[11px]'>prabinnnnn_</p>
                </div>
                <textarea onChange={(e)=> setEditInput(e.target.value)} value={editInput}
                  spellCheck='false' className='w-full h-[140px] text-[16px] font-normal p-2 outline-none border rounded-md resize-none' placeholder='What do you want to talk abouts?' >
                </textarea>
                <div className='h-full w-full flex justify-end'>
                <button className='bg-sky-500 rounded-md h-8 w-20' onClick={handleSavePost}>Save</button>
                </div>
              </div>
            </DialogTitle>
        </DialogPanel>
      </div>
      </Dialog>
    </>
  )
}


export default Edit

