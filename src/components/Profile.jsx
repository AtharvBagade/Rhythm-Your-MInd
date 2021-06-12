import React from "react";

const Profile = () => {
  return (
    <div className="container1">
      <div className="profile">
        <div className="profileImage">
          <img
            src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Profileimage"
          />
        </div>

        <div className="intro">
          <h4> Your Name </h4>
        </div>
        <div className="intro-2">
            <h4>Description</h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;