import React from 'react'
import {FaGithub} from "react-icons/fa";

const Service = () => {
  return (
    <div className='service'>
      <div className='container'>
        <div className='service__header'>
            <div className='common'>
            <h3 className='heading'>SERVICES</h3>
            <h1 className='mainheader'>
                My Services
            </h1>
            <p className='mainContent'>Lorem ipsum dolor.Quisque rerit dui et arcu suscip
            itus eu venenatis vehillus diam at urna</p>
            <div className='commonBorder'></div>
            </div>
         <div className="row">
          <div className="col-4">
            <div className="services__box">
              <FaGithub className='commonIcons'/>
              <div className="service__box-header">
                Web Development
              </div>
              <div className="services__box-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Eveniet reiciendis eiusAutem at architecto dolore. Quo?</div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Service
