import { Container, Row, Col } from 'react-bootstrap'
import image1 from '../assets/img/Rectangle 8 (2).png'
import image2 from '../assets/img/Ellipse 1.png'
import { Link } from 'react-router-dom'


const UserHome = () => {
  return (
    <div className='userhome'>
        <header>
            <Container>
                <Row className='header-box'>
                    <Col></Col>
                    <Col>
                    <div className='userhomeatas'>
                    <div><h1>Fiola Catering</h1></div>
                    <div style={{display: 'flex',}}>
                        <h2>Diskon 30%</h2>
                        <Link to="/UserCatering"><button>Pesan Sekarang</button></Link>
                        
                    </div>
                    <div><img src={image1} alt="" /></div>
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className='header-box-1'>
                    <Col style={{display:'flex', justifyContent:'space-evenly', marginTop:'50px'}}>
                    <div style={{display:'grid'}}><img src={image2} alt="" />Fiola Catering</div>
                    <div style={{display:'grid'}}><img src={image2} alt="" />Fiola Catering</div>
                    <div style={{display:'grid'}}><img src={image2} alt="" />Fiola Catering</div>
                    <div style={{display:'grid'}}><img src={image2} alt="" />Fiola Catering</div>
                    <div style={{display:'grid'}}><img src={image2} alt="" />Fiola Catering</div>
                    </Col>
                </Row>
                <Row className='header-box'style={{marginTop:'50px'}}>
                    <Col></Col>
                    <Col>
                        <div className='kotak' style={{marginBottom:'50px'}}>
                            <div style={{display:'flex'}}>
                                <h1>Fiola Catering</h1>
                                <Link to="/UserCatering"><button>Pesan Sekarang</button></Link>
                            </div>
                            <img src={image1} alt="" style={{width:'500px'}} />
                        </div>
                        <div className='kotak' style={{marginBottom:'50px'}}>
                            <div style={{display:'flex'}}>
                                <h1>Fiola Catering</h1>
                                <Link to="/UserCatering"><button>Pesan Sekarang</button></Link>
                            </div>
                            <img src={image1} alt="" style={{width:'500px'}} />
                        </div>
                        <div className='kotak' style={{marginBottom:'50px'}}>
                            <div style={{display:'flex'}}>
                                <h1>Fiola Catering</h1>
                                <Link to="/UserCatering"><button>Pesan Sekarang</button></Link>
                            </div>
                            <img src={image1} alt="" style={{width:'500px'}} />
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </header>
    </div>
  )
}

export default UserHome