let express = require("express");
let app = express();

// Question 1:
// Create an endpoint that takes a number as a query parameter and returns whether the number is a whole number or not.
app.get("/check-whole-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result;

  if (number >= 0) {
    result = "number is a whole number";
  } else {
    result = "number is not a whole number";
  }

  res.send(result);
});

// Question 2:
// Create an endpoint that takes two numbers as a query parameter and returns whether the numbers are equal or not.
app.get("/check-equal", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result;

  if (num1 === num2) {
    result = "numbers are equal";
  } else {
    result = "numbers are not equal";
  }

  res.send(result);
});

// Question 3:
// Create an endpoint that takes a boolean query parameter indicating if a user is active and returns 'User is Active' or 'User is not Active'.
app.get("/check-active", (req, res) => {
  let isActive = req.query.isActive === "true";
  let result;

  if (isActive) {
    result = "User is Active";
  } else {
    result = "User is not Active";
  }

  res.send(result);
});

// Question 4:
// Create an endpoint that takes a user's cost of goods bought as a query parameter and returns 'User is eligible for a discount' if the cost is over 1000, otherwise 'User is not eligible for a discount'.
app.get("/check-discount", (req, res) => {
  let cost = parseFloat(req.query.cost);
  let result;

  if (cost > 1000) {
    result = "User is eligible for a discount";
  } else {
    result = "User is not eligible for a discount";
  }

  res.send(result);
});

// Question 5:
// Create an endpoint that takes work experience (in years) as a query parameter and returns whether the person is experienced, fresher, or non-working.
app.get("/check-experience", (req, res) => {
  let workExperience = parseFloat(req.query.workExperience);
  let result;

  if (workExperience > 0) {
    result = "Person is experienced";
  } else {
    result = "Person is fresher";
  }

  res.send(result);
});

// Question 6:
// Create an endpoint that takes the result as a query parameter and returns whether the grade is Grade A (above 80), B (between 50 to 80), or Fail (below 50).
app.get("/check-result", (req, res) => {
  let result = parseFloat(req.query.result);
  let grade;

  if (result > 80) {
    grade = "The Grade is A";
  } else if (result >= 50) {
    grade = "The Grade is B";
  } else {
    grade = "Fail";
  }

  res.send(grade);
});

// Question 7:
// Create an endpoint that takes the number of steps as a query parameter and returns whether the student’s attendance is low (less than 50 classes), moderate (50 to 90 classes), or high (more than 90 classes).
app.get('/check-attendance', (req, res) => {
  let attendance = parseInt(req.query.attendance);
  let result;

  if (attendance < 50) {
    result = "Attendance is low";
  } else if (attendance <= 90) {
    result = "Attendance is moderate";
  } else {
    result = "Attendance is high";
  }

  res.send(result);
});

// Question 8:
// Create an endpoint that takes the number of stars a restaurant has as a query parameter and returns whether the restaurant rating is low (less than 3 stars), medium (3 or 4 stars), or high (5 stars).
app.get('/check-rating', (req, res) => {
  let stars = parseFloat(req.query.stars);
  let result;

  if (stars < 3) {
    result = "Rating is low";
  } else if (stars <= 4) {
    result = "Rating is moderate";
  } else {
    result = "Rating is High";
  }

  res.send(result);
});

// port number
let port = 8000;
// server start here
app.listen(port, () => {
  console.log("Server is running on port number is " + port);
});
