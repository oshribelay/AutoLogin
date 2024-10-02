document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const id = document.getElementById("id").value;

  chrome.storage.sync.set(
    {
      username: username,
      password: password,
      id: id,
    },
    () => {
      console.log("login details saved!");
      document.getElementById("loginForm").reset();
    }
  );
});
