document.querySelector("form").addEventListener("submit", function (e) {
  const form = document.querySelector("form").elements;

  fetch(
    form.username.value,
    form.password.value,
    form.age.value,
    form.email.value,
    form.ismale.value,
    form.isfemale.value,
  );
  e.preventDefault();
});

function fetch(username, password, age) {
  console.log(username + password + email + age + ismale);
}
