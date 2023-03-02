import React from "react"
import { ReactDOM } from "react"
import "../src/style.css"
import Photo from "../src/images/headshot1.png"
import { FaEnvelope } from "react-icons/fa"
import { AiFillTwitterSquare } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"

export default function Main() {
  return (
    <div className="main-container">
      <main>
        <div className="photo"></div>
        <h1>Chris Green</h1>
        <p className="subtag">Frontend Developer</p>
        <p className="site">chrisgreen.website</p>
        <div className="email-container">
          <FaEnvelope icon="fa-solid fa-envelope" />
          <p>Email</p>
        </div>
        <div className="info-container">
          <h3 className="head">About</h3>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h3 className="head">Interests</h3>
          <p>
            Food expert, Gaming fanatic, Pop culture, Soccer enjoyer, Coffee
            fanatic, Traveler, Reader.
          </p>
        </div>
        <div className="footer">
          <a href="">
            <AiFillTwitterSquare />
          </a>
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>

          <a href="https://www.linkedin.com/in/john-g-9a231a239/?trk=public-profile-join-page">
            <AiFillLinkedin />
          </a>

          <a href="">
            <AiFillGithub />
          </a>
        </div>
      </main>
    </div>
  )
}
