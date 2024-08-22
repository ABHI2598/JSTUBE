var user = "admin";

switch (user) {
    case "admin":
        console.log("Yu get full access");
        break;
    case "subadmin":
        console.log("yu can create/delete courses");
        break;
    case "testprep":
        console.log("yu can create/delete tests");
        break;
    case "user":
        console.log("Yu Can get some accesss");
        break;

    default:
        console.log("Trial user");
        break;
}