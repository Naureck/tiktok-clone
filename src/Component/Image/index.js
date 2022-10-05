import classNames from 'classnames'
import { useState } from 'react'
import images from '~/Asset/img'
import style from './Image.module.scss'

export default function Image({ src, alt, className, fallback: customsFallback = images.noImage, ...props }) {

    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(customsFallback)
    }

    return (
        <img className={classNames(style.wrapper, className)} src={fallback || src} alt={alt} onError={handleError} {...props} />
    )
}
