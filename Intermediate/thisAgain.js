var users = {
    firstName: "ABHINAV",
    courseCount: 4,
    getCourseCount: function() {
        console.log("LINE 5", this);

        function sayHello() {
            console.log("HELLO ");
            console.log("LINE 8", this);
        }
        sayHello();
    }

}

users.getCourseCount();