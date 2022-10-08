import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './accountsItem.module.scss'
import DivItemContent from '~/Component/DivItemContent'
import Image from '../Image'

function AccountsItem() {
    return (
        <DivItemContent>
            <Image className={style.logo} src='' alt='Logo' />
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