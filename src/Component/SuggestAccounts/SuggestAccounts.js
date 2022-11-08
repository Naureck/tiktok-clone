import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import img from '~/Asset/img';
import AccountItem from './AccountItem';
import styles from './SuggestAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestAccounts({ title, titleShowAll }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('title-on-top')}>{title}</p>

         <AccountItem
            userName="penganzuto2004"
            nickName="Trần Thanh Ngân"
            src={img.avatar}
            alt="penganzuto2004"
            followerNumber="1.1M"
            LikeNumber="14.1M"
         />
         <AccountItem
            userName="nn.nganngan"
            nickName="Ngân Ngân Official ❤️🌹"
            src={img.avatar2}
            alt="nn.nganngan"
            followerNumber="543.2K"
            LikeNumber="4.3M"
         />
         <AccountItem
            userName="penganzuto2004"
            nickName="Trần Thanh Ngân"
            src={img.avatar}
            alt="penganzuto2004"
            followerNumber="1.1M"
            LikeNumber="14.1M"
         />
         <AccountItem
            userName="nn.nganngan"
            nickName="Ngân Ngân Official ❤️🌹"
            src={img.avatar2}
            alt="nn.nganngan"
            followerNumber="543.2K"
            LikeNumber="4.3M"
         />
         <AccountItem
            userName="nn.nganngan"
            nickName="Ngân Ngân Official ❤️🌹"
            src={img.avatar2}
            alt="nn.nganngan"
            followerNumber="543.2K"
            LikeNumber="4.3M"
         />
         <div className={cx('div-show-all')}>
            <p className={cx('text-show-all')}>{titleShowAll}</p>
         </div>
      </div>
   );
}

SuggestAccounts.propTypes = {
   title: PropTypes.string.isRequired,
   titleShowAll: PropTypes.string.isRequired,
};

export default SuggestAccounts;
