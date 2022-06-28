//initialize necessary classes
const github = new Github();
const ui = new UI();
//pick the item with the searchUser id
const searchUser = document.getElementById("searchUser");
//add event listener to the searchbar record each keystroke
searchUser.addEventListener("keyup", (e) => {
  //get each keystroke
  const userText = e.target.value;
  if (userText !== "") {
    //make http call with the input data if user input not empty, call getUser on the input, return json object
    github.getUser(userText).then((data) => {
      //log not found if no user found
      if (data.message === "Not Found") {
        ui.showAlert("user not found", "alert alert-danger");
      } else {
        //call the showProfile to the ui, if user exists
        ui.showProfile(data);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile when no more user text
    ui.clearProfile();
  }
});
