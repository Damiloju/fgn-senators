# fgn-senators

An application and api to get the details of senators of the federal repulblic of nigeria

# API endpoints

## **Get All Senators**

Returns json data with an array of senators.

- **URL**

  /api/senators

- **Method:**

  `GET`

- **URL Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `[{ name : "Senator", state: "Abt", phone:"030303", email:'email' }.....]`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/api/senators",
    dataType: "json",
    type: "GET",
    success: function(r) {
      console.log(r);
    }
  });
  ```

## **Get Senator by Name**

Returns json data with senator details.

- **URL**

  /api/senator

- **Method:**

  `GET`

- **Query Params**

  **Required:**

  `name=[string]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ name : "Senator", state: "Abt", phone:"030303", email:'email' }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Senator doesn't exist" }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/api/senator?name=anmamam",
    dataType: "json",
    type: "GET",
    success: function(r) {
      console.log(r);
    }
  });
  ```

## **Get All Senators from a state**

Returns json data with an array of senators.

- **URL**

  /api/senators/:state

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `state=[state]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `[{ name : "Senator", state: "Abt", phone:"030303", email:'email' }.....]`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/api/senators/abia",
    dataType: "json",
    type: "GET",
    success: function(r) {
      console.log(r);
    }
  });
  ```
