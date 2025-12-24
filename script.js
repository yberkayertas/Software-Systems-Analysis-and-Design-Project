let courses = JSON.parse(localStorage.getItem("courses")) || [
    "Software Engineering",
    "Database Systems",
    "Web Programming"
];

let registered = JSON.parse(localStorage.getItem("registered")) || [];

// Elements
const loginBox = document.getElementById("loginBox");
const studentPanel = document.getElementById("studentPanel");
const adminPanel = document.getElementById("adminPanel");

const courseList = document.getElementById("courseList");
const courseSelect = document.getElementById("courseSelect");
const registeredCourses = document.getElementById("registeredCourses");
const adminCourseList = document.getElementById("adminCourseList");

// Login
function login() {
    const role = document.getElementById("role").value;

    loginBox.classList.add("hidden");

    if (role === "student") {
        studentPanel.classList.remove("hidden");
        loadCourses();
        loadRegistered();
    } else {
        adminPanel.classList.remove("hidden");
        loadAdminCourses();
    }
}

function logout() {
    studentPanel.classList.add("hidden");
    adminPanel.classList.add("hidden");
    loginBox.classList.remove("hidden");
}

// STUDENT FUNCTIONS
function loadCourses() {
    courseList.innerHTML = "";
    courseSelect.innerHTML = "";

    courses.forEach(course => {
        let li = document.createElement("li");
        li.textContent = course;
        courseList.appendChild(li);

        let option = document.createElement("option");
        option.textContent = course;
        courseSelect.appendChild(option);
    });
}

function enrollCourse() {
    const selected = courseSelect.value;

    if (registered.includes(selected)) {
        alert("Already enrolled!");
        return;
    }

    registered.push(selected);
    localStorage.setItem("registered", JSON.stringify(registered));
    loadRegistered();
}

function loadRegistered() {
    registeredCourses.innerHTML = "";

    registered.forEach(course => {
        let li = document.createElement("li");
        li.textContent = course;
        registeredCourses.appendChild(li);
    });
}

// ADMIN FUNCTIONS
function addCourse() {
    const newCourse = document.getElementById("newCourse").value;

    if (newCourse === "") return;

    courses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(courses));
    document.getElementById("newCourse").value = "";
    loadAdminCourses();
}

function loadAdminCourses() {
    adminCourseList.innerHTML = "";

    courses.forEach(course => {
        let li = document.createElement("li");
        li.textContent = course;
        adminCourseList.appendChild(li);
    });
}
