<template>
  <div
    style="font-family: 'Quicksand', sans-serif; display: inline-block;"
    id="app"
  >
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <b-navbar
      id="nav"
      toggleable="lg"
      fixed="top"
      type="light"
      style="font-size:17px;"
    >
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
            >projects & plans</b-nav-item
          >
          <b-nav-item href="#contact" style="font-weight: bold;"
            >contact</b-nav-item
          >
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            href="https://drive.google.com/file/d/1NSqNqF5OxXFHokfBU3bDkbYjNwlaPkUG/view?usp=sharing"
            target="_blank"
            style="font-weight: bold; "
          >
            Resume
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item
            href="https://www.linkedin.com/in/nguyen-n-a6b807138/"
            target="_blank"
          >
            <img id="linkedin" src="./assets/linkedin_1.png" />
          </b-nav-item>
          <b-nav-item
            href="https://github.com/nvnguyen-ki?tab=repositories"
            target="_blank"
          >
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
      <h id="header" style="color:rgb(150, 133, 133);"> CONTACT </h>
      <h1 style="margin:20px; font-size:15px; margin-top:30px;">
        feel free to reach out
        <p style=" margin-top:10px;">
          && <span style="color: rgb(125, 115, 184)"> contact </span> me for any
          reason
        </p>
        <p style="font-size:15px; margin-top:10px;">
          <span style="color:rgb(211, 90, 90); font-size:25px;"
            >nguyentwotimes@gmail.com</span
          >
        </p>
      </h1>
    </div>
    <div id="end"></div>
    <footer>
      <div id="credits" style="color: black; display">
        <span id="copyright" style=" display: inline-block;"
          >&copy; 2020 | designed by Nguyen Nguyen</span
        >
        <b-link
          style="color: black; display: inline-block;"
          v-b-modal="'my-modal'"
          ><h2
            id="link-text"
            style=" font-size:15px; text-align:right; margin:0; padding:0;"
          >
            Credits
          </h2></b-link
        >

        <b-modal id="my-modal" hide-footer>
          <template v-slot:modal-title>
            credits
          </template>
          <div class="text-center">
            <p>
              Main Tools:
              <img
                id="pic"
                v-b-popover.hover.top="'Bootstrap'"
                src="./assets/bootstrap.svg"
              />
              <img
                id="pic"
                v-b-popover.hover.top="'CSS-3'"
                src="./assets/css-3.svg"
              />
              <img
                id="pic"
                v-b-popover.hover.top="'Vue'"
                src="./assets/vue.svg"
              />
              <img
                id="pic"
                v-b-popover.hover.top="'HTML-5'"
                src="./assets/html-5.svg"
              />
              <img
                id="pic"
                v-b-popover.hover.top="'Node.js'"
                src="./assets/nodejs.svg"
              />
              <img
                id="pic"
                v-b-popover.hover.top="'Npm'"
                src="./assets/npm.svg"
              />
              <img
                id="pic"
                v-b-popover.hover.top="'Javascript'"
                src="./assets/javascript.svg"
              />
            </p>
            <p>
              Hosting:
              <img
                id="pic"
                v-b-popover.hover.top="'Amazon-Web-Services'"
                src="./assets/aws.svg"
              />
              <img
                id="pic"
                v-b-popover.hover.top="'GoDaddy'"
                src="./assets/godaddy.svg"
              />
            </p>
            <p>
              Environment:
              <img
                id="pic"
                v-b-popover.hover.top="'VS-Code'"
                src="./assets/visual-studio-code.svg"
              />
              <img
                id="pic"
                v-b-popover.hover.top="'Ubuntu'"
                src="./assets/ubuntu.svg"
              />
            </p>
            <p>
              Libraries:
              <b-link href="https://github.com/michalsnik/aos" target="_blank"
                >AOS</b-link
              >
              (for text animation)
            </p>
            <p>
              Icons:
              <b-link
                href="https://www.flaticon.com/free-icon/jupiter_2909901?term=galaxy&page=1&position=47"
                target="_blank"
                >jupiter icon</b-link
              >
              by Icongeek26
            </p>
          </div>
          <b-button
            class="mt-3"
            size="sm"
            block
            @click="$bvModal.hide('my-modal')"
            >Close Me</b-button
          >
        </b-modal>
      </div>
    </footer>
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
#copyright {
  position: relative;
}

#link-text {
  position: relative;
  left: 50%;
}

#credits {
  background: rgb(240, 239, 247);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-position: center;

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
  height: 20px;
  width: 20px;
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
