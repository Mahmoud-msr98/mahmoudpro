import React from 'react'
import Logo from "../../Image/Logo.png"

const Header = () => {
  
  return (
    <header  >
      <div className=' flex justify-around items-center gap-10 flex-wrap pt-[25px] pb-[30px] bg-[#F2F4F6] ' >
      <a href='/'>
        <img src= {Logo}/>
      </a>
      <nav >
          <ul className='flex items-center gap-5 text-[#161D6F]   ' >
            <li className='text-[22px] hover:text-[23px] na'><a href='/'>العقارات</a></li>
            <li className='text-[22px] hover:text-[23px] na'><a href='/'>حول</a></li>
            <li className='text-[22px] hover:text-[23px] na'><a href='/'>برناج الجنسية لدى اي استفسار</a></li>
            <li className='text-[22px] hover:text-[23px] na'><a href='/'>البيع</a></li>
            <li className='text-[22px] hover:text-[23px] na'><a href='/'>المزيد</a></li>
          </ul>
      </nav>
      <div className=' flex space-x-2  ' >
        
        <a className='  rounded-[5px]  w-[143px] h-[33px] border-solid border-[1px] text-center border-[#161D6F] pt-[4px] hover:bg-[#1EE3CF] hover:text-[#fff] transition-[1s] hover:border-none '>تسجيل الخروج</a>
        <a href=""></a>
        <a className=' text-[#1EE3CF] rounded-[5px] text-center pt-[5px] bg-[#161D6F]  w-[65px] h-[33px] ml-[10px]  hover:bg-[#1EE3CF] hover:text-[#fff] transition-[2s] '> أبدا</a>
          
        </div>
      </div>
    </header>
    
    
  )
}

export default Header