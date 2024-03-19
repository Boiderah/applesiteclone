import React from 'react'
import "./home.css"
import Navber from '../../Component/Navber'
// import Asset0 from "../../assets/asset0.jpeg"
// import Asset1 from "../../assets/asset 1.jpeg"

const home = () => {
  return (
    <div id='Home'>
      <Navber />
      <section className='sec1'>
        <div>
        <h1 id='uptext'>MacBook Pro</h1>
        <p id='midtext'>Mind-blowing. Head-turning</p>
        <p id='bt'>Learn more {'>'} </p>
        {/* <img src={Asset0} /> */}
        </div>
      </section>
      <section id='sec2'>
        <div>
        <h1 id='uptext'> iMac</h1>
        <p id='midtext'> packed with more juice</p>
        <p id='bt'>Learn more {'>'}</p>
        {/* <img src={Asset1} /> */}
        </div>
      </section>
      <section id='sec3'>
        <div>
        <h1 id='up15'>iPhone 15 Pro</h1>
        <p id='mid15'>Titanium.So strong.So light.So Pro</p>
        <p id='bt'>Learn more {'>'}</p>
        </div>
      </section>
      <section id='sec4'>
        <div id='luru'>
        <div id='lu'>
          <h1 id='lut'>iPhone 15</h1>
          <p id='lmt'>New camera. New design. Newphoria.</p>
          <p id='lbt'>Learn more{'>'}</p>
        </div>
        <div id='ru'>
        <h1 id='lut'> iPad</h1>
        <p id='lmt'> Lovable. Drawable. Magical</p>
        <p id='lbt'>Learn more {'>'}</p>
        </div >
        </div>
        <div id='lbrb'>
        <div id='lb'>
        <h1 id='lut'>iPad Pro</h1>
        <p id='lmt'>Supercharged by</p>
        <p id='lbt'>Learn more{'>'}</p>
        </div>
        <div id='rb'>
        <h1 id='lut'>Mac Studio</h1>
        <p id='lmt'>Supercharged by M2 Max and M2 Ultra</p>
        <p id='lbt'> Learn more{'>'}</p>
        </div>
        </div>
      </section>
      <footer></footer>
    </div>
  )
}

export default home