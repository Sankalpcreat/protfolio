import React from 'react'

const About = () => {
    const [header]=React.useState({subHeader:'About Me',
    text:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum standard dummy.'})
      
    const [state]=React.useState([
        {id:1,title:'Name:',text: 'Sankalp Singh'},
        {id:1,title:'Email:',text: 'singhsankalp997@gmail.com'},
        {id:1,title:'Phone',text: '+917523XXXXXX'},
        {id:1,title:'Linkdlin',text: 'sankalpsingh03'}
    ])
     
    


    return (
    <div className='about'>
        <div className='container'>
         <div className='common'>
            <h1 className='mainheader'>{header.subHeader}</h1>
            <p className='mainContent'>{header.text}</p>
            <div className='commonBorder'></div>
      </div>
      <div className="row h-650 alignCentre">
        <div className="col-6 ">
            <div className="about__image">
                <img src="/images/sankalp2.png" alt="man" />
            </div>
        </div>
        <div className="col-6">
            <div className="about__info">
                <h1>Hi There</h1>
                <div className="about__info-p1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit
                    . Perferendis iusto libero incidunt nam, optio
                     in tenetur odit? Quae sed nesciunt possimtur officia.
                </div>
                <div className="about__info-p2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing
                     elit. Nobis, nesciunt, maiorec.
                </div>
                <div className="info__contacts">
                    <div className="row">
                        {state.map(info =>(
                          <div className="col-6">
                          <strong>{info.title}</strong>
                          <p>{info.text}</p>
                      </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
