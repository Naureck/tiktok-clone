import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/Component/Button';
import style from './MenuList.module.scss';

const cx = classNames.bind(style);

function MenuItems({ data, onClick, className }) {
   const classes = cx('menu-items', className);

   return (
      <Button
         wrapMenu
         roleSwitch={data.roleSwitch}
         className={classes}
         leftIcon={data.icon}
         to={data.to}
         onClick={onClick}
      >
         {data.title}
      </Button>
   );
}

MenuItems.propTypes = {
   data: PropTypes.object,
   onClick: PropTypes.func,
};

export default MenuItems;
