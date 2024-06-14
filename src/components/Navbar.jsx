import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4'>
        <NavbarItem title="Trending" param="FetchTrending" />
        <NavbarItem title="Top Rated" param="FetchTopRated" />
    </div>
  )
}

export default Navbar