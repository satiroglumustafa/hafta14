import { useState } from 'react';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [localKoyuMod,localKoyuModGuncelle] = useLocalStorage("localKoyuMod",false)

  function koyuModButton() {
    localKoyuModGuncelle(!localKoyuMod)
  }

  return (
    <>
      <button onClick={koyuModButton}>Koyu Mod {localKoyuMod ? "Kapat" : "Aç"}</button>

      <section className={ localKoyuMod ? 'dark' : ''}>
        <h1>  Lorem ipsum dolor sit amet. </h1>
        <p>    
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum nobis omnis deserunt, cupiditate nostrum perspiciatis quia magni libero nam reprehenderit sequi itaque rem cumque sed veritatis reiciendis distinctio inventore consectetur error nulla, quae velit? Minima ea et accusantium molestiae, quo eligendi modi tenetur, nostrum dolorum ducimus esse? Soluta, id veritatis nihil consequatur eum unde maiores facilis blanditiis. Quaerat aut numquam beatae. Facere nostrum dolorum a saepe praesentium ipsam, velit eveniet accusantium harum maxime ducimus, esse quisquam alias mollitia quaerat quia tempore vero iusto aspernatur modi, tempora nemo earum laboriosam minima. Explicabo iure voluptas culpa illum aspernatur quos officia porro!
          </p>

        <p>    
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum nobis omnis deserunt, cupiditate nostrum perspiciatis quia magni libero nam reprehenderit sequi itaque rem cumque sed veritatis reiciendis distinctio inventore consectetur error nulla, quae velit? Minima ea et accusantium molestiae, quo eligendi modi tenetur, nostrum dolorum ducimus esse? Soluta, id veritatis nihil consequatur eum unde maiores facilis blanditiis. Quaerat aut numquam beatae. Facere nostrum dolorum a saepe praesentium ipsam, velit eveniet accusantium harum maxime ducimus, esse quisquam alias mollitia quaerat quia tempore vero iusto aspernatur modi, tempora nemo earum laboriosam minima. Explicabo iure voluptas culpa illum aspernatur quos officia porro!
          </p>

        <p>    
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum nobis omnis deserunt, cupiditate nostrum perspiciatis quia magni libero nam reprehenderit sequi itaque rem cumque sed veritatis reiciendis distinctio inventore consectetur error nulla, quae velit? Minima ea et accusantium molestiae, quo eligendi modi tenetur, nostrum dolorum ducimus esse? Soluta, id veritatis nihil consequatur eum unde maiores facilis blanditiis. Quaerat aut numquam beatae. Facere nostrum dolorum a saepe praesentium ipsam, velit eveniet accusantium harum maxime ducimus, esse quisquam alias mollitia quaerat quia tempore vero iusto aspernatur modi, tempora nemo earum laboriosam minima. Explicabo iure voluptas culpa illum aspernatur quos officia porro!
          </p>
      </section>
    </>
  );
}

export default App;
