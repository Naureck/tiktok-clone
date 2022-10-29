import routes from '~/config/routes'
import Menu, { MenuItems } from './Menu'
import SuggestAccounts from '~/Component/SuggestAccounts'
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/Asset/icons'
import Button from '~/Component/Button'
import style from './Sidebar.module.scss'
import Discover from './Discover'
import Footer from './Footer'

function Sidebar() {

    const currentUser = true

    return (
        <div className={style.Wrapper}>
            <Menu>
                <MenuItems title='For You' to={routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItems title='Following' to={routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItems title='LIVE' to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            {/* Login Accounts */}
            {currentUser || <div className={style.DivWrapperContainer}>
                <p className={style.LoginText}>Log in to follow creators, like videos, and view comments.</p>
                <Button className={style.BtnLogin} outline>Log in</Button>
            </div>}

            {/* Suggest Accounts */}
            <SuggestAccounts title='Suggested accounts' titleShowAll='See all' />
            {currentUser ? <SuggestAccounts title='Following accounts' titleShowAll='See more' /> : null}

            {/* Discover */}
            <Discover />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Sidebar