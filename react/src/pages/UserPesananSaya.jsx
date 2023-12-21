import { Container, Row } from "react-bootstrap"
import Button from "react-bootstrap/Button"




const UserPesananSaya = () => {
  return (
    <div className="userhome">
      <Container>
        <Row>
          <div>
            <div>
              <h1>Pesanan Saya</h1>
            </div>
            {/* box */}
            <div style={{border:"#000 solid 1px",borderRadius:"10px", padding:"20px 100px 20px 100px",}}>
              <div>
                <h2 style={{textAlign:"right"}}>Fiola Catering</h2>
              </div>
              <div style={{display:"flex"}}>
                <div>
                  <img style={{width:"200px"}} src="src/assets/img/Rectangle 641.png" alt="" />
                </div>
                <div style={{marginLeft:"50px"}}>
                  <h2>Paket 1</h2>
                  <h4>Rp 270.000 (5 Paket) - Dana</h4>
                  <div style={{display:"flex", marginTop:"70px"}}>
                    <div>
                      <p style={{fontSize:"20px"}}>Status : Belum Dibayar</p>
                    </div>
                    <div className="pesanan-saya-btn" style={{marginLeft:"450px"}}>
                      <Button variant="danger">Batalkan</Button>
                      <Button variant="primary">Bayar</Button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </Row>
        {/* pesanan selesai */}
        <Row>
          <div style={{marginTop:"100px"}}>
            <div>
              <h1>Pesanan Selesai</h1>
            </div>
            {/* box */}
            <div style={{border:"#000 solid 1px",borderRadius:"10px", padding:"20px 100px 20px 100px",}}>
              <div>
                <h2 style={{textAlign:"right"}}>Fiola Catering</h2>
              </div>
              <div style={{display:"flex"}}>
                <div>
                  <img style={{width:"200px"}} src="src/assets/img/Rectangle 641.png" alt="" />
                </div>
                <div style={{marginLeft:"50px"}}>
                  <h2>Paket 5</h2>
                  <h4>Rp 420.000 (8 Paket) - Dana</h4>
                  <div style={{display:"flex", marginTop:"70px"}}>
                    <div>
                      <p style={{fontSize:"20px"}}>Status : Sudah Selesai</p>
                    </div>
                    <div className="pesanan-saya-btn" style={{marginLeft:"550px"}}>
                      {/* <Button variant="danger">Batalkan</Button> */}
                      <Button variant="success">Nilai</Button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div style={{display:"flex", marginTop:"50px"}}>
                <div>
                  <img style={{width:"200px"}} src="src/assets/img/Rectangle 641.png" alt="" />
                </div>
                <div style={{marginLeft:"50px"}}>
                  <h2>Paket 3</h2>
                  <h4>Rp 370.000 (7 Paket) - Dana</h4>
                  <div style={{display:"flex", marginTop:"70px"}}>
                    <div>
                      <p style={{fontSize:"20px"}}>Status : Sudah Selesai</p>
                    </div>
                    <div className="pesanan-saya-btn" style={{marginLeft:"550px"}}>
                      {/* <Button variant="danger">Batalkan</Button> */}
                      <Button variant="success">Nilai</Button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default UserPesananSaya