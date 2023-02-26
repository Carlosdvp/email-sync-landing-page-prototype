<template>
  <div class="chimp_card card">
    <img :src="card.logo" class="logo-img">
    <p class="title-text">{{card.name}}</p>
    <p class="description-text">{{card.description}}</p>
    
    <form>
      <div class="multiselect">
        <div class="selectBox full-border">
          <select class="dropdown-title">
            <option> &#10003; <p>All contacts</p></option>
          </select>
          <img class="select-icon" src="../assets/triangle-down.png">
          <div class="overSelect"></div>
        </div>

        <div id="checkboxes">
          <label class="dropdown-text" for="one">
            <input  type="checkbox" id="one"> Family</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Mailchimp',
  data() {
    return {
      card: this.$store.state.cards[1]
    }
  }
}
</script>


<style scoped>

.chimp_card {
  grid-column: 1;
  grid-row: 1;
  max-height: 252px;
}

</style>