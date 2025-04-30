import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import "./Footer.css"
import { experienceCentres } from '../../Data/experienceCentres';
import { officeLocations } from "../../Data/officeLocations"
const Footer = () => {


  return (
    <>
      <div className='container-fluid footer'>
        <div className='container'>
          <p className='para'>Office Locations</p>
          <div className='row'>
            {
              officeLocations && officeLocations.map((element) => {
                return <>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <p>{element.title}</p>
                    <p>{element.des}</p>
                  </div>
                </>
              })
            }
          </div>
        </div>
        <div className='container'>
          <div className='line'></div>
          <p className='para'>Experience Centres</p>
          <div className='row'>
            {
              experienceCentres && experienceCentres.map((element, i) => {
                return <>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-12" key={i}>
                    <p>{element.title}</p>
                    <p>{element.des}</p>
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
