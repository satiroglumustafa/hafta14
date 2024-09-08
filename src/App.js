
import { useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks/useOnClickOutside';

function App() {

  const ref1 = useRef()

  function disarisiTiklandi(){
    alert("Elemanın Dışında bir Alan tıklandı")
  }

  useOnClickOutside(ref1,disarisiTiklandi) // bu fonksiyondan geriye herhangibir değer gelmediği için doğrudan çalışırtık

  return (
     <>
        <div ref={ref1} id='kutu1'>
            Kutu 1
        </div>

     </>
  );
}

export default App;
 