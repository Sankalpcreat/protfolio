import React from 'react'

const About = () => {
    const [header]=React.useState({subHeader:'About Me',
    text:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum standard dummy.'})
  return (
    <div className='about'>
        <div className='container'></div>
         <div className='common'>
            <h1 className='mainheader'>{header.subHeader}</h1>
            <p className='mainContent'>{header.text}</p>
            <div className='commonBorder'>
            </div>
      </div>
    </div>
  )
}

export default About
