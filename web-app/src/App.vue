<template>
  <div style="font-family: 'Quicksand', sans-serif;" id="app">
    <b-navbar id="nav" toggleable="lg" fixed="top" type="light">
      <b-navbar-nav>
        <!---------using href and smooth scrollings instead of routers--------->
        <b-nav-item id="home_animation" href="#app" style="font-weight: bold;"
          >Nguyen Nguyen</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#projects" style="font-weight: bold;"
            >Projects</b-nav-item
          >
          <b-nav-item href="#contact" style="font-weight: bold;"
            >Contact</b-nav-item
          >
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" style="font-weight: bold;">Resume</b-nav-item>
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

    <div id="projects">
      <h1 style="margin-top:70px;" data-aos="fade-right">Empty</h1>
    </div>
    <div id="contact">
      <h1 style="margin-top:70px;" data-aos="fade-right">
        -contact me for no reason-
      </h1>
      <p data-aos="fade-right">nguyentwotimes@gmail.com</p>
    </div>
  </div>
</template>

<script>
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
  background-color: rgb(236, 232, 222);
  // Animation
  transition: 0.4s;
}

html {
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
#projects {
  word-wrap: break-word;
  border: 1px solid white;
  height: 110vh;
  width: 100vw;
  position: relative;
}

#contact {
  word-wrap: break-word;
  border: 1px solid white;
  height: 30vh;
  width: 100vw;
  position: relative;
}

#credits {
  word-wrap: break-word;
  border: 1px solid white;
  height: 20vh;
  width: 100vw;
  position: relative;
}

#linkedin {
  height: 30px;
  width: 30px;
}
#github {
  height: 30px;
  width: 30px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(40, 37, 41);
  color: rgb(236, 234, 228);
  //height: 967px;
  //border: 5px solid gray;
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
