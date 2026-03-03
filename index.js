let score = 0

//Question 1: prompt+question
let q1Input = prompt(`Q1: Who has scored the most career points in NBA history?
    
    [1] Kobe Bryant
    [2] Lebron James
    `);

// Conversion    
let q1 = Number(q1Input);

//Validate computation
if (Number.isNaN(q1)|| q1 < 1 || q1 > 2) {
    alert("Wrong! Please try again.");
} else if (q1 === 2) {
    alert("You're right! Lebron has the most points in NBA history!");
    score++;
}else {
    alert("Wrong the answer is [2] Lebron James.");
}

//Q2
let q2Input = prompt(`Q2: How many championships did Michael Jordan win in his career?;
    
    [1] 6
    [2] 4
    `);

 
let q2 = Number(q2Input);

//Validate computation
if (Number.isNaN(q2)|| q2 < 1 || q2 > 2) {
    alert("Wrong! Please try again.");
} else if (q2 === 1) {
    alert("You're right! Jordan has won 6 championships in his career!");
    score++;
}else {
    alert("Wrong the answer is [1] 6.");
}

//q3
let q3Input = prompt(`Q3: Who did the Knicks beat in the first round of the EC in 2024?;
    
    [1] 76ers
    [2] Hawks
    `);

 
let q3 = Number(q3Input);

//Validate computation
if (Number.isNaN(q3)|| q3 < 1 || q3 > 2) {
    alert("Wrong! Please try again.");
} else if (q3 === 1) {
    alert("You're right! The Knicks crushed the 76ers hopes and dreams!");
    score++;
} else {
    alert("Wrong the answer is [1] 76ers.");
}

if (score === 0) {
    alert(`You scored ${score}/3.\n\nMissed a wide open layup.`);
} else if (score === 3) {
    alert(`You scored ${score}/3.\n\nSlam Dunk!.`);
} else {
    alert(`You scored ${score}/3.\n\nYou did okay, practice on your skills.`);
}