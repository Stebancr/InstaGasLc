import React from 'react';
import '../components/Styles/Home.css'

const items = [
  { href: "calentadores.html", src: "../../img/calentadores.svg", alt: "calentadores" },
  { href: "instalaciones.html", src: "../../img/instalaciones.svg", alt: "instalaciones" },
  { href: "servicios.html", src: "../../img/servicios.svg", alt: "servicios" },
];


const HomePage = () => {
  return (
    <div className="Home">
      <div>
        {items.map((item, index) => (
            <section className="item" key={index}>
              <a href={item.href}>
                <img src={item.src} alt={item.alt} className="image" />
              </a>
            </section>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
