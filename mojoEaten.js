/*
Solver: Alam Hossain
email: dev.alam886@gmail.com
*/

// mojo exchange function
const calculationMojo = (availMojo) => {
  let mojo = availMojo;
  let mutki = 0;
  let eatenMojo = 0;

  while (mojo > 0) {
    //execute calculation until mojo 0
    if (mojo > 0) {
      eatenMojo += 1;
      mutki += 1;

      mojo -= 1;
    }

    // add a mojo and reset mutki if mutki 3
    if (mutki === 3) {
      mojo += 1;
      mutki = 0;
    }
  }

  return { eatenMojo, mutki };
};

// call function
const result = calculationMojo(20);

// result show
console.log("Eaten Mojo: ", result.eatenMojo);
console.log("Available Mutki: ", result.mutki);
