<template>
  <div
    class="Home rounded mx-auto d-block"
    data-aos="fade-right"
    style="width: 100vw; height: auto;margin-top: 60 px; margin:auto;"
  >
    <h1 id="intro">
      <TypeEffect />
    </h1>
    <div id="about-content">
      <div id="content">
        <h5>
          <h1
            style="border-bottom:1px solid; font-size:28px; color: rgb(212, 160, 130); border-color:white;"
          >
            a little bit about me
          </h1>
          I'm currently a senior and CS major at
          <span style="color: rgb(197, 236, 175); margin: 0px;">
            University of South Carolina,
          </span>
          Columbia. My main interest going into Computer Science has been
          <span style="color: rgb(197, 236, 175); margin: 0px;">
            game/software development,
          </span>
          but going into my senior year, I've become more interested in
          <span style="color: rgb(197, 236, 175); margin: 0px;">
            data science,
          </span>
          as well as
          <span style="color: rgb(197, 236, 175); margin: 0px;">
            UI/UX and frontend designing.
          </span>
          Here, you'll be able to see some of my personal projects that I have
          done, been working on, or plan to do.
        </h5>
      </div>
      <div class="image" v-b-popover.hover.top="'Me before 2020'">
        <img src="../assets/pro_pic.png" width="150" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// animations for border and text colors
/*@-webkit-keyframes border {
  0% {
    border-color: rgb(241, 41, 81);
  }
  20% {
    border-color: orange;
  }
  40% {
    border-color: rgb(123, 250, 201);
  }
  60% {
    border-color: green;
  }
  80% {
    border-color: DarkBlue;
  }
  100% {
    border-color: rgb(241, 41, 81);
  }
}

@-webkit-keyframes text-color {
  0% {
    color: rgb(241, 41, 81);
  }
  20% {
    color: orange;
  }
  40% {
    color: rgb(123, 250, 201);
  }
  60% {
    color: green;
  }
  80% {
    color: DarkBlue;
  }
  100% {
    color: rgb(241, 41, 81);
  }
}
*/
// margin:auto will center the div

#about-content {
  display: flex;
  margin: auto;
  width: 70%;
  position: relative;
}
.image {
  margin: auto;

  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  color: white;
  box-shadow: 10px 10px rgb(161, 161, 161);
  transition: all 0.4s ease;
}

.image:hover {
  opacity: 0.9;
}

#content {
  width: 85%;
  text-align: left;
  position: relative;
  margin-top: 25px;
}

#intro {
  font-size: 25px;
  margin-top: 50px;
  background-position: center center;
  margin-bottom: 150px;
}
// responsiveness for mobile
@media screen and (max-width: 1250px) {
  #about-content {
    display: inline;
    position: relative;
  }

  .image {
    margin-top: 100px;
    border: none;
    margin-bottom: 0px;
    box-shadow: none;
  }

  #content {
    margin: auto;
    width: 70%;
    text-align: left;
    position: relative;
  }

  #projects {
    margin-top: 20px;
  }
}
</style>

<script>
import TypeEffect from "../components/TypeEffect.vue";
export default {
  name: "Home",
  components: {
    TypeEffect
  }
};
</script>
