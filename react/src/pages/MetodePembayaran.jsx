import React from 'react'
import { Container, Row } from 'react-bootstrap'

const MetodePembayaran = () => {
  return (
    <div>
        <Container>
            <Row>
                <div style={{marginTop:"20vh"}}>
                    <h1>Metode Pembayaran</h1>
                    <div style={{border:"#999 solid 1px", borderRadius:"10px"}}>
                        <div style={{margin:"30px"}}>
                            <input style={{marginRight:"20px"}} type="radio" name="metode-pembayaran" id="metode-pembayaran" />
                            <img src="src/assets/img/image 8.png" alt="" />
                        </div>
                        <div style={{margin:"30px"}}>
                            <input style={{marginRight:"20px"}} type="radio" name="metode-pembayaran" id="metode-pembayaran" />
                            <img src="src/assets/img/image 9.png" alt="" />
                        </div>
                        <div style={{margin:"30px"}}>
                            <input style={{marginRight:"20px"}} type="radio" name="metode-pembayaran" id="metode-pembayaran" />
                            <img src="src/assets/img/image 10.png" alt="" />
                        </div>
                        <div style={{margin:"30px"}}>
                            <input style={{marginRight:"20px"}} type="radio" name="metode-pembayaran" id="metode-pembayaran" />
                            <img src="src/assets/img/image 11.png" alt="" />
                        </div>
                        <div style={{margin:"30px"}}>
                            <input style={{marginRight:"20px"}} type="radio" name="metode-pembayaran" id="metode-pembayaran" />
                            <img src="src/assets/img/image 12.png" alt="" />
                        </div>
                        <div style={{margin:"30px"}}>
                            <input style={{marginRight:"20px"}} type="radio" name="metode-pembayaran" id="metode-pembayaran" />
                            <img src="src/assets/img/image 13.png" alt="" />
                        </div>
                        <button style={{marginLeft:"100px", marginBottom:"20px", borderRadius:"10px", fontSize:"20px"}}>Pilih</button>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default MetodePembayaran