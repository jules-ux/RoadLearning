<template>
  <body>
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      rel="stylesheet"
    />

    <div class="imgCardPhotoNow">
      <img src="../assets/PhotoLoginNow.jpg" alt="" />
    </div>
    <div class="InputFieldRegister">
      <div class="TopLogoSchool">
        <img src="../assets/logo-school.png" alt="" />
      </div>
      <div class="school-description">
        <h3>Atheneum Malle • Malle</h3>
      </div>
      <div class="Inputs">
        <div class="UserInput">
          <input type="text" id="naam" placeholder="Username" />
          <input type="password" id="wachtwoord" placeholder="Password" />
        </div>
        <div class="UserPasswordForgot">
          <a href="#">Forgot Password</a>
        </div>
        <div class="UserLoginRegisterButton">
          <button @click="registerUser()">Register</button>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
template {
  overflow: hidden;
  height: fit-content;
}
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  user-select: none;
  display: flex;
}

@media (max-width: 780px) {
  body {
    overflow-y: hidden;
    object-fit: cover;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  img {
    display: none;
  }

  .InputFieldRegister > .TopLogoSchool {
    justify-content: center;
    align-self: center;
    margin-top: 15vh;
  }

  .InputFieldRegister > .Inputs > .UserLoginRegisterButton > button {
    width: 260px;
    font-size: 0.85rem;
  }
}

@media (min-width: 780px) {
  .imgCardPhotoNow {
    width: 150vw; /* 50% van viewport width */
    height: auto;
    overflow: hidden; /* meestal voor containers, niet direct nodig hier */
    object-fit: cover; /* als het een <img> is */
    display: block; /* voorkomt inline whitespace */
  }

  .InputFieldRegister > .Inputs > .UserLoginRegisterButton > button {
    width: 250px;
  }

  .imgCardPhotoNow img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Zorgt dat afbeelding wordt bijgesneden om te vullen */
    object-position: center; /* Optioneel: focus op midden van afbeelding */
    display: block;
  }

  .InputFieldRegister > .TopLogoSchool {
    justify-content: center;
    align-self: center;
    margin-top: 25vh;
  }

  .InputFieldRegister > .TopLogoSchool > img {
    height: 70px;
  }
}

.InputFieldRegister,
.InputFieldRegister > * > * {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.InputFieldRegister > .school-description {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7em;
  margin-bottom: 4vh;
}
.InputFieldRegister > .Inputs > .UserInput {
  gap: 10px;
  margin-bottom: 3vh;
  color: white;
}
.InputFieldRegister > .Inputs > .UserInput > input {
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 4px;
  height: 30px;
  width: 250px;
  text-indent: 10px;
  color: whitesmoke;
}
.InputFieldRegister > .Inputs > .UserPasswordForgot > a {
  display: flex;
  flex-direction: row;
  justify-content: left;
  color: lightgray;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-size: 0.85em;
  margin-bottom: 3vh;
}
.InputFieldRegister > .Inputs > .UserLoginRegisterButton > button {
  height: 30px;
  border-radius: 4px;
  border: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  background-color: #a16b9f;
  transition: all 100ms ease-in;
}

.InputFieldRegister > .Inputs > .UserLoginRegisterButton > button:hover {
  background-color: #653b79;
  cursor: pointer;
}
</style>

<script>
export default {
  methods: {
    registerUser() {
      const naam = document.getElementById("naam").value;
      const pass = document.getElementById("wachtwoord").value;

      // 2D array met naam en pass naast elkaar
      const gebruikers = [[naam, pass]];
      console.log(gebruikers[0][0] + " " + gebruikers[0][1]); // [[naam, pass]]
    }
  }
}
</script>
