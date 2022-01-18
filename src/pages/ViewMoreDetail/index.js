import React from "react";
import Footer from "../../components/layouts/Footer/Footer";
import Header from "../../components/layouts/Navbar/Navbar";
import Card from "../../components/layouts/Card/Card";

function MoreDetail() {
  return (
    <main>
      <Header />
      <section className="moreDetail">
        Popular in town
        <p className="click">Click item to see details and reservation</p>
        <section className="card-popular">
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
        <section className="card-popular">
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
        <section className="card-popular">
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
        <section className="card-popular">
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
        <p className="no-vehicle">There is no vehicle left</p>
        <Footer />
      </section>
    </main>
  );
}

export default MoreDetail;
