function newUser(name,age,country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'CO';
    console.log(name,age,country);
}

newUser();
newUser('David',15,'MX');

function newAdmin(name = 'Oscar',age = 24,country = 'CL'){
    console.log(name,age,country);
}