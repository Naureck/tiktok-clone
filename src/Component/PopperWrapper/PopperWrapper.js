import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { useDetectClickOutside } from "react-detect-click-outside";

import style from './PopperWrapper.module.scss'

const cx = classNames.bind(style)

function PopperWrapper({ children, searchResult, menuMore, className, onHide, onClickOutSide, menuOption, ...props }) {

    const classes = cx('DivContainerSug', className, {
        searchResult,
        menuMore,
        menuOption,
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

PopperWrapper.propTypes = {
    children: PropTypes.node,
    searchResult: PropTypes.bool,
    menuMore: PropTypes.bool,
    menuOption: PropTypes.bool,
    className: PropTypes.string,
    onHide: PropTypes.func,
    onClickOutSide: PropTypes.func,
}

export default PopperWrapper