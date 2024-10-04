import { SlLike } from "react-icons/sl";
import { IoSyncOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import MoreButton from "./more";
import Edit from "./edit";
import CommentButton from "./comment";

const Post = ({post ,handleDeleteValue ,handleEditValue}) => {

<IoIosSend className="text-[20px]" />
  return (
      <>
      {post.map((post) =>
        <div key={post.id} className="w-full rounded-lg p-2 flex flex-col gap-y-2 shadow shadow-stone-400 ">
          <div className="flex  justify-between">
            <div className=" flex gap-x-2 items-center">
              <div className="h-8 w-8 rounded-full overflow-hidden">
              <img src="/profile.jpg" alt=""className="h-full w-full" />
              </div>
              <div className="flex gap-x-2">
              <p className="text-[10px] font-semibold text-gray-800">prabinnnnn_</p>
                <Edit post={ post} handleEditValue={handleEditValue} />
              </div>

            </div>
            <MoreButton post={post} handleDeleteValue={handleDeleteValue} handleEditValue={handleEditValue} />
          </div>
            <p className="font-normal text-[14px] p-1 text-pretty ">
              {post.postText}
          </p>
              <div className="h-full w-full rounded-md overflow-hidden">
                <img src={post.image} alt="" className="h-full w-full object-cover" />
              </div>
            <div className="w-full h-14 flex justify-around items-center p-1">
              <button className="hover:bg-slate-100 h-full w-full px-3 py-2 text-[16px] rounded-md flex justify-center items-center gap-2 text-sky-500" title='Like'>
                <SlLike />
                <p className="text-slate-800 font-medium text-[12px]">Like</p>
            </button>
            <CommentButton post={post} />
            <button className="hover:bg-slate-100 h-full w-full px-3 py-2 text-[16px] rounded-md flex justify-center items-center gap-2 text-sky-500" title='repost'>
                <IoSyncOutline className="text-[19px]" />
                <p className="text-slate-800 font-medium text-[12px]">Repost</p>
            </button>
            <button className="hover:bg-slate-100 h-full w-full px-3 py-2 text-[16px] rounded-md flex justify-center items-center gap-2 text-sky-500" title='send'>
                <IoIosSend className="text-[20px]" />
                <p className="text-slate-800 font-medium text-[12px]">Send</p>
            </button>
            </div>
        </div >
      )}
      </>
  )
}


export default Post