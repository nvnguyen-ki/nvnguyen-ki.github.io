<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="black" variant="white">
      <b-navbar-nav>
            <b-nav-item id="home" href="/">Nguyen Nguyen</b-nav-item>
            <b-nav-item href="/projects">Projects</b-nav-item>
            <b-nav-item href="/contact">Contact</b-nav-item>
      </b-navbar-nav>
       </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 47px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #31a06e;
    }
  }
}

// (home bar hover effect)
#home {
  
  transition: all .35s ease;
}

#home a {
  position: relative;
}

#home a::before,
#home a::after {
  content: '';
  height: 15px;
  width: 15px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

#home a::before {
  content: '';
  right : 0px;
  top: 0;
  border-top: 2px solid #3E8914;
  border-right: 2px solid #2E640F;
  transform: translate(-100%, 100%);
}

#home a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 2px solid #2E640F;
  border-left: 2px solid #3E8914;
  transform: translate(100%, -100%)
}

#home a:hover:before,
#home a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}
// (end of hover effect)
</style>
