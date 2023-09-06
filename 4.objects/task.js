function Student(name, gender, age) {
 this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks) {
     for (const mark of marksToAdd) {
         this.marks.push(mark);
       }
   }
}

Student.prototype.getAverage = function () {
   if (!this.marks) {
      return 0;
    }

    if (this.marks.length === 0) {
      return 0;
    }

    let sum = 0;
    for (const mark of this.marks) {
        sum += mark;
      }

    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.marks = undefined;
      this.subject = undefined;
      this.excluded = reason;
}
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2) // {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}