function fourthBit(number) {
  let decimal = number;

  for(let i = 1; i <= 4; i++) {
    if(decimal !== 1) {
      decimal = Math.floor(decimal / 2);
    } else {
      decimal = -1
    }
  }

  if(decimal === -1) {
    console.log(0)
  } else {
    console.log(decimal % 2)
  }
}