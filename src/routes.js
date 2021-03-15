const Home = require('./pages/Home.vue').default;
const Price = require('./pages/Price.vue').default;
const Detail = require('./pages/Detail.vue').default;

  export  const routes = [
    {path:'/',component:Home, name:'home'},
    {path:'/game/:id',component:Price, name:'game'},
    {path:'/deals/:id',component:Detail, name:'detail'},
  ];
