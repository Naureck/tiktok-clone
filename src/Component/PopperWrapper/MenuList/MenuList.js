import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

import DivItemContent from '~/Component/DivItemContent';
import PopperWrapper from '~/Component/PopperWrapper';
import style from './MenuList.module.scss'
import MenuItems from './MenuItems';
import Header from './Header';


const delay = (time) => new Promise((res) => setTimeout(() => {
    res()
}, time))

const cx = classNames.bind(style)

function MenuList({ items = [], className, menuOption, arrowUser }) {
    const [toggleClass, setToggleClass] = useState(false)
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]


    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1))
        setToggleClass(false)
    }



    const handleHideBack = async () => {
        await delay(750)
        setHistory(prev => {
            return prev.slice(0, 1)
        })
        setToggleClass(false)
    }

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            const handleChangeItem = () => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children]);
                    setToggleClass(true)
                }
            }

            return (
                <DivItemContent key={index} separate={item.separate}>
                    <MenuItems className={toggleClass ? style['sub-menu-item'] : null} data={item} onClick={handleChangeItem} />
                </DivItemContent>
            )
        })
    }

    const classes = cx('wrapper', className, { menuOption })


    return (
        <>
            <PopperWrapper className={classes} menuMore onHide={handleHideBack}>
                <span className={cx('arrowUp', { arrowUser })}></span>
                {history.length > 1 && <Header title='Language' onBack={handleBackMenu} />}
                <div className={style.MenuBody}>
                    {renderItems()}
                </div>
            </PopperWrapper>
        </>
    )
}

MenuList.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
    menuOption: PropTypes.bool,
    arrowUser: PropTypes.bool,
}

export default MenuList