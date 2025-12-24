const courses = [
    "Software Engineering",
    "Database Systems",
    "Web Programming",
    "Operating Systems"
];

let registered = [];

const courseList = document.getElementById("courseList");
const courseSelect = document.getElementById("courseSelect");
const registeredCourses = document.getElementById("registeredCourses");

// Show available courses
courses.forEach(course => {
    let li = document.createElement("li");
    li.textContent = course;
    courseList.appendChild(li);

    let option = document.createElement("option");
    option.textContent = course;
    courseSelect.appendChild(option);
});

// Enroll function
function enrollCourse() {
    const selectedCourse = courseSelect.value;

    if (registered.includes(selectedCourse)) {
        alert("You are already enrolled in this course!");
        return;
    }

    registered.push(selectedCourse);
    updateRegisteredCourses();
}

// Update registered courses list
function updateRegisteredCourses() {
    registeredCourses.innerHTML = "";

    registered.forEach(course => {
        let li = document.createElement("li");
        li.textContent = course;
        registeredCourses.appendChild(li);
    });
}
