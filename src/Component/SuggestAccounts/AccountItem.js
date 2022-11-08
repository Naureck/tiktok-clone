import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Image';
import { HtmlTooltip } from '../ToolTip';
import Button from '../Button';
import styles from './SuggestAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ userName, nickName, src, alt, followerNumber, LikeNumber, checked }) {
   return (
      <HtmlTooltip
         className={cx('user-popper')}
         title={
            <>
               <div className={cx('header-profile')}>
                  <Image className={cx('img-profile')} src={src} alt={alt} />
                  <Button className={cx('btn-profile')} primary btnNormal>
                     Follow
                  </Button>
               </div>
               <Link to={`@${userName}`} className={cx('profile-name')}>
                  <span className={cx('profile-title')}>{userName}</span>
                  {checked && <FontAwesomeIcon className={cx('iconCheck')} icon="fa-solid fa-circle-check" />}
               </Link>
               <br />
               <Link className={cx('profile-nickName')}>{nickName}</Link>
               <p className={cx('user-stat')}>
                  <span className={cx('span-user-stat-text')}>{followerNumber}</span>
                  <span className={cx('span-user-stat-desc')}>Followers</span>
                  <span className={cx('span-user-stat-text')}>{LikeNumber}</span>
                  <span className={cx('span-user-stat-desc')}>Likes</span>
               </p>
            </>
         }
      >
         <Link to={`@${userName}`} className={cx('accountItem')}>
            <div className={cx('account-img')}>
               <Image className={cx('img')} src={src} alt={alt} />
            </div>
            <div className={cx('account-name')}>
               <div className={cx('account-title')}>
                  <h4>{userName}</h4>
                  {checked && <FontAwesomeIcon className={cx('iconCheck')} icon="fa-solid fa-circle-check" />}
               </div>
               <p className={cx('account-nickName')}>{nickName}</p>
            </div>
         </Link>
      </HtmlTooltip>
   );
}

AccountItem.propTypes = {
   title: PropTypes.string,
};

export default AccountItem;
