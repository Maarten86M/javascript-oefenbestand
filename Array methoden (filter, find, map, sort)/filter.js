// .filter() methode.

// wanneer handig? :
// stel je hebt een gigantische array , maar je wil alleen de studenten eruit halen die een onvoldoende hebben.
// dan krijg je alle waarde terug zoals bijvoorbeeld, naam + tel om ze te benaderen.


const studentsInfo = [
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
// we hebben alleen de gegevens nodig van de student die de FSD bootcamp doet.
// We gaan de huidige array filteren.

const bootcampStudents = studentsInfo.filter((student) => {
    return student.course === "FSD Bootcamp";
});
// uitkomt bij loggen:
//{ name: 'Henk Jansen', course: 'FSD Bootcamp', averageGrade: 7 },
//{ name: 'Marieke Smit', course: 'FSD Bootcamp', averageGrade: 7.5 }

// doormiddel van deze methode kunnen we specifiek opzoek naar namen.