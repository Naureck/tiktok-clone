
import { Link } from 'react-router-dom'
import style from './Footer.module.scss'

function Footer() {
    return (
        <footer className={style['wrapper']}>
            <div className={style.LinkContainer}>
                <Link to='/about'>About</Link>
                <Link to='/newsroom'>Newsroom</Link>
                <Link to='/about/contact'>Contact</Link>
                <a target='blank' href='https://careers.tiktok.com/'>Careers</a>
                <a target='blank' href='https://www.bytedance.com/'>ByteDance</a>
            </div>
            <div className={style.LinkContainer}>
                <Link to='/'>TikTok for Good</Link>
                <Link to='/'>Advertise</Link>
                <Link to='/'>Developers</Link>
                <Link to='/'>Transparency</Link>
                <Link to='/'>TikTok Rewards</Link>
                <Link to='/'>TikTok Browse</Link>
                <Link to='/'>TikTok Embeds</Link>
            </div>
            <div className={style.LinkContainer}>
                <Link to='/'>Help</Link>
                <Link to='/'>Safety</Link>
                <Link to='/'>Terms</Link>
                <Link to='/'>Privacy</Link>
                <Link to='/'>Creator Portal</Link>
                <Link to='/'>Community Guidelines</Link>
            </div>
            <span className={style['SpanCopyRight']}>© 2022 TikTok</span>
        </footer>
    )
}

Footer.propTypes = {}

export default Footer
