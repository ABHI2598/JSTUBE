var User = function(firstName, CourseCount) {
    this.firstName = firstName;
    this.CourseCount = CourseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.CourseCount}`);
    }
}

User.prototype.getFirstName = function() {
    console.log(`Your first name is: ${this.firstName}`);
}

var abhinav = new User("Abhinav Pandey", 2);
abhinav.getCourseCount();

if (abhinav.hasOwnProperty("firstName")) {
    abhinav.getFirstName();
}

// console.log(abhinav);


var abhi = new User("Abhinav", 22);
abhi.getCourseCount();
abhi.getFirstName();

// console.log(abhi);