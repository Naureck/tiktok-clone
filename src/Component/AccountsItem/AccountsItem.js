import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './accountsItem.module.scss'
import DivItemContent from '~/Component/DivItemContent'
import Image from '../Image'

function AccountsItem({ data }) {
    return (
        <DivItemContent to={`@${data.nickname}`}>
            <Image className={style.logo} src={data.avatar} alt={data.full_name} />
            <div className={style.accountItem}>
                <h4 className={style.name}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={style.check} icon={faCheckCircle} />}
                </h4>
                <p className={style.userName}>{data.nickname}</p>
            </div>
        </DivItemContent>
    )
}

AccountsItem.propTypes = {
    data: PropTypes.object
}

export default AccountsItem