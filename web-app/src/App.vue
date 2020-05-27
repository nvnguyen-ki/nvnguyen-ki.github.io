<template>
  <div style="font-family: 'IBM Plex Serif', serif;" id="app">
    <!---------Concert one font from google-font--------->
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300&display=swap"
      rel="stylesheet"
    />
    <b-navbar id="nav" toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <!---------using route "to" to link to different pages--------->
        <b-nav-item id="home" to="/">Nguyen Nguyen</b-nav-item>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Resume</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="https://www.linkedin.com/in/nguyen-n-a6b807138/">
            <img id="linkedin" src="./assets/linkedin_1.png" />
          </b-nav-item>
          <b-nav-item href="https://github.com/nvnguyen-ki?tab=repositories">
            <img id="github" src="./assets/github.svg" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-------
      <video class="video-intro" autoPlay muted="" loop>
        <source src="./assets/bamboo_1.mp4" type="video/mp4"/>
      </video>
    --transitioning from navbars--------->
    <transition name="slide" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<style lang="scss">
/*.video-intro {
  height: 600px;
  width: 600px;
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
*/

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
  margin: auto;
}

#nav {
  padding: 10px;
  margin: auto;
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: burlywood;
    }
  }
  //-webkit-background-size: cover;
  //-moz-background-size: cover;
  //-o-background-size: cover;
  //background-size: cover;
  //background-position: center center;
}

/* sliding effect on navbars */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.1s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(5%);
}

/* (home bar hover effect) */
#home {
  transition: all 0.35s ease;
}

#home a {
  position: relative;
}

#home a::before,
#home a::after {
  content: "";
  height: 15px;
  width: 15px;
  position: absolute;
  transition: all 0.35s ease;
  opacity: 0;
}

#home a::before {
  content: "";
  right: 0px;
  top: 0;
  border-top: 2px solid white;
  border-right: 2px solid white;
  transform: translate(-100%, 100%);
}

#home a:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  transform: translate(100%, -100%);
}

#home a:hover:before,
#home a:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
