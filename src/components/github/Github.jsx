import React from 'react'
import stats from '../img/stats.png';
import cal from '../img/commits.png';
import lang from '../img/lang.png';
import './Github.css'

const Github = () => {
  return (
    <div className='github' id='Github'>
      <div className="stats">
        <h1 className='heading'>My Statistics</h1>
        <div className="stats_img">
          <img src={stats} alt="" />
          <img src={lang} alt="" />
        </div>
        <div className="calender">
          <h1 className="heading">My GitHub Calender</h1>
          <div className="calender_img">
            <img src={cal} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Github