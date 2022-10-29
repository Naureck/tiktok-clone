import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import styles from './SuggestAccounts.module.scss'


const cx = classNames.bind(styles)

function SuggestAccounts({ title, titleShowAll }) {



    return (
        <div className={cx('wrapper')}>
            <p className={cx('title-on-top')}>{title}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />
            <div className={cx('div-show-all')}>
                <p className={cx('text-show-all')}>{titleShowAll}</p>
            </div>
        </div>
    )
}

SuggestAccounts.propTypes = {
    title: PropTypes.string.isRequired,
    titleShowAll: PropTypes.string.isRequired,
}

export default SuggestAccounts
