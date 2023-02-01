// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om het geen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6
console.log ("------------------ Opdracht 1a -------------------")

console.log("Iedere waarde kan gecheckt worden door de vraag is array[i] gelijk aan of grote dan 8. Dus doormiddel van een forloop door de array te gaan kunnen we iedere cijfer in de array controleren")
console.log ("Door in de loop array.lenght te gebruiken gaat de loop heel de array af en de lenght geeft dan aan hoe lang de array is. ")
console.log ("Door iedere keer als het if statement waar is er een bij op te tellen.")

function cumLaudeChecker(cijfers) {
    let cumLaude = 0;
    for (i = 0; i < cijfers.length; i++) {
        if (cijfers[i] >= 8) {
            cumLaude++;
        }
    }
    return cumLaude
}

const cumLaude1 = cumLaudeChecker(grades)
console.log(cumLaude1)


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
console.log ("------------------ Opdracht 1b -------------------")

function cumLaude(cijfers) {
    let cumLaude = 0;
    for (i = 0; i < cijfers.length; i++) {
        if (cijfers[i] >= 8) {
            cumLaude++;
        }
    }
    console.log(cumLaude)
    return cumLaude
}

cumLaude(grades)
cumLaude([6, 4, 5])
cumLaude([8, 9, 4, 6, 10])


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

console.log ("------------------ Opdracht 2a -------------------")

console.log ("Gemidelde wordt berekten door alles bij elkaar op te tellen en dan gedeeld door hoeveel cijfers er zijn");
console.log ("Alle cijfers moeten verzamenld worden en bij elkaar opgesteld. Vervolgens moet het gedeeld worden door de lengte van de array");
console.log ("Door middel van het .lengtht te gebruiken in de for loop");

function averageGrade2(array) {
    let grade = 0;
    for (i = 0; i < array.length; i++) {
        grade += array[i] / (array.length)
    }
    return grade
}


const addUp = averageGrade2(grades)
console.log(addUp)

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade(grades) geeft xxxx

console.log ("------------------ Opdracht 2b -------------------")

function averageGrade(array) {
    let grade = 0;
    for (i = 0; i < array.length; i++) {
        grade += array[i] / (array.length)
    }
    let roundNumber = grade.toFixed(2)
    console.log(roundNumber)
    return roundNumber
}

averageGrade(grades)
averageGrade([6, 4, 5])
averageGrade(grades)


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

// zie opdracht 2b

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.
console.log ("------------------ Opdracht 3a -------------------")
console.log ("Iedere waarden kan je langsgaan door het gebruiken van van een for loop");
console.log ("Of het cijfer hoger is dan de vorige");
console.log ("Als het cijfer hoger is mag deze de variable overschijven")

// ---- Verwachte uitkomst: 9

console.log ("------------------ Opdracht 3b -------------------")

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade (input){
    let highest = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i] > highest) {
            highest = input[i]
        }
    }
    console.log (highest)
    return highest
}

highestGrade (grades)
highestGrade([6, 4, 5])
highestGrade([8, 9, 4, 6, 10])

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
