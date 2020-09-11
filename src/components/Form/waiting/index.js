import React from "react"
import "./style.css"

const Waiting = () => {
  return (
    <div className="loader">
      <span>{`{`}</span>
      <span>{`}`}</span>
    </div>
  )
}

export default Waiting
