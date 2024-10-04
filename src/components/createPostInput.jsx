import { MdEmojiEvents } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import CreatePost from "./createpost";
import Uploadphoto from "./uploadImage/uploadphoto";

const CreatePostInput = ({ getValue,getUploadPhoto }) => {

  return (
      <div className="h-[20%] w-[30%] bg-stone-50 rounded-md overflow-hidden p-3">
      <div className='w-full flex overflow-hidden gap-x-3 '>
        <div className="h-full w-[60px]">
          <img src="./profile.jpg" alt="profile" className='h-full w-full rounded-full object-cover' />
        </div>
        <CreatePost getValue={getValue} />
        </div>
      <div className='w-full p-2 flex justify-between px-8'>
        <Uploadphoto getUploadPhoto={getUploadPhoto} />
        <button className="px-4 py-2 hover:bg-slate-100 rounded-md flex outline-none justify-center items-center gap-1 text-[14px]">
          <MdEmojiEvents className="text-sky-500 text-[24px]" />Events
        </button>
        <button className="px-4 py-2 hover:bg-slate-100 rounded-md flex outline-none justify-center items-center gap-1 text-[14px]">
          <IoMdDocument className="text-sky-500 text-[20px]" />Aritcal
        </button>
        </div>
      </div>
  )
}

export default CreatePostInput