import React from 'react'
import './descriptions.css'
import {FaArrowDown, FaArrowUp, FaWind} from 'react-icons/fa';
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";


const Descriptions = ({weather, units}) => {

    const tempUnit = (units) === 'metric' ? '°C' : '°F';
    const windUnit = (units) === 'metric' ? 'м/с' : 'm/h';

    const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "минимальная",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "максимальная",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "по ощущению",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "давление",
      data: weather.pressure *  0.75006375541921.toFixed(2),
      unit: "мм.рт.ст.",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "влажность",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "скорость ветра",
      data: weather.speed,
      unit: windUnit,
    },
  ];

  return (
    <div className='section section_descriptions'>
        {cards.map(({id, icon, title, data, unit}) => (
            <div key={id} className='card'>
            <div className='description_card-icon'>
                {icon}
                <span>{title}</span>
            </div>
            <h2>{`${data}${unit}`}</h2>
        </div>
        ))}
        
        
       
    </div>
  )
}

export default Descriptions;