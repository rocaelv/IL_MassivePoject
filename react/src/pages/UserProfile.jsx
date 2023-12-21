// import profileimage from 'src/assets/img/Ellipse 2 (2).png'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const UserProfile = () => {
  return (
    
    
    <div className='profile-container' >
        <Container>
        <h1>Profil Saya</h1>
        <div className='profile-isi'>
            <Row>
            <Col><div style={{marginLeft:'100px'}}><img src="src/assets/img/Ellipse 2 (2).png" alt="" /></div></Col>
            <Col>
                <div style={{marginLeft:'0px'}}>
                    <div style={{margin:'5px 5px 30px 5px', fontSize:'20px'}}>Username</div>
                    <div style={{margin:'5px 5px 30px 5px', fontSize:'20px'}}>Nama</div>
                    <div style={{margin:'5px 5px 30px 5px', fontSize:'20px'}}>Email</div>
                    <div style={{margin:'5px 5px 30px 5px', fontSize:'20px'}}>No. Telepon</div>
                    <div style={{margin:'5px 5px 30px 5px', fontSize:'20px'}}>Jenis Kelamin</div>
                    <div style={{margin:'5px 5px 30px 5px', fontSize:'20px'}}>Tanggal Lahir</div>
                </div>
            </Col>
            <Col>
                <div style={{marginLeft:'-150px'}}>
                    <div style={{margin:'5px 5px 21px 5px', fontSize:'20px'}}><input type="text" /></div>
                    <div style={{margin:'5px 5px 21px 5px', fontSize:'20px'}}><input type="text" /></div>
                    <div style={{margin:'5px 5px 21px 5px', fontSize:'20px'}}><input type="text" /></div>
                    <div style={{margin:'5px 5px 25px 5px', fontSize:'20px'}}><input type="text" /></div>
                    <div style={{margin:'5px 5px 30px 5px', fontSize:'20px'}}>
                        <input type="radio" name="gender" id="male" />Laki-laki
                        <input style={{marginLeft:'50px'}} type="radio" name="gender" id="female" />perempuan
                    </div>
                    <div style={{margin:'5px 5px 30px 5px', fontSize:'20px'}}><input type="date" name="" id="" /></div>
                    <div>
                        <button style={{backgroundColor:'#4D4D4D'}}>Simpan</button>
                        <Link to="/"><button style={{backgroundColor:'#FF3131'}}>Logout</button></Link>
                    </div>
                </div>
            </Col>
            
            </Row>


        </div>
        </Container>
    </div>
  )
}

export default UserProfile