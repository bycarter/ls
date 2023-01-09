function createStudent(name, year) {
  return {
    name,
    year,
    courses: {},
    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },
    listCourses() {
      let courseArr = [];
      for (let code in this.courses) {
        courseArr.push(this.courses[code]['course']);
      }
      console.log(courseArr);
    },
    addNote(code, note) {
      if (!this.courses[code]['note']) {
        this.courses[code]['note'] = note;
      } else {
        this.courses[code]['note'] += '; ' + note;
      }
    },
    updateNote(code, note) {
      this.courses[code]['note'] = note;
    },
    addCourse(course) {
      this.courses[course['code']] = {course, 'note': ''};
    },
    viewNotes() {
      for (let code in this.courses) {
        console.log(`${this.courses[code].course.name}: ${this.courses[code].note}`);
      }
    },
  };
}


// tests:
let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
console.log(foo.courses);
