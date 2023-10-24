import "./Botones.css";
const Botones = () => {
    return(
        <main>
        
        <div className="icons">
      <img
        className="simbolos"
        src="./icons/simbolos.jpg"
        alt="simbolos ascii"
      />
      <a href="https://es.piliapp.com/symbol/">Simbolos</a>  
          <img
        className="paleta"
        src="./icons/paleta1.jpg"
        alt="paleta colores"
      />
      <a href="https://htmlcolorcodes.com/es/recursos/mejor-paleta-de-colores-generadores/">Paleta de colores</a>
      <img
        className="botones"
        src="./icons/botones.jpg"
        alt="icono de botones"
      />
      <a href="https://francescricart.com/estilizar-un-formulario-html-con-css/">Codigos para un formulario</a>  
    </div>
    </main>
  );
};

export default Botones;
