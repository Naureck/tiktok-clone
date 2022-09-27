
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import AccountsItem from '~/Component/AccountsItem';
import DivItemContent from '~/Component/DivItemContent';
import PopperWrapper from '~/Component/PopperWrapper';
import MenuList from '~/Component/PopperWrapper/MenuList';
import Button from '~/Component/Button';
import style from './header.module.scss'
import images from '~/Asset/img'

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-globe" />,
        title: 'English',
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

function Header() {

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
                    <Button upload to='/upload'>
                        <FontAwesomeIcon icon="fas fa-plus" />
                        Upload
                    </Button>
                    <Button primary to='/login'>Log in</Button>

                    {/* <Tippy content='Message'>
                        <div className={style.DivMessageContainer}>
                            <Link to={{ pathname: '/message' }}>
                                <FontAwesomeIcon icon="far fa-paper-plane" />
                            </Link>
                        </div>
                    </Tippy>

                    <Tippy content='Inbox'>
                        <div className={style.DivInboxContainer}>
                            <FontAwesomeIcon icon="fas fa-inbox" />
                        </div>
                    </Tippy>
                    <div className={style.DivProfileContainer}>
                        <FontAwesomeIcon icon="fas fa-user" />
                    </div> */}


                    <MenuList items={MENU_ITEMS} />
                </div>
            </div>
        </header>
    )
}

export default Header