<template>
  <div id="app" >
    <div id="nav" >
      <b-navbar toggleable="lg" type="dark" variant="dark" >
        <b-navbar-nav >
           <!---------using route "to" to link to different pages--------->
          <b-nav-item id="home" to="/">Nguyen Nguyen</b-nav-item>
        </b-navbar-nav>
         <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/projects" >Projects</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
            <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" >Resume</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
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
  
  
  //height: 967px;
  //border: 5px solid gray;
}


#nav {
  padding: 10px;
  margin-right: auto;
  a {
    font-weight: bold;
    color: white;
    &.router-link-exact-active {
      color: burlywood;
    }
  }
  
  border-bottom: 1px solid black;
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
