import React from 'react'
import {FaGithub,FaCamera,FaCircleNotch,FaAndroid,FaSearchDollar,FaFileVideo} from "react-icons/fa";

const Service = () => {
  const [header]=React.useState({mainHeader:"SERVICES",subHeading:'My Services',text:'Lorem ipsum dolor.Quisque rerit dui et arcu suscipitus eu venenatis vehillus diam at urna'})
  const [state]=React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesettingindustry. simply dummy",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaAndroid className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
  ]);
  return (
    <div className='service'>
      <div className='container'>
        <div className='service__header'>
            <div className='common'>
            <h3 className='heading'>{header.mainHeader}</h3>
            <h1 className='mainheader'>
               {header.subHeading}
            </h1>
            <p className='mainContent'>{header.text}</p>
            <div className='commonBorder'></div>
            </div>
         <div className="row bgMain">
          {state.map(info => (
            <div className="col-4 bgMain">
            <div className="services__box">
            {info.icon}
              <div className="service__box-header">
              {info.heading}
              </div>
              <div className="services__box-p">
                {info.text}</div>
            </div>
          </div>
          ))}
         
         </div>
        </div>
      </div>
    </div>
  )
}

export default Service
