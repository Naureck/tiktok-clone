import DiscoverItem from './DiscoverItem'
import style from './Discover.module.scss'

function Discover() {
    return (
        <div className={style.DivDiscoverContainer}>
            <p className={style.TextInnerDiscover}>Discover</p>

            <div className={style.DiscoverList}>
                <DiscoverItem hashTag title='sansangthaydoi' />
                <DiscoverItem hashTag title='mackedoi' />
                <DiscoverItem hashTag title='sansangthaydoi' />
                <DiscoverItem hashTag title='sansangthaydoi' />
                <DiscoverItem music title='Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n' />
                <DiscoverItem music title='Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng' />
                <DiscoverItem music title='Tình Đã Đầy Một Tim - Huyền Tâm Môn' />

            </div>
        </div>
    )
}


export default Discover
