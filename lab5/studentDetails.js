const fs = require('fs');

let Student = [
  {
    'id': 216240316030,
    'name': 'John',
    'age': 20,
    'gender': 'Male',
    'spi': 8.8
  },
  {
    'id': 216240316031,
    'name': 'Jane',
    'age': 21,
    'gender': 'Female',
    'spi': 4.9
  },
  {
    'id': 216240316032,
    'name': 'abhay',
    'age': 22,
    'gender': 'Male',
    'spi': 9.0
  }
];


let studentDetails = Student.map((student) => {
  return `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Gender: ${student.gender}, Spi: ${student.spi}`;
}).join('\n');

fs.writeFile('Student_Details.txt', studentDetails, (err) => {
  if (err) {
    throw err.message;
  }
});