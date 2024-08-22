var users = {
    firstName: "Abhinav",
    lastName: "Pandey",
    role: "admin",
    loginCount: 43,
    isLoggedIn: true,
    courseList: [],
    //method declaration in objects
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    countCourses: function() {
        return `${this.firstName} is enrolled in total of  ${this.courseList.length} courses`;
    },
    info: function() {
        return `Info About user is as follows: 
        Name: ${this.firstName.concat(' '+ this.lastName)} 
        Role: ${this.role} 
        LoginCount: ${this.loginCount} 
        IsLoggedIn: ${this.isLoggedIn} 
        List of Courses: ${this.courseList}`
    }
};

var courseList = true;

console.log(users.countCourses());

users.buyCourse("React JS");
users.buyCourse("Angular");

console.log(users.countCourses());

console.table(users.info());