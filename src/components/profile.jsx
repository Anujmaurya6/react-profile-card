import React from 'react';

const Profile = () => {
  const name = "Anuj Maurya";
  const about = "I'm a passionate B.Tech AIML student & Full Stack Java Developer.";
  const linkedin = "https://linkedin.com/in/anuj-maurya";


  return (
    <div className="profile-card">
      <img
       src="https://avatars.githubusercontent.com/u/Anujmaurya6"
        alt="anuj"
        className="profile-img"
      />
      <h2>{name}</h2>
      <p>{about}</p>
      <div className="socials">
        <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
    
      </div>
    </div>
  );
};

export default Profile;
