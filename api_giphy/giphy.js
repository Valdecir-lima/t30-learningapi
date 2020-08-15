class GIPHY {
    async getSearchGif(){ 
        let buscador = document.getElementById("name").value;
        let arr = buscador.split(' ')
        console.log(arr)
        let string = arr.join('%20')
        console.log(string)

        let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=8EKkIzowX7jKwpY6J49YzqmqW3CdLfCl&q=${string}&limit=12&offset=0&rating=g&lang=en`)
        let json = await res.json();
        return json;
        
     }
 }
 
 export default class Controller {
   constructor (){
     this.giphy = new GIPHY();
   }
 
   async listarNaTela(){
     let buscador = await this.giphy.getSearchGif();
     console.log (buscador);
 
     let div = document.getElementById("lista");
     div.innerHTML=""
     buscador.data.forEach((e) => {
        div.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3 my-2"><img width='250' src='${e.images.downsized.url}'></img></div>`
     });

 
   }
 }