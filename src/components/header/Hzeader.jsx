import React from 'react'
function Hzeader() {
  return (
    <>
        <nav className='flex justify-around items-center pt-[30px] pb-[28px]'>
            <div>
                <p className='text-[#2764D6] text-[26px] font-[800]'>LINDEV</p>
            </div>
            <div>
                <ul className='flex justify-between items-center space-x-[20px]'>
                    <li><a href="#">კურსები</a></li>
                    <li><a href="#">ჩვენ შესახებ</a></li>
                    <li><a href="#">ბლოგი</a></li>
                    <li><a href="#">სიახლეები</a></li>
                    <li><a href="#">კონტაქტკი</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Hzeader;