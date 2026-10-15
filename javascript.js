var row;
var arr;
var cell;
var c=0;
var city;
// var c = 0;

function Selectcity() {
  let city = document.getElementById("city").value;
  console.log(city);
  return city;
}

function submit() {
  Swal.fire({
    title: "Submitted...",
    text: "Data Entered",
    icon: "success"
  });

  let namee = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let city = document.getElementById("city").value;
  var genderInputs = document.getElementsByName("gender");
  var gender = "";
  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      gender = genderInputs[i].value;
      break;
    }
  }
//   var hobbyInputs = document.getElementsByName("hobby");
//   var hobbies = [];
//   for (var i = 0; i < hobbyInputs.length; i++) {
//     if (hobbyInputs[i].checked) {
//       hobbies.push(hobbyInputs[i].value);
//     }
  let table = document.getElementById("table");
  let container = document.getElementById("container");

  // clear inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("city").value = "";

  let arr = [namee, email, pass, city,gender];

  let row = document.createElement("tr");
  row.style.border = "2px solid black";

  for (let i = 0; i < arr.length; i++) {
    let cell = document.createElement("td");
    cell.innerText = arr[i];
    row.appendChild(cell);
  }

  // edit button
  let edit = document.createElement("td");
  edit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  edit.firstChild.onclick = function () {
    editRow(this);
  };
  row.appendChild(edit);

  // delete button
  let delet = document.createElement("td");
  delet.innerHTML = '<i class="fa-solid fa-trash"></i>';
  delet.firstChild.onclick = function () {
    this.parentNode.parentNode.remove();
    Swal.fire({
      icon: "error",
      title: "Deleted",
      text: "One Row Deleted"
    });
  };
  row.appendChild(delet);

  if (c > 0) {
    Swal.fire({
      title: "Updated",
      icon: "success"
    });
  }

  table.appendChild(row);
  container.appendChild(table);
}

function editRow(icon) {
  let roww = icon.parentNode.parentNode;
  let cells = roww.getElementsByTagName("td");

  document.getElementById("name").value = cells[0].innerText;
  document.getElementById("email").value = cells[1].innerText;
  document.getElementById("pass").value = cells[2].innerText;
  document.getElementById("city").value = cells[3].innerText; 
   row.insertCell(4).innerText = gender;

  c++;
  roww.remove();
}
// }
