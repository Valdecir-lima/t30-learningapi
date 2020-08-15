class GitHubApi {
   async getFollowers(){
       let res = await fetch("https://api.github.com/users/mbfurlan15/followers")
       let json = await res.json();
       return json;
    }
}

export default class Controller {
  constructor (){
    this.git = new GitHubApi();
  }

  async listarNaTela(){
    let followers = await this.git.getFollowers();
    console.log (followers);

    let div = document.getElementById("lista-seg");
    div.innerHTML = ""

    followers.forEach((e) => {
      div.innerHTML += `<div><a target='_blank' href='${e.html_url}'> <img width='50' src='${e.avatar_url}'>   ${e.login}  </a> </div>`
    });
  }
}