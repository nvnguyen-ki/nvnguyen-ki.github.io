<template>
  <div
    class="rounded mx-auto d-block"
    style="width: 900px; border: 3px solid; animation: border 30s infinite; margin-top: 60px;"
  >
    <h1 id="intro">
      Hey, I'm Nguyen.
    </h1>
    <p>Software Developer & Data Science Enthusiast.</p>

    <h1 id="about">About:</h1>
    <div><b-img class="image" v-bind="mainProps" rounded="circle"></b-img></div>
    <div class="about-content">
      <h6 id="content">
        I am currently a CS major at University of South Carolina, Columbia. My
        main interest going into Computer Science has been game developement,
        but going into my senior year, I've become more interested in data
        science as well as software development. Here, you'll be able to see
        some of my personal projects that I have done or have been working on.
      </h6>
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

#content {
  margin: 50px;
}

#intro {
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-top: 50px;
  background-position: center center;
}

.image {
  position: relative;
  background-repeat: no-repeat;
  background: url("../assets/photoshopped_PIC.jpg");
  height: 190px;
  width: 190px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
}

#about {
  margin: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  position: relative;
  font-size: 20px;
}
</style>
<script>
export default {
  name: "Home",
  components: {}
};
</script>
