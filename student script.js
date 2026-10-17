
// Array
let students = JSON.parse(localStorage.getItem("students")) || [];

// Constant
const university = "IIUC";

// Show Student History
function showHistory() {

    let history = document.getElementById("studentHistory");

    history.innerHTML = "";

    if (students.length == 0) {

        history.innerText = "No student added yet.";

    }

    else {

        for (let i = 0; i < students.length; i++) {

            history.innerHTML =
                history.innerHTML +
                "Name: " + students[i].name +
                "<br>ID: " + students[i].id +
                "<br>Department: " + students[i].department +
                "<br><br>";
        }
    }
}

// Show History
showHistory();

// Add Student Function
function addStudent() {

    let name =
        document.getElementById("newName").value;

    let id =
        document.getElementById("newId").value;

    let department =
        document.getElementById("newDepartment").value;

    if (name == "" || id == "" || department == "") {

        document.getElementById("addMessage").innerText =
            "Please enter all information.";

    }

    else {

        let student = {

            name: name,
            id: id,
            department: department

        };

        students.push(student);

        localStorage.setItem("students", JSON.stringify(students));

        document.getElementById("addMessage").innerText =
            "Student added successfully.";

        showHistory();

        document.getElementById("newName").value = "";
        document.getElementById("newId").value = "";
        document.getElementById("newDepartment").value = "";
    }
}

// Search Student Function
function searchStudent() {

    let id =
        document.getElementById("searchId").value;

    let result =
        document.getElementById("searchResult");

    for (let i = 0; i < students.length; i++) {

        if (students[i].id == id) {

            result.innerHTML =
                "Name: " + students[i].name +
                "<br>ID: " + students[i].id +
                "<br>Department: " + students[i].department;

            return;
        }
    }

    result.innerText =
        "Student not found.";
}

// Remove Student Function
function removeStudent() {

    let id =
        document.getElementById("removeId").value;

    for (let i = 0; i < students.length; i++) {

        if (students[i].id == id) {

            students.splice(i, 1);

            localStorage.setItem("students", JSON.stringify(students));

            document.getElementById("removeMessage").innerText =
                "Student removed successfully.";

            showHistory();

            return;
        }
    }

    document.getElementById("removeMessage").innerText =
        "Student not found.";
}

// Notice Function
function submitNotice() {

    let noticeText =
        document.getElementById("noticeText").value;

    if (noticeText == "") {

        document.getElementById("notice").innerText =
            "Please write a notice.";

    }

    else {

        document.getElementById("notice").innerText =
            noticeText;

        document.getElementById("noticeText").value = "";
    }
}

function logout() {

    window.location.href = "login.html";
}
