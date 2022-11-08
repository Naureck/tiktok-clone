import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmojiFlags, Favorite, Sms } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { HtmlTooltip } from '../ToolTip';
import Button from '~/Component/Button';
import { MusicIcon, MuteIcon, VolumeIcon } from '~/Asset/icons';
import Image from '~/Component/Image';
import styles from './VideoContent.module.scss';

function VideoContent({
   userName,
   nickName,
   userBio,
   desc,
   musicName,
   src,
   urlVideo,
   alt,
   numFollows,
   numLikes,
   videoLikes,
   videoCmt,
   videoShare,
   checked,
}) {
   const [playing, setPlaying] = useState(false);
   const [videoTime, setVideoTime] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);
   const [progress, setProgress] = useState(0);
   const [sound, setSound] = useState(true);
   const videoRef = useRef(null);

   useEffect(() => {
      window.setInterval(function () {
         setCurrentTime(videoRef.current?.currentTime);
         setProgress((videoRef.current?.currentTime / videoTime) * 1);
      }, 1000);
   }, [videoTime]);

   const videoHandler = (control) => {
      if (control === 'play') {
         videoRef.current.play();
         setPlaying(true);
         var vid = document.getElementById('video1');
         setVideoTime(vid.duration);
      } else if (control === 'pause') {
         videoRef.current.pause();
         setPlaying(false);
      }
   };
   const handleMuted = (control) => {
      if (control === 'muted') {
         setSound(false);
      } else if (control === 'amplify') {
         setSound(true);
      }
   };
   const videoTimeMinute = Math.floor(videoTime / 60);

   return (
      <div className={styles['wrapper']}>
         <HtmlTooltip
            className={styles['user-popper']}
            title={
               <>
                  <div className={styles['header-profile']}>
                     <Image className={styles['img-profile']} src={src} alt={alt} />
                     <Button className={styles['btn-profile']} primary btnNormal>
                        Follow
                     </Button>
                  </div>
                  <Link className={styles['profile-name']}>
                     <span className={styles['profile-title']}>{userName}</span>
                     {checked && <FontAwesomeIcon className={styles['iconCheck']} icon="fa-solid fa-circle-check" />}
                  </Link>
                  <br />
                  <Link className={styles['profile-nickName']}>{nickName}</Link>
                  <p className={styles['user-stat']}>
                     <span className={styles['span-user-stat-text']}>{numFollows}</span>
                     <span className={styles['span-user-stat-desc']}>Followers</span>
                     <span className={styles['span-user-stat-text']}>{numLikes}</span>
                     <span className={styles['span-user-stat-desc']}>Likes</span>
                  </p>
                  <p className={styles['user-bio']}>{userBio}</p>
               </>
            }
         >
            <Link to="/@">
               <div className={styles['container-img']}>
                  <Image loading="lazy" effect="blur" className={styles['avatar']} src={src} alt={alt} />
               </div>
            </Link>
         </HtmlTooltip>
         <div className={styles['container-content']}>
            <div className={styles['info-user']}>
               <div className={styles['author-name-container']}>
                  <Link className={styles['author-name']} to="/@">
                     <h3 className={styles['user-name']}>{userName}</h3>
                     <h4 className={styles['nick-name']}>{nickName}</h4>
                  </Link>
               </div>
               <Button className={styles['btn-follow']} outline small btnNormal>
                  Follow
               </Button>
               <div className={styles['video-desc']}>
                  <span>{desc}</span>
               </div>
               <h4 className={styles['video-music']}>
                  <Link className={styles['video-link']} to="/music">
                     <MusicIcon className={styles['icon-music']} />
                     {musicName}
                  </Link>
               </h4>
            </div>
            {/* Video Content */}
            <div className={styles['content-video']}>
               <div className={styles['container-video']}>
                  <div className={styles['video-player-container']}>
                     <div className={styles['video-player-inner']}>
                        <Image
                           className={styles['img-poster']}
                           loading="lazy"
                           effect="blur"
                           src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/27d1434ffc5f457cbd6aafa75d45e202~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1666771200&x-signature=7aSseMoKLpNX85MlqXh7b0xLQuY%3D"
                           alt="Lac quan len"
                        />

                        <div className={styles['main-video-wrapper']}>
                           <div className={styles['main-video-inner']}>
                              <video
                                 id="video1"
                                 ref={videoRef}
                                 muted={sound}
                                 className={styles['video']}
                                 src={urlVideo}
                                 tabIndex="2"
                                 type="video/mp4"
                              />
                           </div>
                        </div>
                     </div>
                     {/* Play control */}
                     <div className={styles['play-action-video']}>
                        {playing ? (
                           <span onClick={() => videoHandler('pause')}>
                              <FontAwesomeIcon icon="fa-solid fa-pause" />
                           </span>
                        ) : (
                           <span onClick={() => videoHandler('play')}>
                              <FontAwesomeIcon icon="fa-solid fa-play" />
                           </span>
                        )}
                     </div>
                     {/* Volume control */}
                     <div className={styles['volume-action-video']}>
                        <div className={styles['volume-control-container']}></div>
                        {sound ? (
                           <span onClick={() => handleMuted('muted')} className={styles['volume-icon-mute']}>
                              <MuteIcon />
                           </span>
                        ) : (
                           <span onClick={() => handleMuted('amplify')} className={styles['volume-icon-sound']}>
                              <VolumeIcon />
                           </span>
                        )}
                     </div>
                     {/* Progress bar time control */}
                     {videoTimeMinute !== 0 ? (
                        <div className={styles['time-control-container']}>
                           <div className={styles['time-progressBar-Container']}>
                              <div className={styles['time-progressBar-bg']}></div>
                              <div
                                 style={{ left: `calc(${progress}% * 100)` }}
                                 className={styles['time-progressCircle']}
                              ></div>
                              <div
                                 style={{ transform: `scaleX(${progress})` }}
                                 className={styles['time-progressBar']}
                              ></div>
                           </div>
                           <div className={styles['control-time']}>
                              {Math.floor(currentTime / 60) + ':' + ('0' + Math.floor(currentTime % 60)).slice(-2)}/
                              {videoTimeMinute + ':' + ('0' + Math.floor(videoTime % 60)).slice(-2)}
                           </div>
                        </div>
                     ) : null}
                     {/* Report Button */}
                     <p className={styles['report-text']}>
                        <EmojiFlags className={styles['iconFlag']} />
                        Report
                     </p>
                  </div>
               </div>
               {/* Action button */}
               <div className={styles['container-action']}>
                  <button className={styles['btn-action-item']}>
                     <span className={styles['span-icon-wrapper']}>
                        <Favorite className={styles['icon-action']} />
                     </span>
                     <strong className={styles['strong-text']}>{videoLikes}</strong>
                  </button>
                  <button className={styles['btn-action-item']}>
                     <span className={styles['span-icon-wrapper']}>
                        <Sms className={styles['icon-action']} />
                     </span>
                     <strong className={styles['strong-text']}>{videoCmt}</strong>
                  </button>
                  <button className={styles['btn-action-item']}>
                     <span className={styles['span-icon-wrapper']}>
                        <FontAwesomeIcon icon="fa-solid fa-share" className={styles['icon-action']} />
                     </span>
                     <strong className={styles['strong-text']}>{videoShare}</strong>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

VideoContent.propTypes = {
   userName: PropTypes.string.isRequired,
   nickName: PropTypes.string.isRequired,
   desc: PropTypes.string.isRequired,
   musicName: PropTypes.string.isRequired,
   src: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   numFollows: PropTypes.string.isRequired,
   numLikes: PropTypes.string.isRequired,
   videoLikes: PropTypes.string.isRequired,
   videoCmt: PropTypes.string.isRequired,
   videoShare: PropTypes.string.isRequired,
   checked: PropTypes.bool,
};

export default VideoContent;
