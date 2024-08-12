import React from 'react'

const HomeConntent = () => {
  return (
    <div className='w-full flex mt-8 space-x-4'>

    {/* left */}
    <div className='w-[35%] h-[200px] flex justify-center items-center'>
      <img src='https://sbr-technologies.com/wp-content/uploads/2021/07/Mern-Stack-Developer.png' alt='' className='h-full w-full object-cover' />
      </div>
      {/* right */}
      <div className='flex flex-col w-[65%] '>
       <h1 className=' text-xl font-bold md:nb-2 mb-1 md:text-2xl'>
        Mern is a fullstack framework to create Websites
       </h1>
       <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
      <p>JustAjit33</p>
      <div className='flex space-x-2 text-sm'>
      <p>13/08/2024</p>
      <p>14:41</p>
      </div>
       </div>
       <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sint, fugit molestias enim nobis dicta voluptas ea exercitationem vitae sit id harum, a laborum earum eius molestiae velit facere odio.</p>
      </div>

    </div>
  )
}

export default HomeConntent
