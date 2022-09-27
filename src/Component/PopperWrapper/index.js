import classNames from 'classnames/bind'
import style from './PopperWrapper.module.scss'

const cx = classNames.bind(style)

function PopperWrapper({ children, searchResult, menuMore, className }) {

    const classes = cx('DivContainerSug', className, {
        searchResult,
        menuMore

    })

    return (
        <div className={classes}>
            <div className={style.DivInnerSug}>
                {children}
            </div>
        </div>
    )
}

export default PopperWrapper