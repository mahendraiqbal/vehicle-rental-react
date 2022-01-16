import React from "react";
import "./chatList.css";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";

import userPhoto from '../../assets/img-profile.png'

function index() {
  return (
    <main>
      <Header />
      <section className="search-barChat">
        <input
          type="text"
          name="search"
          id="search"
          className="searchChat"
          placeholder="Search Chat"
        ></input>
        <select  name="sort" className="sort-by">
          <option value="sortby">Sort By</option>
          <option value="readDate">Read Date</option>
          <option value="dateAdded">Date Added</option>
          <option value="nameChat">Name</option>
        </select>
      </section>
      <section className="chat-chatList">
          <img src={userPhoto} alt="userPhoto" className="photoUser"></img>
          <section className="chatting">
              <p className="userName">User 1</p>
              <p className="userChatting">Hey, is the vespa still available?</p>
          </section>
          <p className="dayChat">Just now</p>
      </section>
      <section className="chat-chatList">
          <img src={userPhoto} alt="userPhoto" className="photoUser"></img>
          <section className="chatting">
              <p className="userName">User 2</p>
              <p className="userChatting">Thank you</p>
          </section>
          <p className="dayChat">Yesterday</p>
      </section>
      <section className="chat-chatList">
          <img src={userPhoto} alt="userPhoto" className="photoUser"></img>
          <section className="chatting">
              <p className="userName">User 1</p>
              <p className="userChatting">Hey, is the vespa still available?</p>
          </section>
          <p className="dayChat">Just now</p>
      </section>
      <section className="chat-chatList">
          <img src={userPhoto} alt="userPhoto" className="photoUser"></img>
          <section className="chatting">
              <p className="userName">User 2</p>
              <p className="userChatting">Hey, is the vespa still available?</p>
          </section>
          <p className="dayChat">Yesterday</p>
      </section>
      <Footer />
    </main>
  );
}

export default index;
