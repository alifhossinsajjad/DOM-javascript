document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    const pageTitleEliment = document.getElementById("page-title");
    pageTitleEliment.innerText = "It is ok in Event hadler";
  });

document.getElementById("btn-login").addEventListener("click", function () {
  const userInfoEl = document.getElementById("user-info");
  userInfoEl.innerText = "Log In sucessfully";
});

document.getElementById("btn-singup").addEventListener("click", function () {
  const singInEl = document.getElementById("user-info");
  singInEl.innerText = "Please sing in you gmail account";
});
