import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import images from '~/Asset/img';
import style from './Image.module.scss';

export default function Image({ src, alt, className, fallback: customsFallback = images.noImage, loading, effect, ...props }) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customsFallback);
    };

    return (
        <LazyLoadImage
            className={classNames(style.wrapper, className)}
            src={fallback || src}
            alt={alt}
            onError={handleError}
            loading={loading}
            effect={effect}
            {...props}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
