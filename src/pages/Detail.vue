<template>
    <div>
        <div class="mt-4">
            <h1>{{details.gameInfo.name}}</h1>
            <div>
                <b-card
                        :img-src="details.gameInfo.thumb" :img-alt="details.gameInfo.name" img-left class="mb-3">
                    <b-card-text>

                        <span>Cheapest Price : {{details.cheapestPrice.price}}</span>
                        <br>
                        <span>Retail Price : {{details.gameInfo.retailPrice}} </span>
                        <br>
                        <span>Reting : {{details.gameInfo.steamRatingText}} </span>
                        <br>
                        <span>Reting Percent : {{details.gameInfo.steamRatingPercent}} %</span>
                        <br>
                        <br>

                    </b-card-text>
                </b-card>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        created(){
            const gameId = this.$route.params.id;
            this.$store.dispatch('setGameDetails',gameId);
        },
        computed: {
            details() {
                console.log(this.$store.getters.getGameDetails);
                return this.$store.getters.getGameDetails;
            },
        },
    }
</script>

<style scoped>

</style>