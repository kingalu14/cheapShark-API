<template>
    <div class="container">
        <h1>Cheap Games Finder</h1>
        <div class="row">
        <div v-for="game in games" :key="game.gameID" class="mt-5 col-6 col-lg-4">
              <b-card
                    header="On Sale"
                    header-tag="header"
                    :title="game.external"
               >
                <b-card-text class="card-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <span>
                                   Price:
                                  {{game.cheapest}}
                                </span>
                            </div>
                            <div class="col-6">
                                <b-img :src="game.thumb" fluid :alt="game.external"></b-img>
                            </div>
                        </div>

                    </div>

                </b-card-text>
                  <router-link :to="{name:'game',params:{id:game.gameID}}" class="btn btn-sm btn-primary">Details</router-link>
            </b-card>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        created(){
            this.$store.dispatch('setGames');
        },
        computed: {
            games() {
                console.log(this.$store.getters.getGames);
                return this.$store.getters.getGames;
            },
        },
    }
</script>

<style scoped>
    .card-body{
        background-color: #42b983;
    }

</style>