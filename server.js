const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello/", function (req, res) {
  res.send({ message: "Hello Express!" });
});

app.get("/api/customers", function (req, res) {
  setTimeout(function () {
    res.send([
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
        job: "코딩만하는 사람",
      },
    ]);
  }, 2000);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
