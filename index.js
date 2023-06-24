//Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    const firstTwoDrivers =drivers.slice(0,2);
    return firstTwoDrivers;
};
 const returnLastTwoDrivers = function(drivers) {
     const lastTwoDrivers =drivers.slice(-2);
     return lastTwoDrivers;
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  function createFareMultiplier(interger) {
    const fareMultiplier = fare  => fare * interger;
    return fareMultiplier;
  }
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers (drivers);
  }
  

  
//   const drivers3 = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//   const firstTwoDrivers4 = returnFirstTwoDrivers(drivers3);
//   console.log(firstTwoDrivers); // Output: ['Antonia', 'Nuru']

//   const returnLastTwoDrivers = function(drivers1){
//     return drivers1.slice(2,4);
//   };
//   const drivers1 = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//   const lastTwoDrivers = returnLastTwoDrivers(drivers1);
//   console.log(lastTwoDrivers); // Output: ['Amari', 'Mo']

//   const selectingDrivers = [
//     function returnFirstTwoDrivers(drivers) {
//       return drivers.slice(0, 2);
//     },
//     // Other elements of the selectingDrivers array
//     function returnLastTwoDrivers(drivers4) {
//         return drivers4.slice(2,4);
//     },
//   ];
// //   const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// //   const firstTwoDrivers = returnFirstTwoDrivers(drivers);
// //   console.log(firstTwoDrivers); // Output: ['Antonia', 'Nuru']

// //   const drivers4 = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// //   const lastTwoDrivers1 = returnLastTwoDrivers(drivers4);
// //   console.log(lastTwoDrivers1); // Output: ['Amari', 'Mo']

// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// const firstTwoDrivers = selectingDrivers[0](drivers);
// console.log(firstTwoDrivers); // Output: ['Driver1', 'Driver2']

// const lastTwoDrivers1 = selectingDrivers[selectingDrivers.length - 1](drivers1);
// console.log(lastTwoDrivers1); 

  
