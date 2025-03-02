import Link from 'next/link'
import "./linkCard.scss"

import React from 'react'

const Linkscard = ({ urlPath, title }) => {
    return (
        <Link href={urlPath} rel="noopener noreferrer" target='_blank' className='linkCard'>
            {title.length > 0 && <h2>{title}</h2>}
        </Link>

    )
}

export default Linkscard