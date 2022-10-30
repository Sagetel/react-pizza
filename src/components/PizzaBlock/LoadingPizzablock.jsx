import React from 'react'
import ContentLoader from "react-content-loader"


function LoadingPizzablock() {
  return (
    <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="269" rx="6" ry="6" width="280" height="24" /> 
    <rect x="-2" y="303" rx="6" ry="6" width="280" height="83" /> 
    <rect x="125" y="397" rx="16" ry="16" width="151" height="44" /> 
    <circle cx="129" cy="129" r="130" /> 
    <rect x="9" y="398" rx="12" ry="12" width="88" height="44" />
  </ContentLoader>
  );
}

export default LoadingPizzablock