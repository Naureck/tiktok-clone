import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './MenuList.module.scss'

const cx = classNames.bind(style)

function Header({ title, onBack }) {
    return (
        <div className={cx('header-wrapper')}>
            <button className={cx('header-back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    )
}

export default Header
