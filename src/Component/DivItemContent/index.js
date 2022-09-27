import style from './DivItemContent.module.scss'

function DivItemContent({ children }) {
    return (
        <div className={style.wrapper}>{children}</div>
    )
}

export default DivItemContent