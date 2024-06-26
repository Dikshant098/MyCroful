import React from 'react';

function Footer() {
  return (
    <footer className='container-fluid justify-content-between align-items-center' style={{
      width: '100%',
      height: '30%',
      background: "linear-gradient(to bottom, rgba(255, 215, 0, 0.4), rgba(225, 175, 209,1))",
      position:'sticky',
    }}>
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-lg-3">
          <ul className='p-2'>
            <li className='d-flex flex-column' style={{ fontSize: "15px" }}>
              <a href="" style={{ textDecoration: "none", color: 'black', fontWeight: 'bold', fontSize: '23px', fontFamily: "Ubuntu" }}> Quick Links </a>
              <a href="" style={{ textDecoration: "none", color: 'black' }}> About </a>
              <a href="" style={{ textDecoration: "none", color: 'black' }}> Contact </a>
              <a href="" style={{ textDecoration: "none", color: 'black' }}> Terms and Condition </a>
              <a href="" style={{ textDecoration: "none", color: 'black' }}> Privacy Policy </a>
              <a href="" style={{ textDecoration: "none", color: 'black' }}> Refund and Returns Policy </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-5">
          <ul className='p-2'>
            <li className='d-flex flex-column'>
              <a href="" className='fw-semibold' style={{ textDecoration: "none", color: 'black', fontSize: '30px', fontFamily: "Ubuntu" }}> Croful </a>
              <a href="" style={{ textDecoration: "none", color: 'black', fontSize: '23px', fontFamily: "Ubuntu" }}> Croful.com </a>
              <span style={{ fontSize: "15px" }}>
                #158, First Floor, Powai Plaza,
                Hiranandani Garden, Central Avenue Road,
                Powai, Mumbai INDIA - 400076
              </span>
              <span style={{ fontSize: "15px" }}>
                Support: Support@croful.com
                Return : return@croful.com
                Sale : Sales@croful.com
              </span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
