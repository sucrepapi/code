let courseName = 'javascript';
let coursePrice = 50;
let coursegoals = ['learn javascript', 'implement javascript'];

alert(courseName);
alert(coursePrice);
alert(coursegoals);

let course = { name: 'javascript', Price: 50, goals: ['learn javascript', 'implement javascript'] };

alert(course.name);
alert(course.Price);
alert(course.goals);

alert(course.goals[1]);

function getListItem(array, identifier) {
    let arrayElement = array[identifier];
    return arrayElement;
};

let firstGoal = getListItem(course.goals, 0);
alert(firstGoal);