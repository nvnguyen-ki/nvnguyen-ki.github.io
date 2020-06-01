<template>
  <div
    style="font-family: 'Quicksand', sans-serif; display: inline-block;"
    id="app"
  >
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <b-navbar id="nav" toggleable="lg" fixed="top" type="light">
      <b-navbar-nav>
        <!---------using href and smooth scrollings instead of routers--------->
        <b-nav-item id="home_animation" href="#app" style="font-weight: bold;"
          >nguyen nguyen</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#projects" style="font-weight: bold;"
            >projects</b-nav-item
          >
          <b-nav-item href="#contact" style="font-weight: bold;"
            >contact</b-nav-item
          >
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" style="font-weight: bold;">resume</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="https://www.linkedin.com/in/nguyen-n-a6b807138/">
            <img id="linkedin" src="./assets/linkedin_1.png" />
          </b-nav-item>
          <b-nav-item href="https://github.com/nvnguyen-ki?tab=repositories">
            <img id="github" src="./assets/github_2.webp" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!--- projects.vue --->
    <Projects id="projects" />
    <div id="contact">
      <h1 style="margin:20px;">
        -contact me for any reason-
        <p style="font-size:15px; margin-top:10px;">
          get to know me more by emailing me.
        </p>
        <p style="font-size:15px; margin-top:10px;">
          <span style="color:rgb(211, 90, 90); font-size:25px;"
            >nguyentwotimes@gmail.com</span
          >
        </p>
      </h1>
    </div>
    <div id="end"></div>
    <!-- <div id="credits">
      <img id="pic" src="./assets/bootstrap.svg" />
      <img id="pic" src="./assets/vue.svg" />
      <img id="pic" src="./assets/nodejs.svg" />
      <img id="pic" src="./assets/npm.svg" />
      <img id="pic" src="./assets/visual-studio-code.svg" />
      <img id="pic" src="./assets/javascript.svg" />
      <img id="pic" src="./assets/html-5.svg" />
      <img id="pic" src="./assets/css-3.svg" />
    </div> -->
  </div>
</template>

<script>
import Projects from "./views/Projects.vue";
export default {
  name: "App",
  components: {
    Projects
  }
};

//scroll function that shrinks navbar on scroll
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "0px";
  } else {
    document.getElementById("nav").style.padding = "10px";
  }
}
/*
// @ is an alias to /src
import TypeEffect from "@/components/TypeEffect.vue";
export default {
  name: "Home",
  data() {
    return {
      greeting: "hello"
    };
  },
  components: {
    TypeEffect
  }
};
*/
</script>

<style lang="scss">
#credits {
  background: burlywood;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(40, 37, 41);
  color: rgb(236, 234, 228);
  position: relative;
  height: auto;
}

@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400");
#nav {
  position: sticky;
  padding: 10px;
  a {
    color: burl;
    &.router-link-exact-active {
      color: burlywood;
    }
  }
  background-color: rgb(252, 249, 241);
  // Animation
  transition: 0.4s;
}
html {
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}
/*.video-intro {
  height: 600px;
  width: 600px;
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
*/

#end {
  word-wrap: break-word;
  background: rgb(233, 104, 104);
  height: 1vh;
  width: 100vw;
  position: relative;
}

#contact {
  word-wrap: break-word;
  border-top: 1px solid white;

  width: auto;
  position: relative;
}

#linkedin {
  height: 30px;
  width: 30px;
}

#pic {
  height: 15px;
  width: 15px;
  margin: 5px;
}

#github {
  height: 30px;
  width: 30px;
}

/* sliding effect on navbars */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* (home_animation bar hover effect) */
#home_animation {
  transition: all 0.35s ease;
}

#home_animation a {
  position: relative;
}

#home_animation a::before,
#home_animation a::after {
  content: "";
  height: 15px;
  width: 15px;
  position: absolute;
  transition: all 0.35s ease;
  opacity: 0;
}

#home_animation a::before {
  content: "";
  right: 0px;
  top: 0;
  border-top: 1px solid black;
  border-right: 1px solid black;
  transform: translate(-100%, 100%);
}

#home_animation a:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  transform: translate(100%, -100%);
}

#home_animation a:hover:before,
#home_animation a:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
