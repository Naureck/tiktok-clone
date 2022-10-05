import classNames from 'classnames/bind'
import style from './DivItemContent.module.scss'

const cx = classNames.bind(style)

function DivItemContent({ children, separate }) {

    const classes = cx('wrapper', {
        separate
    })


    return (
        <div className={classes}>{children}</div>
    )
}

export default DivItemContent