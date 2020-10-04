import React from 'react'

export const Login = () => {
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
           
          <div className="fadeIn first">
            <img src="src/logoGaona.jpg" id="icon" alt="Logo Gaona Textil" />
          </div>
      
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario"></input>
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password"></input>
            <input type="submit" className="fadeIn fourth" value="Ingresar"></input>
          </form>
      
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
      
        </div>
      </div>
    )
}
