
import style from './DefaultLayout.module.scss'
import Header from "./Header"
import Sidebar from "./Sidebar"

function DefaultLayout({ children }) {
    return (
        <div className={style.DivWrapper}>
            <Header />
            <div className={style.container}>
                <div style={{ position: 'relative', display: 'block' }}>
                    <Sidebar />
                </div>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout