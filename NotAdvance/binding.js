// Funtion borrowing

let name = {
    firstName: "Abhinav",
    lastName: "Pandey",
    role: "Admin",
    courseCount: 3,
    getInfo: function(location) {
        console.log(`

          First name is ${this.firstName}
          Last name is ${this.lastName}
          Role is ${this.role}
          CourseCount is ${this.courseCount}
          location is ${location}
        
        `);
    }
}

let dj = {
    firstName: "Abhi",
    lastName: "P",
    role: "subAdmin",
    courseCount: 3
};


//Bind stores reference of method which can be used later ifwe want to use that method in later parts
var djInfo = name.getInfo.bind(dj);
djInfo();

//CALL just directly calls the function which we want  to borrow i.e. getInfo();
name.getInfo.call(dj, "mumbai");


//apply is same as call but we use arraylistin apply method if we pass more than one params.
name.getInfo.apply(dj, ["mumbai"]);