// .find() methode.
//De find() methode geeft de eerste waarde terug die voldoet aan de conditie die gesteld is.
// Dit is enkel handig wanneer je specifiek opzoek bent naar iemand zijn gegevens.

// voorbeeld 1:
const studentsSchool = [
    {
        name: 'Henk Jansen',
        course: 'FSD Bootcamp',
        averageGrade: 7,
    },
    {
        name: 'Piet Pieters',
        course: 'HBO Software development',
        averageGrade: 6,
    },
    {
        name: 'Marieke Smit',
        course: 'FSD Bootcamp',
        averageGrade: 7.5,
    },
];

const findStudent = studentsSchool.find((student) => {
    return student.name === 'Marieke Smit';
}) // uitkomst na loggen: { name: 'Marieke Smit', course: 'FSD Bootcamp', averageGrade: 7.5 }

