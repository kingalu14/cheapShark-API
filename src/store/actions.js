
import axios from "axios";

export const setGames = async ({commit})=>{
    try {
        const games= await axios.get("https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0");
        if(games){
            commit('SET_GAMES',games.data)
        }else{
            alert("Something wrong");

        }
    } catch (error) {
        console.log(error);

    }
}
export const getGamePrice = async ({commit},game_id)=>{
    try {
        const game_prices= await axios.get("https://www.cheapshark.com/api/1.0/games?id="+game_id);
        if(game_prices){
            commit('SET_GAME',game_prices.data)
        }else{
            alert("Something wrong");

        }
    } catch (error) {
        console.log(error);

    }
}
export const setGameDetails = async ({commit},game_id)=>{
    try {
        const game_prices= await axios.get("https://www.cheapshark.com/api/1.0/deals?id="+game_id);
        if(game_prices){
            console.log(game_prices.data);
            commit('SET_GAME_DETAILS',game_prices.data)
        }else{
            alert("Something wrong");

        }
    } catch (error) {
        console.log(error);

    }
}
