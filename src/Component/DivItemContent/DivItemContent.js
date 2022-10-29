import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import style from './DivItemContent.module.scss'

const cx = classNames.bind(style)

function DivItemContent({ children, separate, to, onClick, ...passProps }) {

    const classes = cx('wrapper', {
        separate
    })

    let DivComponent = 'div'

    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to
        DivComponent = Link
    }


    return (
        <DivComponent className={classes} {...props}>{children}</DivComponent>
    )
}

DivItemContent.propTypes = {
    children: PropTypes.node.isRequired,
    separate: PropTypes.bool,
    to: PropTypes.string,
    onClick: PropTypes.func,
}

export default DivItemContent