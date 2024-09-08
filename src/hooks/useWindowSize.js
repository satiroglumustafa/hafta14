import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize); // eğer useWindoWSize içinde bulunduğu component bir drumda unMount olduğunda ona bağlı bulunan tum fonksiyonları temizler
  }, []);

  return windowSize;
}

export default useWindowSize;