import React, { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleForm = (e) => {
    setFormInfo({ ...formInfo, [e.target.id]: e.target.value });
  };

  return (
    <section className="new-form">
      <h4>New form Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name </label>
          <input onChange={handleForm} type="text" id="firstName" value={formInfo.firstName}/>
          <pre/>
          <label htmlFor="lastName">Last Name </label>
          <input onChange={handleForm} type="text" id="lastName" value={formInfo.lastName}/>
          <pre/>
          <label htmlFor="phone">Telephone </label>
          <input onChange={handleForm} type="tel" id="phone" value={formInfo.phone}/>
          <pre/>
          <label htmlFor="email">Email </label>
          <input onChange={handleForm} type="email" id="email" value={formInfo.email}/>
          <pre/>
        </form>
        <article>
          <h5>{formInfo.firstName}</h5>
          <h5>{formInfo.lastName}</h5>
          <h5>{formInfo.phone}</h5>
          <h5>{formInfo.email}</h5>
        </article>
      </div>
    </section>
  );
};

export default NewClient;
