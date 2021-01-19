import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "http://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "911112",
    gender: "남자",
    job: "학생",
  },
  {
    id: 2,
    image: "http://placeimg.com/64/64/2",
    name: "김길동",
    birthday: "911122",
    gender: "여자",
    job: "파이터",
  },
  {
    id: 3,
    image: "http://placeimg.com/64/64/3",
    name: "박찬호",
    birthday: "921112",
    gender: "남자",
    job: "코딩만한느 사람",
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "Wolrd Wide Web!!" },
    };
  }

  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
