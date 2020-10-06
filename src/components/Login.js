import React from 'react';
import logo from '../assets/images/logoGaona.jpg';

export const Login = () => {
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
           
          <div className="fadeIn first">
            <img src={ logo } width="200" height="200" alt="" loading="lazy" id="icon" />
          </div>
      
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario"></input>
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password"></input>
            <input type="text" id="empresa" className="fadeIn second" name="empresa" placeholder="Empresa"></input>
            <input type="submit" className="fadeIn fourth" value="Ingresar"></input>
          </form>
      
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
      
        </div>
      </div>
    )
}
