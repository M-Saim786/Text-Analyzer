// .........................Guess Game/......................................

// // let a= Math.random()*100
// // a= parseInt(a)
// // console.log(a)
// // let inp
// // var score =100
// // while (inp != a) {
// //     --score
// //     inp = parseInt(prompt('Enter Number'))
// //     if (inp) {
// //         break
// //     }
// // if (inp==a) {
// //    console.log('Congratulations...!')
// //    console.log(score)
// // }
// // else if (inp>a&&inp<100) {
// //    console.log('Guess is greater')
// // }
// // else if (inp<a&&inp>0) {
// //    console.log('Gues is small')
// // }
// // else{
// // alert('you failed')
// // }

// // }

// let a = Math.random() * 10
// a = parseInt(a)
// console.log(a)
// let inp
// var score = 100
// while (inp != a) {
//   --score
//   inp = parseInt(prompt('Enter Number'))
//   if (inp) {
//     break
//   }
//   if (inp == a) {
//     alert('Congratulations...!')
//     alert(score)

//   }
//   else if (inp > a && inp < 10) {
//     alert('Guess is greater')
//   }
//   else if (inp < a && inp > 0) {
//     alert('Gues is small')
//   }
//   else {
//     alert('you failed')
//   }

// }

//................................function to get value of textarea..........
function gettext() {
  var text;
  text = document.getElementById("text").value;
  // text = 'gdfdsfdfsf'
  //  console.log('cli9ck')
  return text.value;
}
//................................function to Preview..........

const preview = () => {
  gettext();
  var pre = text.value;
  document.getElementById("display_text").innerHTML = pre;

  const wordCount =()=>{
    gettext()
    let words= text.value
    document.getElementById("Words").innerHTML = words.split(' ').length + ' Words'
  }
  wordCount()
var textlen =document.getElementById('length').innerHTML = pre.length+' Characters'
  // document.write(textlen)
};
// ...............Function to upper case............
const toupper = () => {
  gettext();

  var upper = text.value.toUpperCase();
  document.getElementById("text").value = upper;
  // console.log(upper)
};

// ...............Function to Lower case............

const tolower = () => {
  gettext();
  var lowerText = text.value.toLowerCase();
  document.getElementById("text").value = lowerText;
  lowerText = text;
};

// ...............Function Copy............
const Copy = () => {
  // var copy= document.getElementById('text')
  gettext();
  var copy = text;
  copy.select();

  navigator.clipboard.writeText(copy.value);
};
// ...............Function Clear............
const Clear = () => {
gettext()
text.value = ''
};
//.......................................Function Dark Mode
const darkmode = () => {
  var element = document.body;
  element.classList.toggle("bodymode");
  var labeltext = document.getElementById('labelDark')
  // console.log(labeltext)
  if (element.classList.toggle=='bodymode') {
    labeltext.innerText = 'Disbale Dark Mode'
    labeltext.style.color = 'black'
  }
  else{
    labeltext.innerText = 'Enable Dark Mode'
    labeltext.style.color = 'white'
  }
};

const remove_space = ()=>{
gettext()
const result = text.value.replace(/\s+/g,'').trim()
console.log(result)

text =result
console.log(text)
}