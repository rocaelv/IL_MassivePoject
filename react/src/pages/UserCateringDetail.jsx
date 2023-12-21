import { Link } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import { useState } from "react"
import Form from 'react-bootstrap/Form';




const UserCateringDetail = () => {


  const[count, useCounter] = useState(0)

  const Increment = () => {
    useCounter(count + 1)
  }
  const Decrement = () => {
    useCounter(count - 1)
  }
  // const Reset = () => {
  //   useCounter(0)
  // }


  return (
    <div>
      <Container>
        <Row>
          <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <div className="detail-atas">
              <div>
                <img style={{width:"200px"}} src="src/assets/img/Rectangle 641.png" alt="" />
              </div>
              <div style={{marginLeft:"20px"}}>
                <h3 style={{fontSize:"40px"}}>Paket 1</h3>
                <p style={{color:"#888"}}><img src="src/assets/img/🦆 icon _star_.png" alt="" />4.8(123 penilaian)</p>
                <p style={{marginTop:"70px", fontSize:"20px"}}>Rp. 50.000/pack</p>
              </div>
              <div style={{marginLeft:"50px", marginTop:"150px", }}>
                <div className="tombolnambah">
                  <button className="tomboltambah"  onClick={() => Increment()} >+</button>
                  <button className="tomboltambah" style={{backgroundColor:"#fff", margin:"0 5px 0 5px"}} >{count}</button>
                  {/* <button onClick={() => Reset()} >reset</button> */}
                  <button className="tomboltambah"  onClick={() => Decrement()} >-</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px" }}>
                <h1 style={{backgroundColor:"#faa20a", padding:"5px 300px 5px 300px", color:"white", borderRadius:"10px"}}>
                  Buffet Pilihan (5)
                </h1>
              </div>
            </div>
            <div className="detailcheck" style={{marginLeft:"400px", marginTop:"50px"}}>
              <Form.Check label="Nasi Putih" />
              <Form.Check label="Beef Blackaper" />
              <Form.Check label="Beef Teriyaki" />
              <Form.Check label="Beef Rica-rica" />
              <Form.Check label="Rolade Daging Sapi" />
              <Form.Check label="Ikan Asam Manis" />
              <Form.Check label="Ikan Rica-rica" />
              <Form.Check label="Ikan Asam Pedas" />
              <Form.Check label="Cah Brokoli Tofu" />
              <Form.Check label="Cah Kaylan Tofu" />
              <Form.Check label="Salad Buah" />
              <Form.Check label="Salad Bangkok" />
            </div>
            <div>
              <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px" }}>
                <h1 style={{backgroundColor:"#faa20a", padding:"5px 300px 5px 300px", color:"white", borderRadius:"10px"}}>
                  Stall Pilih (2)
                </h1>
              </div>
            </div>
            <div className="detailcheck" style={{marginLeft:"400px", marginTop:"50px"}}>
              <Form.Check label="Bakso Malang" />
              <Form.Check label="Sate Padang" />
            </div>
          </div>
          <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}}>
            <Link to="/userpesanan"><button className="tombol-detail">Lanjut</button></Link>
          </div>
          
        </Row>
      </Container>
    </div>
  )
}

export default UserCateringDetail