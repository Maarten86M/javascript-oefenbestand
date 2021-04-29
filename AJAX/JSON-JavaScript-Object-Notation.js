// JSON-JavaScript-Object-Notation

//De syntax van JSON lijkt heel erg op de syntax van een JavaScript object,
// maar ze zijn daadwerkelijk verschillend, want JSON is een string.

//In JSON moeten de object keys altijd binnen dubbele aanhalingstekens staan.
//Enkele aanhalingstekens worden niet geaccepteerd.
//et andere grote verschil is dat hoewel we in JavaScript altijd een komma plaatsen na ieder key-value pair,
// we in JSON geen komma plaatsen na de laatste entry.

// voorbeeld:

[
    {
        "firstName":"Henk",
        "lastName":"Jansen",
        "grades":
            {"java":8,
                "htmlAndCss":4,
                "javascript":9,
                "react":7
            },
        "unfollowedCourses":["Springboot","Databases"]
    },
    {
        "firstName":"Piet",
        "lastName":"Pieters",
        "grades":
            {
                "databases":6,
                "java":4,
                "htmlAndCss":9,
                "javascript":8
            },
        "unfollowedCourses": ["React","Springboot"]
    }
]
