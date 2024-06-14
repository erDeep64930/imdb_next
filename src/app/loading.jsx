import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center">
        <Image src="/public/spinner.svg" alt="" className="h-96" width="96" height="96"/>
    </div>
  )
}

export default loading