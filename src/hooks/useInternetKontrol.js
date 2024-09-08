import { useEffect, useState } from "react";

const useInternetKontrol = () => {
  const [baglantiVar, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => { //cleanup fonksiyonu
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return baglantiVar;
};

export default useInternetKontrol;
