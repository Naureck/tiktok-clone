import classNames from 'classnames/bind'
import style from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(style)

function Button({
    children,
    onClick,
    to,
    href,
    primary,
    outline,
    small,
    large,
    upload,
    disable,
    leftIcon,
    rightIcon,
    className,
    ...passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    if (disable) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    const classes = cx('wrapper', className, {
        primary,
        outline,
        small,
        large,
        upload,
        disable
    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button