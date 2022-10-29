import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as apiServices from '~/services/searchServices'
import AccountsItem from '~/Component/AccountsItem';
import DivItemContent from '~/Component/DivItemContent';
import PopperWrapper from '~/Component/PopperWrapper';
import { SearchIcon } from '~/Asset/icons';
import { useDebounce } from '~/hooks';
import images from '~/Asset/img';
import style from './Search.module.scss';
import Image from '~/Component/Image';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true)
    const [loading, setLoading] = useState(false)


    const inputRef = useRef()
    const debounced = useDebounce(searchValue, 700)

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([])
            return;
        }

        const fetchAPI = async () => {
            setLoading(true)

            const result = await apiServices.search(debounced)
            setSearchResults(result)

            setLoading(false)
        }

        fetchAPI();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleShowResults = (e) => {
        e.stopPropagation();
        setShowResults(true);
    }

    const handleClickOutSide = () => {
        setShowResults(false);
    }

    const handleInputChange = e => {
        const searchValues = e.target.value
        if (!searchValues.startsWith(' ')) {
            setSearchValue(searchValues)
        }
    };

    const handlePreventParent = (e) => {
        e.preventDefault()
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
                    onClick={handleShowResults}
                    onChange={handleInputChange}
                />
                {!!searchValue && !loading && (
                    <button className={style.ClearBtn} onClick={handleClear}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={style.Loading} icon="fa-solid fa-spinner" />}
                <span className={style.SpanSplice}></span>
                <button className={style.BtnSearch} type="submit" onMouseDown={handlePreventParent}>
                    <SearchIcon />
                </button>
            </form>

            {searchResults.length > 0 && showResults ? (
                <PopperWrapper onClickOutSide={handleClickOutSide}>
                    <DivItemContent>
                        <Image className={style.IconInnerResult} src={images.search} alt="Search..." />
                        <a className={style.ResultText} href="/">
                            Nguyen
                        </a>
                    </DivItemContent>
                    <div className={style.SearchTitle}>Accounts</div>
                    {searchResults.map(result => (
                        <AccountsItem key={result.id} data={result} />
                    ))
                    }
                    <DivItemContent>
                        <span>View all results for "hoa"</span>
                    </DivItemContent>
                </PopperWrapper>
            ) : null}
        </div>
    );
}
