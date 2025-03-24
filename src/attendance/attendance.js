let classRoom = [
  {
    //studentObj
    //studentName
    Marnie: [
      //attendanceDayObj
      { Monday: true }, //eachDay  //dayName
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// function attendanceCheck(dayEntered) {
//   //get keys on Object
//   const indexOfDayEntered = ["Monday", "Tuesday", "Wednesday"].indexOf(
//     dayEntered
//   );

//   const nestedkeys = classRoom.map((std) => Object.keys(std));
//   const studentNames = nestedkeys.flat();

//   //acces Students dayta wich is an arary of objects
//   const studentOjects = classRoom.map((student, idx) => {
//     return student[studentNames[idx]];
//   });

//   const matches = [];
//   const studentsAttending = studentOjects.filter((day, idx) => {
//     // need the index of en
//     if (day[indexOfDayEntered][dayEntered] === true) {
//       matches.push(studentNames[idx]);
//     }
//   });

//   return matches;
// }

function attendanceCheck(dayEntered) {
  const attendingStudents = [];

  for (const studentObj of classRoom) {
    const studentName = Object.keys(studentObj)[0]; // Get the student's name
    const attendance = studentObj[studentName]; // Get the attendance array

    for (const dayAttendance of attendance) {
      if (dayAttendance[dayEntered] === true) {
        attendingStudents.push(studentName);
        break; // Once a student is found attending, no need to check other days.
      }
    }
  }
}
console.log(attendanceCheck("Wednesday"));
