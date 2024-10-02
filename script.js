window.onload = function () {
  chrome.storage.sync.get(["username", "password", "id"], (items) => {
    if (items.username && items.password && items.id) {
      document.querySelector("input[name=p_user]").value = items.username;
      document.querySelector("input[name=p_sisma]").value = items.password;
      document.querySelector("input[name=p_mis_student]").value = items.id;

      // Automatically submit the form after filling in the details
      document.querySelector("form").submit();
    } else {
      console.log("no items found in storage!");
    }
  });
};
