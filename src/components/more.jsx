import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoMdMore } from 'react-icons/io'
import { RxCross2 } from "react-icons/rx";
import { IoBookmarkOutline } from "react-icons/io5";
import { useState } from 'react';
import { IoIosBookmark } from "react-icons/io";

function MoreButton({ handleDeleteValue, post }) {
  
  const [save, setSave] = useState('save')


  const Delete = () => {
    handleDeleteValue(post.id)
  }
  return (
    <Menu >
      <MenuButton as={'div'}>
        <IoMdMore title="more" className=" cursor-pointer" /> 
      </MenuButton>
      <MenuItems anchor="bottom" className={'bg-stone-100 rounded-md outline-none p-2'}>
        <MenuItem className="block h-[40px] w-full data-[focus]:bg-stone-200 py-2 px-3 text-[13px] rounded-md">
            <div onClick={Delete} className='flex justify-start gap-x-2 items-center cursor-pointer'>
            <RxCross2 className='text-[18px]' />
            <p>Remove</p>
            </div>
        </MenuItem>
        <MenuItem className="block h-[40px] w-full data-[focus]:bg-stone-200 py-2 px-3 text-[13px] rounded-md">
            <div className='flex justify-start gap-x-2 items-center cursor-pointer'>
            <IoBookmarkOutline className={`text-[18px] ${save === 'unsave' && 'hidden'}`}/>  
            <IoIosBookmark className={`text-[22px] ${save === 'save' && 'hidden'} `}/>
            <p>Save</p>
            </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}

export default MoreButton