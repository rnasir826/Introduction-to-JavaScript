/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


const votingAge = 19;
if (votingAge >= 18) {
    console.log(true);
} else {
    console.log(false)
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let game = win {
    if (game !== win);
    console.log(looser)
} else {
    (game === win)
    console.log(winner)
}






//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let str = "1999";
parseInt(str);



//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    return a * b
}
let math = multiply(10, 36)
console.log(math)


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function ageInDogYears(age) {
    let dogAge = 7 * age;
    console.log("Pupper is " + dogAge + " years old");
}
ageInDogYears(1);
ageInDogYears(17);
ageInDogYears(24);
ageInDogYears(.3);


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
function dogFeeder(weight, age) {
    if (age => 1) {
        if (weight <= 5) {
            return .05 * weight
        }


        // 6 - 10 lbs - 4% of their body weight 
        else if (6 <= weight <= 10) {
            return .04 * weight
        }

        // 11 - 15 lbs - 3% of their body weight 
        else if (11 <= weight <= 15) {
            return .03 * weight
        }

        // > 15lbs - 2% of their body weight 
        else {
            return .02 * weight
        }

        // Puppies less than 1 year
        // 2 - 4 months 10% of their body weight
        if (age < 1) {
            if (2 <= weight < 4) {
                return .1 * weight
            }
            // 4 - 7 months 5% of their body weight 
            else if (4 < weight < 6) {
                return .05 * weight
            }
            // 7 - 12 months 4% of their body weight
            else {
                return .04 * weight
            }
        }
        // when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996





        /************************************************************** Task 4 **************************************************************/
        // Rock, Paper, Sissors
        // Your function should take a string (either rock paper or sissors)
        // it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
        // use math.random to determine the computers choice 
        // hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

        var userChooses = prompt("Pick rock, paper or scissors?");
        var compPicks = Math.random();
        if (compPicks < 0.46) {
            compPicks = "rock";
        } else if (compPicks <= 0.82) {
            compPicks = "paper";
        } else {
            compPicks = "scissors";
        }
        var compare = function(choice1, choice2) {}
        if (compPicks === userChooses) {
            console.log("The result is a tie!");
        }
        if (userChooses === "rock") {
            if (userChooses === "scissors") {
                console.log("rock wins");
            } else {
                console.log("paper wins");
            }
        }
        if (userChooses === "paper") {
            if (userChooses === "rock") {
                console.log("paper wins");
            } else {
                console.log("scissors wins");
            }
        }
        if (userChooses === "scissors") {
            if (userChooses === "rock") {
                console.log("rock wins");
            } else {
                console.log("scissors wins");
            }
        };
        compare(userChooses, compPicks);


        /************************************************************** Task 5 **************************************************************/
        //Metric Converter
        //a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

        function milageConverter(miles, kilometers) {
            let miles = 1
            miles = math.floor(kilometers * 0.621371())
        }


        //b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

        function feetConverter(inches, centimeters) {
            let inches = 1
            inches = math.floor(centimeters * 0.621371())
        }



        /************************************************************** Task 6 **************************************************************/
        // 99 bottles of soda on the wall
        // create a function called annoyingSong
        // the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
        let annoyingSong = StartingNum => {
            for (let i = 99; i > 0; i--) {
                console.log(i);
            }
        }




        /************************************************************** Task 7 **************************************************************/
        //Grade Calculator
        //write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
        //90s should be A 
        //80s should be B 
        //70s should be Cs 
        //60s should be D 
        //and anything below 60 should be F
        function assignments(schoolGrades) {
            if (90 <= schoolGrades) {
                console.log('A');
            } else if (80 <= schoolGrades <= 90) {
                console.log('B');
            } else if (70 <= schoolGrades <= 80) {
                console.log('C');
            } else if (60 <= schoolGrades <= 70) {
                console.log('D');
            } else {
                console.log('F');
            }




            /************************************************************** Stretch **************************************************************/
            //Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
            // Hint - you may need to study tomorrow's traning kit on arrays 
            // try looking up the .includes() method





            /************************************************************** Stretch **************************************************************/
            //Take Rock, Paper, Sissors further
            //update your rock papers sissors code below to take a prompt from a user using the window object