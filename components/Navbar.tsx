import Link from 'next/link'
import React from 'react'
import { FaHammer, FaUserGraduate } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='flex rounded-full justify-around mt-4 p-2 w-full bg-slate-800 sm:max-w-md md:max-w-xl'>
      <Link href='/#section_skills'>
        <FaHammer size={30} />
      </Link>
      <Link href='/#section_education'>
        <FaUserGraduate size={30} />
      </Link>
    </div>
  )
}
