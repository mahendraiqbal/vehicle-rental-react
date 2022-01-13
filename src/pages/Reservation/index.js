import React from 'react'
import Header from '../../components/layouts/Navbar/Navbar'
import Footer from '../../components/layouts/Footer/Footer'

function index() {
    return (
        <main>
            <Header />
            <section>
                ini Section</section>    
            <Footer />
            <hr/>
            <div className="icon-footer">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-youtube"></i>
            </div>
        </main>
    )
}

export default index
