import React from 'react';
import HeroIllustration from "public/Assets/HeroIllustration.svg"


const HeroIllust = () => {
  return (
    <div>
                <use xlinkHref={HeroIllustration}/>
    </div>
  )
}

export default HeroIllust