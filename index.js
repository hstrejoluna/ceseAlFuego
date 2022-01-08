let fs = require("fs")


const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');
let arr = readFileLines('./file.txt');
function findFunction(word, longth) {

  var reducer = longth.replace(/(.)\1+/g, '$1')
  var findString = reducer.search(word);

  (findString > 0) ?
    fs.open('./result.txt', "w", function(err, f) {
      fs.writeFileSync('./result.txt', 'SI')
    })
    : fs.open('./result.txt', "w", function(err, f) {
      fs.appendFile('./result.txt', '\nNO', function(err) {
        if (err) throw err;
      });
    })
}
var primeraInstruccion = arr[1]
var segundaInstruccion = arr[2]
var entrada = arr[3]
const medidas = arr[0].split(" ");


if (medidas.length !== 3) {
  console.log("Input three positive integers")
  process.exit();
}

if (medidas[2] < 3 || medidas[2] > 5000) {
  console.log("Incorrect message length (3-5000)");
  process.exit();
}
if (!/^[0-9a-zA-Z]+$/.test(entrada)) {
  console.log("Message contains irregular characters");
  process.exit();
}
if (medidas[0] < 2 || medidas[0] > 50 || medidas[1] < 2 || medidas[1] > 50 || medidas[2] < 2 || medidas[2] > 50) {
  console.log("Incorrect instructions length (2-50)")
  proccess.exit()

}
(arr[1].length == medidas[0]) ? findFunction(primeraInstruccion, entrada) : console.log("first number doesn't match");

(arr[2].length == medidas[1]) ? findFunction(segundaInstruccion, entrada) : console.log("second number doesn't match");


