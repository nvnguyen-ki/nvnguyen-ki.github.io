<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="black" variant="white">
        <b-navbar-nav>
          <b-nav-item id="home" to="/">Nguyen Nguyen</b-nav-item>
          <!---------using route "to" to link to different pages--------->
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <!---------transitioning from navbars--------->
    <transition name="slide" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //height: 967px;
  //border: 5px solid gray;
}

#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: burlywood;
    }
  }
  border-bottom: #2c3e50 solid 1px;
}

/* sliding effect on navbars */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.1s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform:translateX(5%);
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
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: translate(-100%, 100%);
}

#home a:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  transform: translate(100%, -100%);
}

#home a:hover:before,
#home a:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
