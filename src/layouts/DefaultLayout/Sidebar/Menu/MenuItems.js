import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import style from './Menu.module.scss'

const cx = classNames.bind(style)

function MenuItems({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('MenuItems', { active: nav.isActive })} to={to} end>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('activeIcon')}>{activeIcon}</span>
            <span className={style.TitleItem}>{title}</span>
        </NavLink>
    )
}

MenuItems.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}

export default MenuItems