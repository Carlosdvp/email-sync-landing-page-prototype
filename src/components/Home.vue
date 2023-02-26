<template>
  <div class="container">
    <div class="gmail-card_container">
      <Gmail />
    </div>
    <div class="btn-group_container">
      <SpinningButton />
    </div>
    <div class="chimp-card_container">
      <Mailchimp />
    </div>
  </div>
</template>

<script>

import Gmail from './Gmail.vue'
import SpinningButton from './SpinningButton.vue'
import Mailchimp from './Mailchimp.vue'

export default {
  name: 'Home',
  components: {
    Gmail,
    SpinningButton,
    Mailchimp
  }
}

</script>


<style>

.container {
  display: grid;
  grid-template-columns: 2fr 0.5fr 2fr;
  grid-template-rows: 80px 2fr 1fr;
  background-image: url("../assets/Blob.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 380px;
  max-height: 420px;
  min-height: 350px;
  min-width: 1004px;
  max-width: 1005px;
  margin: 0 auto;
  color: rgb(100,100,100);
}

/****************************************************
  CARDS
*****************************************************/

.chimp-card_container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column: 3;
  grid-row: 2/3;
}
.gmail-card_container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column: 1;
  grid-row: 2/3;
}
.btn-group_container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column: 2;
  grid-row: 2/3;
  max-height: 228px;
}

.card {
  border: 3px solid rgb(235,235,235);
  background-color: white;
  height: 100%;
  width: 48%;
  min-width: 200px;
  padding-bottom: 0.9rem;
}

.title-text {
  font-size: 0.9rem;
  margin-top: 0;
}

.description-text {
  font-size: 0.8rem;
  padding: 0.2rem 1.5rem;
  font-weight: 300;
  text-align: center;
}

.logo-img {
  padding: 3rem 0 0 0;
  height: 50px;
}

/****************************************************
  DROPDOWN
*****************************************************/

.dropdown-title {
  font-size: 0.8rem;
  padding: .5rem;
  color: rgb(100,100,100);
  margin-left: 1rem;
}

.dropdown-text {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  font-weight: 300;
  text-align: left;
}

.multiselect {
  width: 90%;
  padding: 0.5em;
  cursor: pointer;
}

.selectBox {
  position: relative;
}

.selectBox select {
  width: 81%;
  background-color: rgb(248,248,248);
  border: 1px solid rgb(220,220,220);
  border-bottom: rgb(248,248,248);
}

select {
  appearance: none;
}

.select-icon {
  width: 10px;
  transform: translateX(-1.5em);
}

.full-border select {
  border: 1px solid rgb(220,220,220);
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#checkboxes {
  display: none;
  text-align: left;
  width: 80%;
  margin: 0 1.34em;
  background-color: rgb(248,248,248);
  border: 1px solid rgb(220,220,220);
  border-top: rgb(248,248,248);
  padding-bottom: 0.5em;
}

#checkboxes label {
  display: block;
}

#checkboxes label:hover {
  background-color: rgb(235,235,235);
  cursor: pointer;
}

input[type="checkbox"] {
  accent-color: rgb(200,200,200);
}

</style>