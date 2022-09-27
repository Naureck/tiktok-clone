import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './accountsItem.module.scss'
import DivItemContent from '~/Component/DivItemContent'

function AccountsItem() {
    return (
        <DivItemContent>
            <img className={style.logo} src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fbc76ba07c81b5186bffb82315735b70~c5_300x300.webp?x-expires=1664074800&x-signature=qTQKpH6%2FjTm82K5MSN75ufrhnU4%3D' alt='Logo' />
            <div className={style.accountItem}>
                <h4 className={style.name}>
                    <span>HoangThuyLinh</span>
                    <FontAwesomeIcon className={style.check} icon={faCheckCircle} />
                </h4>
                <p className={style.userName}>Hoang Thuy Linh</p>
            </div>
        </DivItemContent>
    )
}

export default AccountsItem