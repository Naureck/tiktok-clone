import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './header.module.scss'
import images from '~/Asset/img'

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
                    <div className={style.DivContainerSug}>
                        <div className={style.DivInnerSug}>
                            <ul>
                                <li><img src={images.search} alt='Search...' /><a href='/'>a</a></li>
                                <li><img src={images.search} alt='Search...' /><a href='/'>a</a></li>
                                <li><img src={images.search} alt='Search...' /><a href='/'>a</a></li>
                                <li><img src={images.search} alt='Search...' /><a href='/'>a</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Action */}
                <div className={style.DivUploadAndUser}>
                    <div className={style.DivUploadContainer}>
                        <Link to={{ pathname: '/upload' }}>
                            <FontAwesomeIcon icon="fas fa-plus" />
                            <span>Upload</span>
                        </Link>
                    </div>
                    <div className={style.DivLoginContainer}>
                        <Link to={{ pathname: '/login' }}>
                            <span>Login</span>
                        </Link>
                    </div>
                    <div className={style.DivOptionContainer}>
                        <img src={images.option} alt='More Option' />
                    </div>

                    {/* <div className={style.DivMessageContainer}>
                        <Link to={{ pathname: '/message' }}>
                            <FontAwesomeIcon icon="far fa-paper-plane" />
                        </Link>
                    </div>
                    <div className={style.DivInboxContainer}>
                        <FontAwesomeIcon icon="fas fa-inbox" />
                    </div>
                    <div className={style.DivProfileContainer}>
                        <FontAwesomeIcon icon="fas fa-user" />
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Header