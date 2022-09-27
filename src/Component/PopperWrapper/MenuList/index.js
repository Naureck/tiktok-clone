
import classNames from 'classnames/bind';
import DivItemContent from '~/Component/DivItemContent';
import PopperWrapper from '~/Component/PopperWrapper';
import style from './MenuList.module.scss'
import images from '~/Asset/img'
import MenuItems from './MenuItems';


const cx = classNames.bind(style)

function MenuList({ items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <DivItemContent key={index}>
                <MenuItems data={item} />
            </DivItemContent>
        ))
    }

    return (
        <div className={style.DivOptionContainer} >
            <img src={images.option} alt='More Option' />
            <PopperWrapper className={cx('popper-wrap')} menuMore>
                {renderItems()}
            </PopperWrapper>
        </div >
    )
}

export default MenuList