import { Container, Row,   } from "react-bootstrap"



const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <div className="footer1">
            <img src="src/assets/img/Ellipse 12.png" alt="" />
            <h1 style={{fontWeight:"700"}}>Dasa Impi</h1>
          </div>
        </Row>
        <Row>
          <div style={{display:'flex', justifyContent:'space-between', marginTop:'50px'}}>
            <div>
              <h3>Hubungi Kami</h3>
              <p>dasa_impi@gmail.com</p>
              <p>+628-6789-2342-23</p>
              <p>Indonesia</p>
              <div style={{display:'flex', justifyContent:'space-around'}}>
                <a href=""><img src="src/assets/img/Facebook.png" alt="" /></a>
                <a href=""><img src="src/assets/img/Linkedin.png" alt="" /></a>
                <a href=""><img src="src/assets/img/Twitter.png" alt="" /></a>
                <a href=""><img src="src/assets/img/Instagram.png" alt="" /></a>
              </div>
            </div>
            <div style={{maxWidth:'500px'}}>
              <h3>Kantor Kami</h3>
              <p>Gedung Dasa Impi Lt. 5, Jl. Sutomo No.1, Siantar Timur, Pematangsiantar, Sumatera Utara</p>
            </div>
            <div>
              <h3>Download Aplikasi</h3>
              <a href=""><img src="src/assets/img/image 3.png" alt=""></img></a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent