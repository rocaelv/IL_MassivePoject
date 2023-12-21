import { Container,Row } from "react-bootstrap"
import { useState } from "react"


const UserPesanan = () => {

  const[count, useCounter] = useState(5)

  const Increment = () => {
    useCounter(count + 1)
  }
  const Decrement = () => {
    useCounter(count - 1)
  }


  return (
    <div style={{paddingTop:"20vh"}}>
      <Container>
        <Row>
          <div className="pesanan-atas" style={{display:'flex', justifyContent:'space-evenly'}}>
            <div className="alamat-pesanan" style={{border:'#999 solid 1px', padding:"30px 30px 10px 30px", borderRadius:"10px", display:"flex"}}>
              <div>
                <p style={{color:"#000", fontSize:"20px", marginTop:"0px", fontWeight:"600"}}>Alamat Pengantaran</p>
                <p style={{marginTop:"30px"}}>Johnny</p>
                <p>(+62)69420420</p>
                <p>Jl Kalibaru Timur VI A No.33, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
              </div>
              <div>
                <button style={{backgroundColor:"#fff", borderRadius:"10px"}}>Ganti Alamat</button>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div style={{display:"flex", justifyContent:"space-around", marginTop:"-100px",}}>
            <div>
              {/* paket 1 */}
              <div className="detail-atas">
                <div>
                  <img style={{width:"200px"}} src="src/assets/img/Rectangle 641.png" alt="" />
                </div>
                <div style={{marginLeft:"20px"}}>
                  <h3 style={{fontSize:"40px"}}>Paket 1</h3>
                  <p style={{color:"#888"}}><img src="src/assets/img/🦆 icon _star_.png" alt="" />4.8(123 penilaian)</p>
                  <p style={{maxWidth:"300px", color:"#888"}}>Nasi Putih, Beef Blackpapper, Ikan Asam Manis, Salad Buah, Sate Padang</p>
                  <p style={{marginTop:"10px", fontSize:"20px"}}>Rp. 50.000/pack</p>
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
              {/* paket 2 */}
              {/* <div className="detail-atas" style={{marginTop:"10px"}}> 
                <div>
                  <img style={{width:"200px"}} src="src/assets/img/Rectangle 641.png" alt="" />
                </div>
                <div style={{marginLeft:"20px"}}>
                  <h3 style={{fontSize:"40px"}}>Paket 2</h3>
                  <p style={{color:"#888"}}><img src="src/assets/img/🦆 icon _star_.png" alt="" />4.8(123 penilaian)</p>
                  <p style={{maxWidth:"300px", color:"#888"}}>Nasi Putih, Beef Blackpapper, Ikan Asam Manis, Salad Buah, Sate Padang</p>
                  <p style={{marginTop:"10px", fontSize:"20px"}}>Rp. 50.000/pack</p>
                </div>
                <div style={{marginLeft:"50px", marginTop:"150px", }}>
                  <div className="tombolnambah">
                    <button className="tomboltambah"  onClick={() => Increment()} >+</button>
                    <button className="tomboltambah" style={{backgroundColor:"#fff", margin:"0 5px 0 5px"}} >{count}</button>
                    <button className="tomboltambah"  onClick={() => Decrement()} >-</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </Row>
        <Row>
          <div style={{marginTop:"100px"}}>
            <div>
            <h1>Pasang Voucher Disini</h1>
            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"50px",}}>
              <div className="pesanan-voucher" >
              <p style={{marginRight:"500px"}}>Dasa Impi</p>
              <p>Berhasil ✔️</p>
              </div>
            </div>
            </div>
          </div>
        </Row>
        <Row>
          <div style={{marginTop:"100px"}}>
            <div>
            <h1>Pilih Metode Pembayaran</h1>
            <div style={{marginTop:"50px"}}>
              <div className="pesanan-pembayaran">
                <p>Subtotal Pesanan</p>
                <p>Rp. 250.000</p>
              </div>
              <div className="pesanan-pembayaran">
                <p>Biaya Pengiriman</p>
                <p>Rp. 50.000</p>
              </div>
              <div className="pesanan-pembayaran">
                <p>Diskon</p>
                <p>Rp. 30.000</p>
              </div>
              <hr style={{width:"700px", margin:"auto"}} />
              <div className="pesanan-pembayaran" style={{marginTop:"20px",fontWeight:"700", fontSize:"30px"}}>
                <p>Total</p>
                <p>Rp. 270.000</p>
              </div>
              <div className="pembayaran-btn" style={{display:"grid", maxWidth:"500px", margin:"auto"}}>
                <button>Pilih Tanggal</button>
                <button>Bayar Sekarang</button>
              </div>
            </div>
          </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default UserPesanan