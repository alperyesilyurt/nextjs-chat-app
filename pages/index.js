import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  const{username, setUserName, secret, setSecret,} = useContext(Context);

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault();

    if(username.length === 0 || secret.length === 0 ) return

    axios.put(
    "https://api.chatengine.io/users/",
    {username, secret},
    {headers: {"Private-key": "8f80f630-29c4-44fc-bbc3-473faa6b6721"}}
    ).then( r => router.push("/chats"))
  }
 
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Jely Labs Chat</div>
          <div className="input-container">
            <input
              className="text-input"
              placeholder="Email"
              onChange={e => setUserName(e.target.value)}
            />
            <input
              className="text-input"
              placeholder="Password"
              type="password"
              onChange={e => setSecret(e.target.value)}
            />
            <button
            type="submit"
            className="submit-button"
            >
              Login / Sign Up
            </button>
           
           
          </div>
        </form>
      </div>
    </div>
  );
}
