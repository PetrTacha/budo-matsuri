import React from "react";
import styles from '@/components/SocialNetworksLinks/SocialNetworksLinks.module.scss'

const SocialNetworksLinks = () => {
    return ( 
        <div className="flex gap-2 pt-10">
            <div className={`font-bold text-center border-solid border-2 p-2 rounded-full ${styles.icon}`}>F</div>
            <div className={`font-bold text-center border-solid border-2 p-2 rounded-full ${styles.icon}`}>IG</div>
        </div>
     );
}
 
export default SocialNetworksLinks;