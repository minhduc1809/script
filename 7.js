let student = {
    name: "Duc",
    age: 19,
    grade: "CC01",
    isEnrolled: true
};

console.log(student.name);
console.log(student.age);
console.log(student.grade);
console.log(student.isEnrolled);

student.address = "65B 140 Tran Phu";
console.log(student);

student.grade = "D24";
console.log(student);

delete student.isEnrolled;
console.log(student);
