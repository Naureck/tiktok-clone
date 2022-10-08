import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AccountsItem from '~/Component/AccountsItem';
import DivItemContent from '~/Component/DivItemContent';
import PopperWrapper from '~/Component/PopperWrapper';
import { SearchIcon } from '~/Asset/icons';
import images from '~/Asset/img';
import style from './Search.module.scss';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true)

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleShowResults = (e) => {
        e.preventDefault();
        setShowResults(true);
    }

    const handleClickOutSide = () => {
        setShowResults(false)
    }

    return (
        <div className={style.DivSearchMachine}>
            <form className={style.FromElement}>
                <input
                    ref={inputRef}
                    className={style.InputElement}
                    type="search"
                    placeholder="Search accounts and videos"
                    autoComplete="off"
                    spellCheck={false}
                    value={searchValue}
                    onFocus={handleShowResults}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {!!searchValue && (
                    <button className={style.ClearBtn} onClick={handleClear}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
                    </button>
                )}

                {/* <FontAwesomeIcon className={style.Loading} icon="fa-solid fa-spinner" /> */}
                <span className={style.SpanSplice}></span>
                <button className={style.BtnSearch} type="submit">
                    <SearchIcon />
                </button>
            </form>

            {searchResults.length > 0 && showResults ? (
                <PopperWrapper searchResult onClickOutSide={handleClickOutSide}>
                    <DivItemContent>
                        <img className={style.IconInnerResult} src={images.search} alt="Search..." />
                        <a className={style.ResultText} href="/">
                            a
                        </a>
                    </DivItemContent>
                    <DivItemContent>
                        <img className={style.IconInnerResult} src={images.search} alt="Search..." />
                        <a className={style.ResultText} href="/">
                            a
                        </a>
                    </DivItemContent>
                    <DivItemContent>
                        <img className={style.IconInnerResult} src={images.search} alt="Search..." />
                        <a className={style.ResultText} href="/">
                            a
                        </a>
                    </DivItemContent>
                    <DivItemContent>
                        <img className={style.IconInnerResult} src={images.search} alt="Search..." />
                        <a className={style.ResultText} href="/">
                            a
                        </a>
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
            ) : null}
        </div>
    );
}
