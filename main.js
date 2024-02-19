let registerForm = document.querySelector(".registerForm");
let list = [];
registerForm.onsubmit = function (e) {
    e.preventDefault();
    const element = e.target.elements['task'].value;
    if (element) {
        list.push(element);
        console.log(list);
        printData();
    }
};

function printData() {
    const result = list.map(function (ele) {
        return ` <li class=task>
       <input type="checkbox" class="check" onchange="done(this)"/>
       <span class="info">${ele}</span>
        </li>
        `
    }).join("");
    document.querySelector(".list").innerHTML = result;

}

function done(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.classList.toggle("doneTask");

}


