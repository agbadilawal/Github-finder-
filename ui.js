class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    /**
     * ! this method isn't bringing up the div"col-md-9",
     * ? suspect it to be an issue with the styling or an issue with the json file naming
     * todo refer back to this after repos video to fix it using the methods to be discussed there
     *
     *
     */
    this.profile.innerHTML = `
<div class="class card-body mb-3">
  <div class="row">
    <div class="col-md-3">
      <img class="img-fluid mb-2" src="${user.avatar_url}">
      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
    </div>
      <div class="col-md-9">
       <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.gists_url}</span>
        <span class="badge badge-success">Followers: ${user.followers_url}</span>
        <span class="badge badge-info">Following: ${user.following_url}</span>
        <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company: ${user.organizations_url}</li>
        <li class="list-group-item">Website/Blog: ${user.blog}</li>
        <li class="list-group-item">Location:${user.location}</li>
        <li class="list-group-item">Member Since:${user.created_at}</li>
      </ul>
    </div>
  </div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div class="repos"></div>`;
  }

  //show repository
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      console.log(repo);
      // output += `
      //   <div class="card card-body mb-2">
      //     <div class="row">
      //       <div class="col-md-6">
      //         <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      //         </div>
      //         <div class="col-md-6">
      //         <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
      //         <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
      //         <span class="badge badge-success">Forks: ${repo.forms_count}</span>
      //       </div>
      //     </div>
      //   </div>
      //   `;
    });

    //output repo
    document.getElementById("repos").innerHTML = output;
  }

  //show alert message
  showAlert(message, className) {
    //clear previous alerts from screen
    this.clearAlert();
    //create div for new alert
    const div = document.createElement("div");
    //add the class to the div for styling purposes
    div.className = className;
    //add text to the child of the div
    div.appendChild(document.createTextNode(message));
    //get parent element
    const container = document.querySelector(".searchContainer");
    //get element to after the parent
    const search = document.querySelector(".search");
    //insert the new div before the search element
    container.insertBefore(div, search);

    //timeout triggers the clear alert function after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  //clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    // if current alert is on screen remove it
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  //clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
