<template>
  <div style="font-family: 'IBM Plex Serif', serif;" id="app">
    <!---------Concert one font from google-font--------->
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300&display=swap"
      rel="stylesheet"
    />
    <b-navbar
      class="nav"
      toggleable="lg"
      type="light"
      variant="light"
      fixed="top"
    >
      <b-navbar-nav>
        <!---------using route "to" to link to different pages--------->
        <b-nav-item id="home_animation" href="/">Nguyen Nguyen</b-nav-item>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#projects">Projects</b-nav-item>
          <b-nav-item href="#contact">Contact</b-nav-item>
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
            <img id="github" src="./assets/github_2.webp" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>    

    <transition name="slide" mode="out-in">
      <router-view :key="$route.path" />
    </transition>

    <div id="projects">
      <h1 style="margin-top:70px;"> Empty </h1>
    </div>
    <div id="contact">
      <h1 style="margin-top:70px;"> nvnguyen@email.sc.edu </h1>
    </div>
    
  </div>
</template>
<style lang="scss">
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
  border: 1px solid black;
  height: 100vh;
  width: 100vw;
  position: relative;
}

#contact {
  word-wrap: break-word;
  border: 1px solid black;
  height: 100vh;
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

.nav {
  position: sticky;
  padding: 10px;
  margin-right: auto;
  a {
    font-weight: bold;
    color: burl;
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

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //height: 967px;
  //border: 5px solid gray;
}

.nav::-webkit-scrollbar-track {
  background: transparent;
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
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: translate(-100%, 100%);
}

#home_animation a:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  transform: translate(100%, -100%);
}

#home_animation a:hover:before,
#home_animation a:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
