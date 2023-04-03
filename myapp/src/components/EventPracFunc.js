import React, { useState } from "react";

const EventPracFunc = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className="container">
      <h1>EventPractice</h1>
      <input
        type="text"
        name="username"
        placeholder="input username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="input text"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>Confirm</button>
    </div>
  );
};

export default EventPracFunc;
