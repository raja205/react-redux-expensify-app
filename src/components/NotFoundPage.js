import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        Invalid URL - <Link to='/'>Go Home</Link>
    </div>
)

export default NotFoundPage