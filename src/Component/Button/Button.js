import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Button({
   children,
   onClick,
   to,
   href,
   primary,
   outline,
   small,
   large,
   upload,
   disable,
   leftIcon,
   rightIcon,
   roleSwitch,
   btnNormal,
   wrapMenu,
   className,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   if (disable) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }

   const classes = cx('wrapper', className, {
      primary,
      outline,
      small,
      large,
      upload,
      disable,
   });
   return (
      <Comp className={classes} {...props}>
         <div className={cx('container-left', { btnNormal, wrapMenu })}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
         </div>

         {roleSwitch && (
            <button className={cx('btn-switch')}>
               <div className={cx('switch-wrapper')}>
                  <span className={cx('circle-switch')}></span>
               </div>
            </button>
         )}
      </Comp>
   );
}

Button.propTypes = {
   children: PropTypes.node.isRequired,
   to: PropTypes.string,
   href: PropTypes.string,
   onClick: PropTypes.func,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   upload: PropTypes.bool,
   disable: PropTypes.bool,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   className: PropTypes.string,
};

export default Button;
