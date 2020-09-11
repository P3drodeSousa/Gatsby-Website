import React from "react"
import "./style.css"
import { Link } from "gatsby"

const Page404 = () => {
  return (
    <div className="bg-purple">
      <div className="stars">
        <div className="central-body">
          <img
            alt=""
            className="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
          />
          <Link className="btn-go-home" to="/">
            {" "}
            GO BACK HOME
          </Link>
        </div>
        <div className="objects">
          <img
            alt=" "
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
          />
          <div className="earth-moon">
            <img
              alt=""
              className="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
            />
            <img
              alt=""
              className="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
            />
          </div>
          <div className="box_astronaut">
            <img
              alt=""
              className="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
    </div>
  )
}

export default Page404
