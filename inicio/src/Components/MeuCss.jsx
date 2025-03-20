import "./MeuCss.css";

const MeuCss = () => {
  return (
    <div>
         <p>Parágrafo</p>
      <h1>Meu titulo do componente</h1>
     
      <p className="azul">Parágrafo 2</p>
      <p>Texto escrito no app</p>
      <p
        style={{ color: "green", backgroundColor: "yellow", fontSize: "80px" }}
      >
        Paragrafo três
      </p>
    </div>
  );
};

export default MeuCss;
