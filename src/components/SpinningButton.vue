<template>
  <div class="btn-group">
    <button class="arrows-btn" @click="spinTheWheel()">
      <img 
        v-if="!rotateBtn"
        src="../assets/arrows.png" 
        class="arrows" 
        :class="[ rotateBtn ? 'rotate' : 'rotate-reversal' ]">
      <img 
        v-else="rotateBtn"
        src="../assets/arrows-done.png" 
        class="arrows" 
        :class="[ !rotateBtn ? 'rotate-reversal' : 'rotate' ]">
    </button>
    <p class="title-text btn-text" v-if="!isClicked">Sync Contacts</p>
    <p class="title-text btn-text" v-else="isClicked">All done!</p>
  </div>
</template>

<script>

export default {
  name: 'SpinningButton',
  data() {
    return {
      isClicked: this.$store.getters.getIsClicked,
      rotateBtn: false
    }
  },
  methods: {
    spinTheWheel() {
      this.isClicked = !this.isClicked
      this.rotateBtn = !this.rotateBtn

      // dispatch the action to update the isClicked value in the store 
      this.$store.dispatch('changeIsClicked')
      // only dispatch this action if the value of expanded is true
      if (this.$store.state.expanded) {
        this.$store.dispatch('updateExpanded')
      }
    }
  }
}

</script>

<style scoped>

.arrows {
  width: 100%;
  height: auto;
  background-color: ghostwhite;
  border-radius: 360px;
}

.arrows-btn {
  width: 5rem;
  height: 5rem;
  border: none;
  padding: 0;
  border-radius: 360px;
  background-color: ghostwhite;
  cursor: pointer;
}

.btn-group {
  height: 7rem;
  width: 7rem;
  margin: 0 auto;
  align-self: center;
  grid-column: 1;
  grid-row: 1;
}

.btn-text {
  margin-top: 0.2rem;
  font-size: 0.8rem;
}

/************************************
  Button Animation
*************************************/

.rotate {
  animation-name: rotation;
  animation-duration: 0.3s;
  animation-direction: reverse;
}

.rotate-reversal {
  animation-name: contrarotation;
  animation-duration: 0.3s;
  animation-direction: reverse;
}

@keyframes rotation {
  0% {transform: rotate(15deg);}
  10% {transform: rotate(25deg);}
  30% {transform: rotate(45deg);}
  50% {transform: rotate(65deg);}
  70% {transform: rotate(85deg);}
  90% {transform: rotate(95deg);}
  100% {transform: rotate(180deg);}
}

@keyframes contrarotation {
  0% {transform: rotate(180deg);}
  10% {transform: rotate(160deg);}
  20% {transform: rotate(120deg);}
  30% {transform: rotate(95deg);}
  40% {transform: rotate(85deg);}
  50% {transform: rotate(65deg);}
  70% {transform: rotate(45deg);}
  90% {transform: rotate(25deg);}
  100% {transform: rotate(15deg);}
}

</style>