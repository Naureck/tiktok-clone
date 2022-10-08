import classNames from 'classnames/bind'
import { useDetectClickOutside } from "react-detect-click-outside";

import style from './PopperWrapper.module.scss'

const cx = classNames.bind(style)

function PopperWrapper({ children, searchResult, menuMore, className, onHide, onClickOutSide, ...props }) {

    const classes = cx('DivContainerSug', className, {
        searchResult,
        menuMore,
    })

    const ref = useDetectClickOutside({ onTriggered: onClickOutSide })

    return (
        <div className={classes} onMouseLeave={onHide} ref={ref} {...props}>
            <div className={style.DivInnerSug}>
                {children}
            </div>
        </div>
    )
}

export default PopperWrapper