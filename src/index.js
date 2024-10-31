// code along torsdag:

// Vad är en Funktion?

// Förklaring:
// En funktion är ett återanvändbart kodblock som utför en specifik uppgift.

// Funktioner hjälper till att strukturera koden och undvika upprepning.

// Deklarera och Anropa Funktioner
// Syntax för att deklarera en funktion:

// function namnPåFunktionen(parameter1, parameter2) {
//     // Kod som ska utföras
//     return resultat;
//   }

//   Exempel 1: En enkel funktion utan parametrar

//   function sägHej() {
//     console.log("Hej världen!");
//   }

//   sägHej(); // Anropar funktionen

//   Exempel 2: Funktion med parametrar

//   function hälsa(namn) {
//     console.log(`Hej, ${namn}!`);
//   }

//   hälsa("Alice");
//   hälsa("Bob");

// Förklaring:

// Parametrar: Variabler som tas emot av funktionen.
// Argument: Värden som skickas in när funktionen anropas.
// return: Används för att skicka tillbaka resultatet av beräkningen.

//   Exempel 3: Funktion med returvärde

// Vad är return och varför används det?
// Förklaring:

// return-satsen avslutar exekveringen av en funktion och specificerar vilket värde som ska returneras till den plats där funktionen anropades.
// Om ingen return-sats anges returnerar funktionen undefined.
// return möjliggör att funktioner kan producera resultat som kan användas vidare i koden.

// Vad är return och varför används det?
// Förklaring:

// return-satsen avslutar exekveringen av en funktion och specificerar vilket värde som ska returneras till den plats där funktionen anropades.
// Om ingen return-sats anges returnerar funktionen undefined.
// return möjliggör att funktioner kan producera resultat som kan användas vidare i koden.

// Betydelsen av return
// Viktiga punkter:

// En funktion kan innehålla flera return-satser, men exekveringen av funktionen avslutas vid första return.
// return kan användas för att avsluta en funktion tidigt baserat på vissa villkor.

// Exempel 4: Tidig avslutning av funktion

// function hittaKvadratRot(x) {
//     if (x < 0) {
//       return "Kan inte beräkna kvadratroten av negativa tal.";
//     }
//     return Math.sqrt(x);
//   }

//   console.log(hittaKvadratRot(9)); // 3
//   console.log(hittaKvadratRot(-1)); // "Kan inte beräkna kvadratroten av negativa tal."

// Exempel 1: Funktion utan return

// function sägHej() {
//     console.log("Hej!");
//   }

//   let hälsning = sägHej(); // "Hej!"
//   console.log(hälsning); // undefined

// Förklaring: Funktionen sägHej() skriver ut "Hej!" men returnerar inget värde, därför blir hälsning undefined.

// Exempel 2: Funktion med return

// function fåHälsning() {
//     return "Hej!";
//   }

//   let hälsning = fåHälsning();
//   console.log(hälsning); // "Hej!"

//   Förklaring: Funktionen fåHälsning() returnerar strängen "Hej!", vilket gör att hälsning får detta värde.
// Diskussion:

// Varför använda return?
// För att få ut resultat från funktioner som kan användas senare i koden.
// För att bryta ut värden från funktioner istället för att bara utföra en uppgift.

//   function addera(a, b) {
//     return a + b;
//   }

//   let summa = addera(5, 3);
//   console.log(`Summan är: ${summa}`);

//   Anonyma Funktioner och Arrow Functions

// Teori:
// Varför använda olika typer av funktioner?
// Namngivna Funktioner:

// Fördelar:
// Lätt att återanvända genom att anropa med sitt namn.
// Bra för strukturering av kod.
// Användning:
// När funktionen behöver anropas från flera ställen.
// När funktionens syfte är klart definierat.
// Anonyma Funktioner:

// Förklaring:
// Funktioner utan namn som ofta används som argument till andra funktioner eller tilldelas till variabler.
// Fördelar:
// Användbara för tillfälliga uppgifter.
// Minskar risken för namnkonflikter.
// Användning:
// I callback-funktioner, t.ex. i eventhanterare eller arraymetoder som forEach().

// Arrow Functions:

// Förklaring:
// En kortare syntax för att skriva funktioner.
// Behåller inte sitt eget this-värde, vilket kan vara användbart eller problematiskt beroende på sammanhang.
// Fördelar:
// Kortare och mer koncis syntax.
// Lexikalt this-värde, vilket innebär att this bestäms av den omgivande koden.
// Användning:
// När man vill skriva korta funktioner, särskilt som callbacks.
// I funktionella programmeringsmönster.

// När ska man använda vilken typ av funktion?
// Namngivna Funktioner:

// När funktionen är central för applikationen och behöver anropas från flera ställen.
// När det är viktigt för läsbarheten att funktionen har ett beskrivande namn.
// Anonyma Funktioner:

// När funktionen endast används en gång, t.ex. som en callback.
// När man vill hålla koden mer inkapslad och undvika globala namn.
// Arrow Functions:

// När man vill ha en kortare syntax.
// När man inte behöver ett eget this-värde.
// Bra för inline-funktioner och funktionella programmeringsmönster.
// Varningar:
// Arrow Functions och this:

// Arrow functions har inte sitt eget this, vilket innebär att de är olämpliga i vissa sammanhang, t.ex. som metoder i objekt.

// Exempel på problem:

// let person = {
//     namn: "Alice",
//     hälsa: () => {
//       console.log(`Hej, jag heter ${this.namn}`);
//     },
//   };

//   person.hälsa(); // "Hej, jag heter undefined"

//   Förklaring: Här refererar this inte till person-objektet, utan till det globala objektet.
// Rekommendation:

// Använd traditionella funktioner för objektmetoder.
// Använd arrow functions för callbacks och när this inte behövs.

//   Anonyma Funktioner
//   Förklaring:

//   En funktion utan namn som ofta används som argument till andra funktioner eller tilldelas till variabler.

//   Exempel 4: Tilldela en anonym funktion till en variabel

//   let multiplicera = function (a, b) {
//     return a * b;
//   };

//   let produkt = multiplicera(4, 5);
//   console.log(`Produkten är: ${produkt}`);

//   Arrow Functions (ES6)
//   Förklaring:

//   En kortare syntax för att skriva funktioner.
//   Behåller inte sitt eget this-värde, vilket kan vara användbart i vissa sammanhang.
//   Syntax:

//   let funktionNamn = (parameter1, parameter2) => {
//     // Kod som ska utföras
//     return resultat;
//   };

//   Exempel 5: Omvandla en funktion till en arrow function

// // Traditionell funktion
// function kvadrera(x) {
//     return x * x;
//   }

//   // Arrow function
//   let kvadrera = (x) => {
//     return x * x;
//   };

//   // Arrow function med implicit returvärde
//   let kvadrera = (x) => x * x;

//   console.log(kvadrera(6)); // Output: 36

//   Exempel 6: Använda arrow functions i arraymetoder

//   let tal = [1, 2, 3, 4, 5];
//   let dubblaTal = tal.map((num) => num * 2);
//   console.log(dubblaTal); // Output: [2, 4, 6, 8, 10]

//   Diskussion:

// När är det lämpligt att använda arrow functions?
// Skillnader mellan arrow functions och traditionella funktioner.
