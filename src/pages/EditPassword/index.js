import React from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";

function EditPassword() {
  return (
    <main>
      <Header />
      <section className="title-ChatDetail">
        <img src={iconBack} alt="iconBack" className="back-chatDetail"></img>
        <h1 className="title-chatDetailUser">Edit Password</h1>
      </section>
      <section className="formEdit">
        <p className="passwordForm">Password :</p>
        <input
          type="password"
          name="password"
          className="editFormPassword"
        ></input>
      </section>
      <section className="formEdit">
        <p className="passwordForm">New Password :</p>
        <input
          type="password"
          name="newPassword"
          className="editFormNewPassword"
        ></input>
      </section>
      <section className="buttonChange">
        <button className="changePassword">Change Password</button>
      </section>
      <Footer />
    </main>
  );
}

export default EditPassword;
