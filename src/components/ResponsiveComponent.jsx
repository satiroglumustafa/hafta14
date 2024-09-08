import React from 'react';
import useWindowSize from '../hooks/useWindowSize';


function ResponsiveComponent() {
  const { width, height } = useWindowSize(); //object 
//   const pencere = useWindowSize(); // pencere ile tum objeyi çekiyoruz  


  return (
    <div>
      <p>Pencere genişliği: {width}px</p>
      {/* <p>Pencere genişliği: {pencere.width}px</p> // versiyon 2 */}
      <p>Pencere yüksekliği: {height}px</p>
      {width < 768 ? (
        <p>Mobil görünüm</p>
      ) : (
        <p>Masaüstü görünüm</p>
      )}
    </div>
  );
}
export default ResponsiveComponent