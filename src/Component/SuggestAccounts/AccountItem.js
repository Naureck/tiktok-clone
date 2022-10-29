import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../Image'
import { HtmlTooltip } from '../ToolTip'
import styles from './SuggestAccounts.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

function AccountItem({ title, src, nickName, followerNumber, LikeNumber }) {
    return (
        <HtmlTooltip
            className={cx('user-popper')}
            title={
                <>
                    <div className={cx('header-profile')}>
                        <Image className={cx('img-profile')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1666486800&x-signature=BVMVDDQcCKxIODVNTOcmufYtAMA%3D' alt='the anh' />
                        <Button className={cx('btn-profile')} primary>Follow</Button>
                    </div>
                    <Link className={cx('profile-name')}>
                        <span className={cx('profile-title')}>vtvcab.tintuc</span>
                        <FontAwesomeIcon className={cx('iconCheck')} icon="fa-solid fa-circle-check" />
                    </Link> <br />
                    <Link className={cx('profile-nickName')}>
                        VTVcab Tin Tuc
                    </Link>
                    <p className={cx('user-stat')}>
                        <span className={cx('span-user-stat-text')}>3M</span>
                        <span className={cx('span-user-stat-desc')}>Followers</span>
                        <span className={cx('span-user-stat-text')}>73.3M</span>
                        <span className={cx('span-user-stat-desc')}>Likes</span>
                    </p>
                </>
            }
        >
            <Link className={cx('accountItem')}>
                <div className={cx('account-img')}>
                    <Image className={cx('img')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1666486800&x-signature=BVMVDDQcCKxIODVNTOcmufYtAMA%3D' alt='account' />
                </div>
                <div className={cx('account-name')}>
                    <div className={cx('account-title')}>
                        <h4>account name</h4>
                        <FontAwesomeIcon className={cx('iconCheck')} icon="fa-solid fa-circle-check" />
                    </div>
                    <p className={cx('account-nickName')}>Nick Name</p>
                </div>
            </Link>
        </HtmlTooltip>

    )
}

AccountItem.propTypes = {
    title: PropTypes.string,
}

export default AccountItem
