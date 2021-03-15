<template>
    <div>
        <div>
            <div class="col-6 col-sm-12 mt-4">
                <h1>{{gamePrices.info.title}}</h1>
                 <b-img :src="gamePrices.info.thumb" fluid ></b-img>
                <h6 class="mt-3">Cheapest Price Ever : {{gamePrices.cheapestPriceEver.price}}</h6>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="game in gamePrices.deals" :key="game.gameID" class="mt-5 col-6 col-lg-4">
                    <b-card
                            header-tag="header"
                            title=""
                    >
                        <b-card-text class="price_tag">
                            Deal Price:
                            <br>
                            {{game.price}}
                        </b-card-text>
                        <router-link :to="{name:'detail',params:{id:game.dealID}}" class="btn btn-sm btn-primary">Details</router-link>
                    </b-card>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Price",
        created(){
            const gameId = this.$route.params.id;
            this.$store.dispatch('getGamePrice',gameId);
        },
        computed: {
            gamePrices() {
                console.log(this.$store.getters.getGamePrice);
                return this.$store.getters.getGamePrice;
            },
        },
    }
</script>

<style scoped>
    .price_tag{
        text-align: center !important;
        font-weight: bold !important;
    }
    h6{

    }

</style>