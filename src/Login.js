import React from 'react'


export const Login = () => {
    return (
<form>
    <div className = 'imgContainer'>
    <img src= "../public/logo512.png" width="30" height="30" alt="" loading="lazy"></img>
    </div>
        
    <div className='container'>
        <label htmlFor='usuario'>Username</label>
       
        <input type='text' placeholder='Ingresar Usuario' name='usuario' required></input>
       <p></p>
        <label htmlFor='psw'>Password</label>
        <input type='password' placeholder='Ingresar Password' name='psw' required></input>

        <button type='submit'>Ingresar</button>
    </div>

    <div className="container">
     
      <span className="psw"><a href="#">Resetear contraseña</a></span>
    </div>

</form>
    )
}
