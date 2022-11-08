import React from 'react';
import { Zoom, useScrollTrigger } from '@mui/material';

import videoTikTok1 from '~/Asset/videos/video-tiktok-1.mp4';
import videoTikTok from '~/Asset/videos/video-tiktok-2.mp4';
import { ArrowToTopIcon } from '~/Asset/icons';
import img from '~/Asset/img';
import VideoContent from '~/Component/VideoContent';
import styles from './Home.module.scss';

function Home() {
   const trigger = useScrollTrigger();
   const handleScrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <div>
         <div className={styles['wrapper']}>
            {/* Video Content */}
            <div className={styles['content-wrapper']}>
               <VideoContent
                  src={img.avatar}
                  alt="penganzuto"
                  urlVideo={videoTikTok}
                  userName="penganzuto2004"
                  nickName="Trần Thanh Ngân"
                  desc="Lạc quan lên em!!"
                  musicName="Vô Tư - Trần Thanh Hà"
                  userBio="Giảm cân ib fb tư vấn link FB mình dùng link 👇🏻"
                  numFollows="1.1M"
                  numLikes="14.1M"
                  videoLikes="1.1M"
                  videoCmt="1.1M"
                  videoShare="2586"
               />
               <VideoContent
                  src={img.avatar}
                  alt="penganzuto"
                  urlVideo={videoTikTok1}
                  userName="penganzuto2004"
                  nickName="Trần Thanh Ngân"
                  desc="Lạc quan lên em!!"
                  musicName="Vô Tư - Trần Thanh Hà"
                  userBio="Giảm cân ib fb tư vấn link FB mình dùng link 👇🏻"
                  numFollows="1.1M"
                  numLikes="14.1M"
                  videoLikes="1.1M"
                  videoCmt="1.1M"
                  videoShare="2586"
               />
            </div>
            <div className={styles['BottomContainer']}>
               <div className={styles['GuiInteractContainer']}></div>
               <div className={styles['PromotionContainer']}>
                  <button className={styles['btnGetApp']}>Get App</button>
               </div>
               <Zoom in={trigger}>
                  <button onClick={handleScrollToTop} className={styles['btnScrollOnTop']}>
                     <ArrowToTopIcon />
                  </button>
               </Zoom>
            </div>
         </div>
      </div>
   );
}

export default Home;
