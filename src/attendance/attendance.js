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

function attendanceCheck(day) {
  const studentsAttending = [];

  classRoom.forEach((student, idx) => {
    const objectKeys = Object.keys(student);

    const eachStudentAttendance = student[objectKeys[0]];
    console.log(eachStudentAttendance);

    eachStudentAttendance.forEach((t) => console.log(t));
    //const values = Object.values(student);

    // student[values[idx]];
  });
  return studentsAttending;
}

console.log(attendanceCheck("Monday"));
