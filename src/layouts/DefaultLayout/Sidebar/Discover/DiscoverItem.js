import PropTypes from 'prop-types'
import { HashTagIcon, MusicIcon } from '~/Asset/icons'
import Button from '~/Component/Button'
import style from './Discover.module.scss'


function DiscoverItem({ hashTag, music, title }) {
    return (
        <Button to={'/tag'} className={style['btn-hashTag']}>
            <div className={style['DivInnerHashTag']}>
                {music && <MusicIcon className={style['styleIcon']} />}
                {hashTag && <HashTagIcon />}
                <p className={style['PText']}>{title}</p>
            </div>
        </Button>
    )
}

DiscoverItem.propTypes = {
    hashTag: PropTypes.bool,
    music: PropTypes.bool,
}

export default DiscoverItem
