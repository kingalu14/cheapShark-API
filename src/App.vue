<template>
  <div id="app">
    <div class="container">
       <div class="row">
           <div class="col-md-12 col-xs-12">


               <router-view></router-view>
           </div>

       </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#1b262c;
  background-size: 100% 100%;
  height: 100%;
}
    h1{
        color: #fdcb9e;
        font-size:1.9rem !important;
        font-weight: bold !important;
    }

    h6{
        color: #fdcb9e;
        font-weight: bold !important;
    }
</style>
