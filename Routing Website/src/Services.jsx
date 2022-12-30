import React from 'react'
import Card from "./Card"
import Sdata from './Sdata'

const Services = () => {
  return (
    <>
    <h1 className='services_heading'>Our Services</h1>
      {
        Sdata.map((val, ind)=> {
          return (<Card
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}>
          </Card>)
        })
      }
    </>
  )
}

export default Services;