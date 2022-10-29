import PropTypes from 'prop-types'
import style from './Menu.module.scss'

function Menu({ children }) {
    return (
        <nav className={style.Wrapper}>
            {children}
        </nav>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu