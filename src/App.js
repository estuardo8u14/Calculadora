import Contenedor from "./componentes/Contenedor";
import Pantalla from "./componentes/Pantalla";
import BotonBox from "./componentes/BotonBox";
import Boton from "./componentes/Boton";

const App = () => {
  return (
    <Contenedor>
      <Pantalla value="0" />
      <BotonBox>
        <Boton
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </BotonBox>
    </Contenedor>
  );
};

export default App;
