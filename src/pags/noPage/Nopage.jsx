import React from 'react'
import { NoPage } from './Nopage'
import Footer from '../../components/footer/Footer.jsx'


export function Nopage() {
  return (
    <div>
      <NoPage>

          <div>
            <img src="./src/data/imgProducts/Error.png" alt=" error 404" />
          </div>

          <div>
              <h2>Upss! esa página no existe.</h2>
              <p>Lo sentimos, no hemos podido localizar la página que buscas, por favor, vuelve a intentarlo.</p>
          </div>

          <button onClick={() => window.location.href = "/"}>Volver a Home</button>

          
      </NoPage>  
      <Footer></Footer>
    </div>
 
  )
}

export default Nopage


