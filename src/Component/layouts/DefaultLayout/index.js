
import style from './DefaultLayout.module.scss'
import Header from "./Header"
import Sidebar from "./Sidebar"

function DefaultLayout({ children }) {
    return (
        <div className={style.DivWrapper}>
            <Header />
            <div className={style.container}>
                <Sidebar />
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout