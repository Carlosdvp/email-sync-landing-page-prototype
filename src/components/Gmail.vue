<template>
  <div class="gmail_card card">
    <img :src="card.logo" class="logo-img">
    <p class="title-text">{{card.name}}</p>
    <p class="description-text">{{card.description}}</p>
    
    <form>
      <div class="multiselect" :class="[ getIsClicked ? 'no-click': none ]">
        <div class="selectBox" 
            :class="{
              'not-enabled': getIsClicked,
              'full-border': !getExpanded
            }"
            @click="showCheckboxes()">
          <select class="dropdown-title">
            <option> &#10003; <p>All contacts</p></option>
          </select>
          <!-- custom select icon conditional rendering -->
          <img v-if="!getExpanded" class="select-icon" src="../assets/triangle-down.png">
          <img v-else="getExpanded" class="select-icon" src="../assets/triangle-up.png">

          <div class="overSelect"></div>
        </div>

        <div id="checkboxes" v-show="!getIsClicked">
          <label class="dropdown-text" for="one">
            <input  type="checkbox" id="one"> Family</label>
          <label class="dropdown-text" for="two">
            <input  type="checkbox" id="two"> Work Friends</label>
          <label class="dropdown-text" for="three">
            <input  type="checkbox" id="three"> Another label</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Gmail',
  data() {
    return {
      card: this.$store.state.cards[0]
    }
  },
  computed: {
    getIsClicked() {
      return this.$store.getters.getIsClicked
    },
    getExpanded() {
      return this.$store.getters.getExpanded
    }
  },
  methods: {
    showCheckboxes() {
      var checkboxes = document.getElementById('checkboxes');

      if (!this.getExpanded && !this.getIsClicked) {
        checkboxes.style.display = 'block';
        // update the 'expanded value in the store
        this.$store.dispatch('updateExpanded')
      } else {
        checkboxes.style.display = 'none';
        this.$store.dispatch('updateExpanded')
      }
    }
  }
}
</script>


<style scoped>

.gmail_card {
  grid-row: 1;
  justify-self: end;
}

.not-enabled {
  opacity: 0.4;
  pointer-events: none;
}

.no-click {
  cursor: not-allowed;
}

</style>