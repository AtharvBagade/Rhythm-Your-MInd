import Mycard from "./Cards";
import Profile from "./Profile";
import React from 'react'

export default function Home() {
    return (
      <main>
      <div className="littleSpace">
        <Profile />
        </div>
  
        <div className="container2">
        <div className="Container">
          <div className="wrapper">
            <div className="block1">
              <Mycard header="Pain Management" subheader="something cool" />
            </div>
            <div className="block2"></div>
          </div>
          <div className="wrapper">
            <div className="block1"></div>
            <div className="block2">
              <Mycard header="Pain Management" subheader="something cool" />
            </div>
          </div>
          <div className="wrapper">
            <div className="block1">
              <Mycard header="Pain Management" subheader="something cool" />
            </div>
          </div>
          <div className="wrapper">
            <div className="block1"></div>
            <div className="block2">
              <Mycard header="Pain Management" subheader="something cool" />
            </div>
          </div>
          <div className="wrapper">
            <div className="block1">
              <Mycard header="Pain Management" subheader="something cool" />
            </div>
          </div>
          <div className="wrapper">
            <div className="block1"></div>
            <div className="block2">
              <Mycard header="Pain Management" subheader="something cool" />
            </div>
          </div>
        </div>
        </div>
        </main>
  
        
    );
}
