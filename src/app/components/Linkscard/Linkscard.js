import Image from 'next/image'
import Link from 'next/link'
import "./linkCard.scss"

import React from 'react'

const Linkscard = ({ urlPath, imageSrc }) => {
    return (
        <Link href={urlPath} rel="noopener noreferrer" target='_blank' className='linkCard'>
            <Image
                src={imageSrc}
                alt='logo'
                className='logo'
                
            />
        </Link>

    )
}

export default Linkscard