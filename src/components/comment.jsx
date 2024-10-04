import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useRef, useState } from "react";
import { VscComment } from "react-icons/vsc";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const CommentButton = ({post}) => {

  const [isComment, setIsComment] = useState(false)
  const [comments, setComments] = useState([])

  const commentReff = useRef('')

  const handleGetCommet = () => {
    const value = { id: new Date().getTime().toLocaleString(), commentText: commentReff.current.value }
    if (commentReff.current.value === '') {
      return null
    }
    commentReff.current.value = ''

    
      setComments([...comments,value])
  }

  return (
    <>
      <button onClick={()=> setIsComment(true)} className="hover:bg-slate-100 h-full w-full px-3 py-2 text-[16px] rounded-md flex justify-center items-center gap-2 text-sky-500" title='Comment'>
        <FaRegComment className="text-[17px]" />
        <p className="text-slate-800 font-medium text-[12px]">Comment</p>
      </button>
      <Dialog open={isComment} onClose={() => setIsComment(false)} className=" z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-3 bg-[rgb(0,0,0,0.3)]">
          <DialogPanel className="h-[85%] w-[60%] space-y-4 border bg-stone-50 rounded-md flex justify-center items-center overflow-hidden">
            <DialogTitle className="h-full w-[100%] flex">
              <div className="h-full w-[45%] flex flex-col gap-y-3 border-r">
                <div className="h-full w-full">
                  <img src={post.image} alt="" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="h-full w-[55%]">
                <div className="h-[80%] w-full overflow-hidden">
                  <div className="h-full w-full overflow-y-auto p-3 flex flex-col gap-y-3">
                        <div className="flex flex-col border-b py-2">
                          <div className=" flex gap-x-2 items-center">
                            <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img src="/profile.jpg" alt=""className="h-full w-full" />
                            </div>
                            <div className="flex gap-x-2">
                            <p className="text-[10px] font-semibold">prabinnnnn_</p>
                          </div>
                        </div>
                        <blockquote>
                            <p className="text-[12px] text-pretty pl-10">
                              {post.postText}
                            </p>
                        </blockquote>
                        </div>

                    {comments.map((cmt)=><div className="flex w-full gap-x-3">
                      <div className="h-full w-[8%]">
                        <img src="/profile.jpg" alt="" className="rounded-full object-cover" />
                      </div>
                      <div className="w-[100%]">
                        <p className="text-[10px] font-semibold ">prabinnnnn_</p>
                      <p className="text-[12px] font-medium text-pretty">{ cmt.commentText}</p>
                      </div>
                      <FaRegHeart/>
                    </div>)}
                  </div>
                </div>
                <div className="h-[20%] w-full bg-stone-50 ">
                  <div className="h-1/2 bg-stone-50 flex items-center gap-x-4 px-4 border-b border-t">
                    <FaRegHeart className="text-[20px]" />
                    <FaRegComment className="text-[20px]" />
                  </div>
                  <div className="h-1/2 w-full flex items-center px-4 py-3 gap-x-2 justify-center bg-stone-50 ">
                    <MdOutlineEmojiEmotions className="text-[28px] cursor-pointer " />
                    <textarea autoFocus ref={commentReff} type="text" className="h-full w-full outline-none p-1 resize-none text-pretty text-[13px] bg-stone-50" spellCheck='false' placeholder="Add Comment" />
                    <button onClick={handleGetCommet} className="opacity-65 hover:opacity-100 duration-[0.3s] text-sm">comment</button>
                  </div>
                </div>
              </div>
            </DialogTitle>
          </DialogPanel>
        </div>
      </Dialog>
    </>

  )
}

export default CommentButton


