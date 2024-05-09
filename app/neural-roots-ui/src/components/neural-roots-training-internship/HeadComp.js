import React from "react"
import { Container } from "react-bootstrap"

const Head = () => {
  return (
    <>
      <section id="training-internship-head">
        <Container>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-instagram '></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-youtube'></i>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Head