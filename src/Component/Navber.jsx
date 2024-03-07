import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navber = ({bgcol, txtcol}) => {
  return (
      <>
      <div id="navbar" style={{backgroundColor:bgcol,color:txtcol}}>
        <div className="nav">
          <Link to={'/'}>{bgcol=="white"?<img src={ggf} /> :<img src="\resources\" alt="" />}</Link>
          <p>Store</p>
          <Link to={'/mac'}><p>Mac</p></Link>
          <Link to={'/wheretobuy'}><p>where to buy</p></Link>
          <p>iphone</p>
          <p> watch</p>
          <p>vision</p>
          <p>Airpods</p>
          <p> Tv & Home</p>
          <p>Entertainment</p>
          <p>Accesories</p>
          <p>Support</p>
        </div>
      </div>
    </>
  )
}

export default Navber