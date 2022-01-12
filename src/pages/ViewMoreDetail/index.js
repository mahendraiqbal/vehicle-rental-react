import React from 'react';
import Footer from '../../components/layouts/Footer/Footer';
import Header from '../../components/layouts/Navbar/Navbar';
import Card from '../../components/layouts/Card/Card';

function MoreDetail() {
    return (
        <main>
            <Header />
            Popular in town
            <p className="click">Click item to see details and reservation</p>
            <Card />
            <Card />
            <Card />
            <Card />
            <p className="no-vehicle">There is no vehicle left</p>
            <Footer />
        </main>
    )
}

export default MoreDetail
