<template>
  <div class="container">
    <h1>
      Hey, I'm
      <span class="typed-text">{{ typeValue }} </span>
      <span class="cursor" :class="{ typing: typeStatus }"><p>&nbsp;</p></span>
    </h1>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "Nguyen Nguyen.",
        "a software developer.",
        "a data science enthusiast.",
        "a coder."
      ],
      typingSpeed: 80,
      erasingSpeed: 80,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<style lang="scss">
.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  word-wrap: break-word;
  font-size: 25px;
  font-weight: normal;
  span.typed-text {
    color: rgb(211, 90, 90);
  }
  span.cursor {
    display: inline-block;
    margin-left: 0px;
    margin-top: 3px;
    width: 4px;
    height: 20px;
    background-color: rgb(211, 90, 90);
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none;
  }
}
@keyframes cursorBlink {
  0% {
    background-color: rgb(211, 90, 90);
  }
  99% {
    background-color: transparent;
  }
}
</style>
