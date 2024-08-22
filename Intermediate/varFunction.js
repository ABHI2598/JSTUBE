var getUserRole = function(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; //no need of break when return
        case "Subadmin":
            return `${name} is Sub-admin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is admin with access to create and delete tests`;
            break;
        case "user":
            return `${name} is User with some access`;
            break;
        default:
            return `${name} is trail User`;
            break;
    }
}

console.log(getUserRole("abhinav", "admin"));
var getRole = getUserRole("ABHI", "user");
console.log(getRole);