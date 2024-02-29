import React from 'react'
import './UserProfileCard.css';
import profile_icon from '../Assets/elon.jpg';


function UserProfileCard() {
  return (
    <div className='upc'>
      <div className="gradient"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Elon Musk</div>
        <div className="profile-description">
        I am the founder, chaiman & chief executive officer of SpaceX, CEO and Product architect of Tesla Inc. owner and CTO of Twitter
        </div>
        <div className="profile-button"><a href="mailto:elon@musk.com">Contact Me</a></div>
      </div>
    </div>
  )
}

export default UserProfileCard