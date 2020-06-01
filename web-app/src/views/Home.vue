<template>
  <div
    class="Home rounded mx-auto d-block"
    data-aos="fade-right"
    style="width: 100vw; height: auto;margin-top: 60 px; margin:auto;"
  >
    <h1 id="intro">
      <TypeEffect />
    </h1>
    <h1 id="about">about me</h1>
    <div class="image"></div>
    <div class="about-content">
      <h5 id="content">
        I am currently a senior and CS major at
        <span style="color: burlywood; margin: 0px;">
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
        Here, you'll be able to see some of my
        personal projects that I have done, have been working on, or plan to do.
      </h5>
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

#about {
  margin-top: 50px;
  position: relative;
  font-size: 20px;
  margin-bottom: 50px;
}

#content {
  width: 77%;
  margin: auto;
  margin-top: 50px;
}

#intro {
  font-size: 25px;
  margin-top: 50px;
  background-position: center center;
}

.image {
  position: relative;
  margin: auto;
  background-repeat: no-repeat;
  background-image: url("../assets/pro_pic.png");
  height: 150px;
  width: 150px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
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
