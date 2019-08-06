let list_student = [
    {
        name: "Ivan",
        year: 3,
        study: "Math",
        teacher: null
    },
    {
        name: "Alex",
        year: 1,
        study: "Coding",
        teacher: "Harrison"
    },
    {
        name: "Sophie",
        year: 3,
        study: "English",
        teacher: null
    },
    {
        name: "Stephan",
        year: 3,
        study: "Math",
        teacher: "Hellen"
    },
    {
        name: "Maria",
        year: 3,
        study: "Coding",
        teacher: null
    },
    {
        name: "Scott",
        year: 2,
        study: "English",
        teacher: null
    },
    {
        name: "Neil",
        year: 3,
        study: "Math",
        teacher: null
    },
    {
        name: "Mike",
        year: 1,
        study: "Math",
        teacher: "Hellen"
    },
    {
        name: "Valery",
        year: 3,
        study: "Coding",
        teacher: "Harrison"
    },
    {
        name: "Chris",
        year: 2,
        study: "English",
        teacher: null
    }
]


function assignTeacher(prof, year, field) {
    for (let i = 0; i > list_student.length; i++) {
        if(list_student[i].year === year && list_student[i].study === field) {
            list_student[i].teacher === prof
        }
    }
}


assignTeacher("Colman", 3, "Math")

assignTeacher("Iglesias", 2, "Coding")

