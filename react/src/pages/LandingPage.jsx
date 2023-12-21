import { Container, Row, } from "react-bootstrap"
import { Link } from "react-router-dom"




const LandingPage = () => {
  return (

    
    <div>
      
        <Row style={{marginTop:"-500px"}}>
          <img src="src/assets/img/Rectangle 644.png" alt="" />
        </Row>
        <Row style={{backgroundColor:"white", marginTop:"-720px", padding:"20px 300px 20px 300px", position:"sticky"}}>
          <div style={{display:"flex"}}>
            <img style={{width:"90px"}} src="src/assets/img/CATERING YUK 1.png" alt="" />
            <h1 style={{margin:"20px", color:"#faa20a", fontWeight:"700"}}>Catering Yuk</h1>
            <div style={{margin:"20px 0px 0px 600px"}}>
              <Link to="loginuser"><button style={{backgroundColor:"#faa20a", borderRadius:"10px", padding:"10px 30px 10px 30px", border:"white solid 1px", color:"white"}}>Masuk</button></Link>
              <Link to="loginregistero"><button style={{backgroundColor:"#faa20a", borderRadius:"10px", padding:"10px 30px 10px 30px", border:"white solid 1px", color:"white"}}>Daftar</button></Link>
            </div>
          </div>
        </Row>
      <Container style={{paddingTop:"10vh"}}>
        <Row style={{paddingRight:"600px", marginTop:"100px", marginBottom:"100px"}}>
          <div >
            <h3>Mulai cari atau pesan catering untuk acara pentingmu di <a style={{color:"#faa20a"}} href="">Catering-Yuk</a></h3>
            <h3>Atau mulai menjual atau sajikan cateringmu disini.</h3>
          </div>
          <div>
            <p>Sebuah platform untuk menjembatani antara pemilik perusahaan catering dengan pelanggan yang mudah, cepat dan efisien.</p>
          </div>
          <div>
            Download aplikasi <a style={{color:"#faa20a"}} href="">Catering-Yuk</a>
          </div>
          <div>
            <img src="src/assets/img/image 3.png" alt="" />
          </div>
        </Row>
        <Row>
          <div style={{marginTop:"100px", display:"flex"}}>
            <div style={{padding:"120px 100px 100px 0px"}}>
              <h3>Mulai Pesan Catering</h3>
              <p>Mulai Pengalaman Anda dengan memesan catering dengan lebih mudah dengan kami</p>
              <Link to="loginuser"><button style={{backgroundColor:"#faa20a", borderRadius:"10px", padding:"10px 30px 10px 30px", border:"white solid 1px", color:"white"}}>Masuk Sebagai User</button></Link>
            </div>
            <div>
              <img src="src/assets/img/Rectangle 642.png" alt="" />
            </div>
          </div>
        </Row>
        <Row>
          <div style={{marginTop:"100px", display:"flex"}}>
            <div>
              <img src="src/assets/img/Rectangle 642.png" alt="" />
            </div>
            <div style={{padding:"120px 90px 100px 50px"}}>
              <h3>Mulai Berjualan</h3>
              <p>Tingkatkan efisiensi bisnis catering Anda dengan aplikasi online kami yang praktis. Pesanan, manajemen menu, dan jadwal pengiriman semuanya dalam satu tempat!</p>
              <Link to="loginowner"><button style={{backgroundColor:"#faa20a", borderRadius:"10px", padding:"10px 30px 10px 30px", border:"white solid 1px", color:"white"}}>Masuk Sebagai Catering Owner</button></Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage