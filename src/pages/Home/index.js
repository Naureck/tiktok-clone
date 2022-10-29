import React from 'react';

import img from '~/Asset/img';
import VideoContent from '~/Component/VideoContent';
import styles from './Home.module.scss';

function Home() {
   return (
      <div>
         <div className={styles['wrapper']}>
            {/* Video Content */}
            <div className={styles['content-wrapper']}>
               <VideoContent
                  src={img.avatar}
                  alt="penganzuto"
                  userName="penganzuto2004"
                  nickName="Trần Thanh Ngân"
                  desc="Lạc quan lên em!!"
                  musicName="Vô Tư - Trần Thanh Hà"
               />
               <VideoContent
                  src={img.avatar}
                  alt="penganzuto"
                  userName="penganzuto2004"
                  nickName="Trần Thanh Ngân"
                  desc="Lạc quan lên em!!"
                  musicName="Vô Tư - Trần Thanh Hà"
               />
            </div>
         </div>
      </div>
   );
}

export default Home;
