
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import AccountsItem from '~/Component/AccountsItem';
import DivItemContent from '~/Component/DivItemContent';
import PopperWrapper from '~/Component/PopperWrapper';
import MenuList from '~/Component/PopperWrapper/MenuList';
import Button from '~/Component/Button';
import "~/Component/PopperWrapper/MenuList/MenuList.module.scss"
import Image from '~/Component/Image';
import style from './header.module.scss'
import { InboxIcon, MessageIcon } from '~/Asset/icons'
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
                }
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

    const currentUser = true

    return (
        <header className={style.DivContainerHeader}>
            <div className={style.DivWrapperHeader}>

                {/* Logo */}
                <Link to={{ pathname: '/' }} className={style.DivLogoLink}>
                    <img width='118' height='42' alt='TikTok' src={images.logo} />
                </Link>

                {/* Search */}
                <div className={style.DivSearchMachine}>
                    <form className={style.FromElement}>
                        <input className={style.InputElement} type='search' placeholder='Search accounts and videos' autoComplete='off' />
                        <FontAwesomeIcon className={style.ClearBtn} icon="fa-solid fa-circle-xmark" />
                        <FontAwesomeIcon className={style.Loading} icon="fa-solid fa-spinner" />
                        <span className={style.SpanSplice}></span>
                        <button className={style.BtnSearch} type='submit'>
                            <FontAwesomeIcon icon="fas fa-search" />
                        </button>
                    </form>

                    <PopperWrapper searchResult>
                        <DivItemContent>
                            <img className={style.IconInnerResult} src={images.search} alt='Search...' />
                            <a className={style.ResultText} href='/'>a</a>
                        </DivItemContent>
                        <DivItemContent>
                            <img className={style.IconInnerResult} src={images.search} alt='Search...' />
                            <a className={style.ResultText} href='/'>a</a>
                        </DivItemContent>
                        <DivItemContent>
                            <img className={style.IconInnerResult} src={images.search} alt='Search...' />
                            <a className={style.ResultText} href='/'>a</a>
                        </DivItemContent>
                        <DivItemContent>
                            <img className={style.IconInnerResult} src={images.search} alt='Search...' />
                            <a className={style.ResultText} href='/'>a</a>
                        </DivItemContent>
                        <div className={style.SearchTitle}>Accounts</div>
                        <AccountsItem />
                        <AccountsItem />
                        <AccountsItem />
                        <AccountsItem />
                        <DivItemContent>
                            <span>View all results for "hoa"</span>
                        </DivItemContent>
                    </PopperWrapper>
                </div>

                {/* Action */}
                <div className={style.DivUploadAndUser}>
                    <Button upload to='/upload' leftIcon={<FontAwesomeIcon icon="fas fa-plus" />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content='Message'>
                                <div className={style.DivMessageContainer}>
                                    <Button to='/message' className={style.MessIcon}>
                                        <MessageIcon />
                                    </Button>
                                </div>
                            </Tippy>

                            <Tippy content='Inbox'>
                                <div className={style.DivInboxContainer}>
                                    <Button className={style.IbIcon}>
                                        <InboxIcon />
                                    </Button>
                                </div>
                            </Tippy>
                        </>

                    ) : (
                        <>
                            <Button primary to='/login'>Log in</Button>

                        </>
                    )
                    }
                    <div className={style.DivOptionContainer} >

                        {currentUser ? (
                            <div className={style.DivProfileContainer}>
                                <Image className={style['avatar-profile']} src={images.avatar} alt='PhuongNguyen' />
                                <MenuList className={style['popper-wrap']} items={USER_MENU} />
                            </div>
                        ) : (
                            <div className={style.DivProfileContainer}>
                                <Image className={style['icon-more']} src={images.option} alt='More Option' />
                                <MenuList className={style['popper-wrap']} items={MENU_ITEMS} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header