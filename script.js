const dateofbirth = document.getElementById("dob");
const todaydate = new Date().toISOString().slice(4, 10);

const year = new Date().getFullYear();

dateofbirth.min = `${year - 55}${todaydate}`;
dateofbirth.max = `${year - 18}${todaydate}`;

let entryusers = [];
let condition = true;

function submitListener(event) {
  event.preventDefault();
  document.getElementById("showdata").innerHTML = "";
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let acceptTerms = document.getElementById("tickmark").checked;

  let entries = {
    name,
    email,
    password,
    dob,
    acceptTerms,
  };
  if (condition) {
    let user = [];
    user = JSON.parse(localStorage.getItem("user-entries")) || [];
    for (let i = 0; i < user.length; i++) {
      entryusers.push(user[i]);
    }
    condition = false;
  }
  entryusers.push(entries);
  localStorage.setItem("user-entries", JSON.stringify(entryusers));
  showdata();
}
function showdata() {
  let user = JSON.parse(localStorage.getItem("user-entries")) || [];
  for (let i = 0; i < user.length; i++) {
    let result = `<tr>
    <td class="py-3 px-2">${user[i].name}</td>
    <td class="py-3 px-2">${user[i].email}</td>
    <td class="py-3 px-2">${user[i].password}</td>
    <td class="py-3 px-2">${user[i].dob}</td>
    <td class="py-3 px-2">${user[i].acceptTerms}</td>
  </tr>`;
    document.getElementById("showdata").innerHTML += result;
  }
}
showdata();