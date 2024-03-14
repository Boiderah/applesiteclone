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
          <p>ipad</p>
          <p> iphone</p>
          <p>support</p>
          <Link to={'/wheretobuy'}><p>where to buy</p></Link>
          
        
        </div>
      </div>
    </>
  )
}

export default Navber