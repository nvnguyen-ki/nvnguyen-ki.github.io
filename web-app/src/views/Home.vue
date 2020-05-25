<template>
  <div class="home">
    <h1 id="intro">Hey, I'm Nguyen.</h1>

    <div class="bg-color"></div>

    <div class="about-content">
      <h3 id="about">About:</h3>
      <p id="content">
        I am currently a CS major at University of South Carolina, Columbia. My
        main interest going into Computer Science has been game developement,
        but going into my senior year, I've become more interested in data
        science as well as software development. Here, you'll be able to see
        some of my personal projects that I have done or have been working on.
      </p>
    </div>
    <div class="social_links">
      <b-button
        id="github"
        href="https://github.com/nvnguyen-ki?tab=repositories"
        pill
        variant="light"
      ></b-button>
      <b-button
        id="linkedin"
        href="https://www.linkedin.com/in/nguyen-n-a6b807138/"
        pill
        variant="light"
      ></b-button>
    </div>
  </div>
</template>
<style lang="scss">
#content {
  
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-bottom: 150px;
  
}
.social_links {
  border-top: 1px solid black;
  position: relative;
  margin-top: 215px;
}
#linkedin {
  background-position: center center;
  height: 40px;
  width: 40px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../assets/linkedin.png");
  margin-top: 30px;
  margin: 5px;
}
#github {
  background-position: center center;
  height: 40px;
  width: 40px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../assets/GitHub-Mark-64px.png");
  margin-top: 30px;
  margin: 5px;
}

#intro {
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-bottom: 50px;
  margin-top: 50px;
  background-position: center center;
}

.bg-color {
  background-repeat: no-repeat;
  background-image: url("../assets/photoshopped_PIC.jpg");
  background-position: center center;
  height: 300px;
  width: 40%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  left: 30%;
  top: 30%;
  border: 10px solid burlywood !important;
  margin-bottom: 50px;
}

#about {
  margin-bottom: 50px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  position: relative;
}
</style>
<script>
export default {
  name: "Home",
  components: {}
};
</script>
