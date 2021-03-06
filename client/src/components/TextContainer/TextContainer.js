import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>
        TakeChat <br />
        Realtime Chat App{" "}
        <span role='img' aria-label='emoji'>
          💬
        </span>
      </h1>
      {/* <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role='img' aria-label='emoji'>
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role='img' aria-label='emoji'>
          ⬅️
        </span>
      </h2> */}
    </div>
    {users ? (
      <div>
        <br></br>
        <h1>접속중인 사용자</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
