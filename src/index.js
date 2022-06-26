module.exports = function toReadable (number) {
  let result = (number == 0) ? 'zero' : '';
  let num = number;
  let array_0_19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let array_20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  if (number >= 100) {
    result = `${array_0_19[Math.floor(number/100)]} hundred `
    num = number%100;
  }
  if (num < 20) {
    result += array_0_19[num]
  } else if (num >= 20 && num < 100) {
    result += `${array_20_90[Math.floor(num/10)]} ${array_0_19[num % 10]}`
  } 
  return result.trim();
}