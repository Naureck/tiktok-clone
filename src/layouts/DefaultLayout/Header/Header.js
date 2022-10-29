
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes'
import MenuList from '~/Component/PopperWrapper/MenuList';
import Button from '~/Component/Button';
import "~/Component/PopperWrapper/MenuList/MenuList.module.scss"
import Image from '~/Component/Image';
import { InboxIcon, MessageIcon } from '~/Asset/icons'
import Search from '../Search'
import style from './header.module.scss'
import images from '~/Asset/img'



const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-globe" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }, {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon="fa-regular fa-circle-question" />,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: < FontAwesomeIcon icon="fa-regular fa-keyboard" />,
        title: 'Keyboard Shortcuts',
    }
]

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon="fa-regular fa-user" />,
        title: 'View Profiles',
        to: '/profile'
    },
    {
        icon: <img src={images.coin} alt='coin' />,
        title: 'Get coins',
        to: '/getCoin'
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-video" />,
        title: 'LIVE Studio',
        to: '/studio'
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-gear" />,
        title: 'Setting',
        to: '/setting'
    },
    ...MENU_ITEMS,
    {
        icon: < FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    }

]

function Header() {

    const currentUser = false

    return (
        <header className={style.DivContainerHeader}>
            <div className={style.DivWrapperHeader}>

                {/* Logo */}
                <Link to={{ pathname: routesConfig.home }} className={style.DivLogoLink}>
                    <img width='118' height='42' alt='TikTok' src={images.logo} />
                </Link>

                {/* Search */}
                <Search />


                {/* Action */}
                <div className={style.DivUploadAndUser}>
                    <Button upload to={routesConfig.upload} leftIcon={<FontAwesomeIcon icon="fas fa-plus" />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content='Message'>
                                <div className={style.DivMessageContainer}>
                                    <Button to={routesConfig.message} className={style.MessIcon}>
                                        <MessageIcon />
                                    </Button>
                                </div>
                            </Tippy>

                            <Tippy content='Inbox'>
                                <div className={style.DivInboxContainer}>
                                    <Button className={style.IbIcon}>
                                        <InboxIcon />
                                    </Button>
                                    <div className={style.CircleNoticedInbox}>
                                        <span>24</span>
                                    </div>
                                </div>
                            </Tippy>
                        </>

                    ) : (
                        <>
                            <Button primary>Log in</Button>

                        </>
                    )
                    }
                    <div className={style.DivOptionContainer} >

                        {currentUser ? (
                            <div className={style.DivProfileContainer}>
                                <Image className={style['avatar-profile']} src={images.avatar} alt='PhuongNguyen' />
                                <MenuList arrowUser className={style['popper-wrap']} items={USER_MENU} />
                            </div>
                        ) : (
                            <div className={style.DivProfileContainer}>
                                <Image className={style['icon-more']} src={images.option} alt='More Option' />
                                <MenuList menuOption className={style['popper-wrap']} items={MENU_ITEMS} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header