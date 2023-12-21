import { Link } from 'react-router-dom';
// import { cateringLinks } from '../data/index'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, } from 'react-bootstrap';






const UserCatering = () => {
  return (


    
    <div className='usercatering'>
      <Container>
        <Row style={{display:"flex", justifyContent:"space-around"}}>
          <div style={{border:"#999 solid 1px", padding:"20px", maxWidth:"900px", borderRadius:"10px"}}>
            <div style={{display:"flex"}}>
              <div>
                <img style={{borderRadius:"20px"}} src="src/assets/img/Rectangle 10.png" alt="" />
              </div>
              <div style={{margin:"0 0 0 50px"}}>
                <h1 style={{fontWeight:"700"}}>Fiola Catering</h1>
                <div style={{display:"flex"}}>
                  <p style={{color:"#888"}}><img src="src/assets/img/🦆 icon _star_.png" alt="" />(123 Penilaian)</p>
                </div>
                <p style={{fontWeight:"500", marginTop:"20px"}}>Jl. Asia Afrika, Kota Bandung, Indonesia.</p>
                  <p>Fiola Catering merupakan catering dengan menu terjangkau dan berbagai 
                    pilihan menu yang cocok sesuai kebutuhan. catering ini sudah berjalan lebih
                    dari 15 tahun secara profesional. jadi jangan ragu dan jangan bimbang 
                    Fiola catering solusi dari kebutuhan anda!
                  </p>
              </div>
            </div>
          </div>
          
        </Row>
        <Row>
          <h1 style={{margin:'20px', marginTop:"100px"}}>Pilih Paket</h1>
          <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <Card style={{ width: '18rem', padding:'5px', paddingTop:'10px' }}>
              <Card.Img variant="top" src="src/assets/img/Rectangle 641.png" />
              <Card.Body>
                <Card.Title style={{fontWeight:700, fontSize:'24px'}}>Paket 1</Card.Title>
                <Card.Text>
                  Rp. 50.000/Pack
                </Card.Text>
                  <Link to="/usercateringdetail"><Button variant="primary">Pesan Sekarang</Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', padding:'5px', paddingTop:'10px' }}>
              <Card.Img variant="top" src="src/assets/img/Rectangle 641.png" />
              <Card.Body>
                <Card.Title style={{fontWeight:700, fontSize:'24px'}}>Paket 2</Card.Title>
                <Card.Text>
                  Rp. 50.000/Pack
                </Card.Text>
                  <Link to="/usercateringdetail"><Button variant="primary">Pesan Sekarang</Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', padding:'5px', paddingTop:'10px' }}>
              <Card.Img variant="top" src="src/assets/img/Rectangle 641.png" />
              <Card.Body>
                <Card.Title style={{fontWeight:700, fontSize:'24px'}}>Paket 3</Card.Title>
                <Card.Text>
                  Rp. 50.000/Pack
                </Card.Text>
                  <Link to="/usercateringdetail"><Button variant="primary">Pesan Sekarang</Button></Link>
                </Card.Body>
            </Card>
          </div>
          <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'50px'}}>
            <Card style={{ width: '18rem', padding:'5px', paddingTop:'10px' }}>
              <Card.Img variant="top" src="src/assets/img/Rectangle 641.png" />
              <Card.Body>
                <Card.Title style={{fontWeight:700, fontSize:'24px'}}>Paket 4</Card.Title>
                <Card.Text>
                  Rp. 50.000/Pack
                </Card.Text>
                  <Link to="/usercateringdetail"><Button variant="primary">Pesan Sekarang</Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', padding:'5px', paddingTop:'10px' }}>
              <Card.Img variant="top" src="src/assets/img/Rectangle 641.png" />
              <Card.Body>
                <Card.Title style={{fontWeight:700, fontSize:'24px'}}>Paket 5</Card.Title>
                <Card.Text>
                  Rp. 50.000/Pack
                </Card.Text>
                  <Link to="/usercateringdetail"><Button variant="primary">Pesan Sekarang</Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', padding:'5px', paddingTop:'10px' }}>
              <Card.Img variant="top" src="src/assets/img/Rectangle 641.png" />
              <Card.Body>
                <Card.Title style={{fontWeight:700, fontSize:'24px'}}>Paket 6</Card.Title>
                <Card.Text>
                  Rp. 50.000/Pack
                </Card.Text>
                  <Link to="/usercateringdetail"><Button variant="primary">Pesan Sekarang</Button></Link>
                </Card.Body>
            </Card>
          </div>
          
        </Row>
      </Container>
    </div>
  )
}

export default UserCatering






