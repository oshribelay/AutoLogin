window.onload = function () {
  chrome.storage.sync.get(["username", "password", "id"], (items) => {
    if (items.username && items.password && items.id) {
      document.querySelector("input[id=Ecom_User_ID]").value = items.username;
      document.querySelector("input[id=Ecom_Password]").value = items.password;
      document.querySelector("input[id=Ecom_User_Pid]").value = items.id;

      // Automatically submit the form after filling in the details
      document.getElementById("loginButton").click();
    } else {
      console.log("no items found in storage!");
    }
  });
};
