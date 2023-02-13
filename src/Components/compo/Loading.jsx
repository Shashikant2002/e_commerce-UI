import React from 'react';
import { Audio } from 'react-loader-spinner';
import '../../Style/loading.css'

const Loading = () => {
    return (
        <div className='loading flex justifyCenter alignCenter'>
            <span>
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="#0037ff"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </span>
        </div>
    )
}

export default Loading