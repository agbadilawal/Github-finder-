//the class includes the id and secret unique for this app to allow for use of api
class Github {
  constructor() {
    this.client_id = "CLIENT_ID";
    this.client_secret = "CLIENT_SECRET";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    //makes get asynchronous request
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    //gets response as json and returns it
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile, repos };
  }
}
