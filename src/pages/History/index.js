import React, { useEffect, useState } from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import {
  InputGroup,
  FormControl,
  Button,
  NavDropdown,
  Form,
} from "react-bootstrap";
import "./history.css";

import image from "../../assets/image-van.jpeg";
import defaultImage from "../../assets/205.jpg";
import {
  getTransactions,
  deleteTransactions,
} from "../../utils/https/reservation";
import { useSelector } from "react-redux";

function History() {
  const token = useSelector((state) => state.auth.userData.token);
  const [data, setData] = useState([]);
  const [deleteId, setDeletId] = useState();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    getTransactions(token)
      .then((res) => {
        console.log("result", res.data.result);
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [token]);

  const handledelete = () => {
    deleteTransactions(deleteId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <main>
      <Header />
      <section className="main-section-history">
        <section className="detail-history">
          <section className="button-searchHistory">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search vehicle (ex. cars, cars name)"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroup>
            <NavDropdown title="Filter">
              <NavDropdown.Item href="#action/3.1">Type</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Data Added</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Favorite Product
              </NavDropdown.Item>
            </NavDropdown>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    // label="1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                </div>
              ))}
            </Form>
          </section>
          <section className="historyDetail">
            <p className="finishAttempt">
              Please finish your payment for vespa for Vespa Rental Jogja{" "}
            </p>
            <hr className="finishing" />
            <p className="finishAttempt">Your payment has been confirmed!</p>
            <hr className="finishing" />
          </section>
          <p className="day">A week ago</p>

          {data.length > 0 &&
            data.map((datas, idx) => {
              return (
                <>
                  <section className="detailHistory">
                    <img
                      src={defaultImage}
                      alt="imagevehicle"
                      className="imageHistoryDetail"
                    />
                    <section className="detailHistoryImage" key={idx}>
                      <p className="brandHistory">{datas.Name_Vehicle}</p>
                      <p className="dateHistory">Jan 18 to 21 2021</p>
                      {/* <p className="prepaymentHistory">
                        Prepayment : Rp.245.000
                      </p> */}
                      <p className="returnedHistory">Has been returned</p>
                    </section>
                    <section className="radioButtonHistoryImage">
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              // label="1"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                          </div>
                        ))}
                      </Form>
                    </section>
                  </section>
                </>
              );
            })}
        </section>
        <section className="new-arrivalHistory">
          <p className="title-ImageHistory">New Arrival</p>
          <section className="imageHistoryFirstCard">
            <img
              src={image}
              alt="imageHistory"
              className="imageHistoryFirst"
            ></img>
            <figcaption className="nameVehicle">
              <span className="figcaption-brand">Lamborghini</span> <br />
              <span className="figcaption-city">South Jakarta</span>
            </figcaption>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default History;
