import classNames from "classnames/bind"
import Button from "~/Component/Button"
import style from './MenuList.module.scss'

const cx = classNames.bind(style)

function MenuItems({ data }) {
    return (
        <Button className={cx('menu-items')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    )
}

export default MenuItems