import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const LoginOwner = () => {
  return (
    <div style={{marginTop:"-250px"}}>
      <Container style={{paddingTop:"40vh", paddingBottom:"40vh"}}>
        <div style={{display:"flex", padding:"50px", border:"#999 solid 1px", borderRadius:"20px", justifyContent:"space-evenly", boxShadow:"1px 1px 20px #999"}}>
          <div>
            <h1 style={{marginTop:"50px"}}>Masuk Sebagai</h1>
            <div className='login-btn'>
            <Link style={{textDecoration:"none", color:"white"}} to="/loginuser"><Button style={{backgroundColor:"#888", border:"#888 solid 2px"}}  variant="secondary">User</Button></Link>
              <Button variant="primary">Owner</Button>
            </div>
            <div className='email-password'>
              <input type="email" name="" id="" placeholder='E-mail' />
              <input type="password" name="" id="" placeholder='Password' />
              <Link to="/userhome" style={{display:'flex', justifyContent:"space-evenly", textDecoration:"none"}}>
                  <Button style={{ 
                    backgroundColor:"#faa20a",
                    border:"#faa20a solid 1px",
                    borderRadius:"50px",
                    fontSize:"25px",
                    marginTop:"20px",
                    padding:"5px 150px 5px 150px"
                  }}>Masuk</Button>
              </Link>
            </div>
            
            <a style={{marginTop:"50px", color:"black" }} href=""><p>Lupa Password</p></a>
            <p>Belum punya akun? <a style={{color:"black"}} href="">Daftar</a></p>
          </div>
          <div>
            <img style={{width:"500px"}} src="src/assets/img/Rectangle 3x (11).png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LoginOwner