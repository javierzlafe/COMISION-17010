import { useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthContext";
import '../UserAuthenticate/UserAutenticate.scss';


export const UserAuthenticate = () => {


    const {setIsAuthenticated} = useContext(UserAuthContext);

    const handlesubmit = () => {
        setIsAuthenticated(true);
    }
    return (
    
    <>

        <div className="container">
            <br />
            <h2 className="loguin">Por favor logueate.</h2>
            <hr/>
            <br />
                                {/* se simula el user de ingreso */}
                    <div id="ingreso">
                        <input id="usuario" type="text" placeholder="usuario"></input>
                        <input id="usuario" type="password" placeholder="contraseña"></input>
                    </div>
            <br />

            <div>
                <button onClick={handlesubmit} className="btn btn-primary boton-ingresar"> ingresar </button>
            </div>

            <p>trabajando en el login...</p>
        </div>
    </>
    );
}