// --Problem One--//

const heightOfShonamoni = [55, 80, 34, 50, 85, 10];
const filteredHeight = heightOfShonamoni.filter(kotoboro => kotoboro > 70);
console.log(filteredHeight)

// --Problem Two--Find The Even Number--//
const numbersOne = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const evenNumber = numbersOne.filter(evn => evn % 2 ===0);
console.log (evenNumber);

// Problem Three -- Find name Which Starts With 'A'--//
const name = [ 'Mim', 'Oishi', 'Alif', 'Apsara'];
// const findMyLove = name.filter(fmy => fmy.startsWith('z'));
// const findMyLove = name.filter(fmy => fmy.startsWith('a'));
const findMyLove = name.filter(fmy => fmy.startsWith('A'));


console.log(findMyLove);
