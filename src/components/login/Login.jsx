import './login.css'
import { useEffect, useState } from "react";

export const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
      });


    return(
        <div className="loginPage">
            <div class="empty"></div>
            <div class="App">
                <form onSubmit={() => {

                }}>
                    <h1>Connexion</h1>
                    <h2>Utiliser votre compte Efrei</h2>
                    <label class="form-row-1"> Email : 
                    <input type="email" name="email" onChange={()}/>
                    </label>  
                    <label class="form-row-2"> Mot de passe :  
                    <input type="password" name="password" onChange={()}/>
                    </label> 
                    <p>En me connectant, <b>j'accepte</b> les conditions d'utilisations du service SSO Efrei notamment en matière de données personnelles.</p>
                    <input type="submit" value="SE CONNECTER" class="button" />
                </form>
            </div>
        </div>
    )
}

export default Login;