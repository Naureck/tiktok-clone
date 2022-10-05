import classNames from "classnames/bind"
import Button from "~/Component/Button"
import style from './MenuList.module.scss'

const cx = classNames.bind(style)

function MenuItems({ data, onClick }) {

    const classes = cx('menu-items')

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    )
}

export default MenuItems