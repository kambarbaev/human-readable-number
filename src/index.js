module.exports = function toReadable (num) {
  let result = '',ed,dec,beet,hun,arr = num.toString().split('');;
  ed = rNM.edenicy[arr.at(-1)];
  dec = rNM.dec[arr.at(-2)];
  beet = rNM.betweenten[arr.at(-1)]; 
  hun = `${rNM.edenicy[arr.at(-3)]} ${rNM.hundred[0]}`;
  if (arr.length === 1) {
    result = `${ed}`;
  }else if ( arr.length === 2 ) {
    if (num < 20 && num > 10) {
      result = `${beet}`
    }
    else if (ed === 'zero') {
      result = `${dec}`;
    }else {
      result = `${dec === 1 ? '1' : dec} ${ed}`
    }
  }else if (arr.length === 3) {
    if (dec === 'zero' && ed === 'zero') {
      result = `${hun}`
    }else if (ed === 'zero'){
      result = `${hun} ${dec}`
    }else if (dec === 'zero') {
      result = `${hun} ${ed}`
    }
    else if (dec === 'ten') {
      result = `${hun} ${rNM.betweenten[arr.at(-1)]}`
    }else {
      result = `${hun} ${dec} ${ed}`
    }
  }
  return result;
}
const rNM = {
  'edenicy': ['zero','one','two','three','four','five','six','seven','eight','nine',] ,
  'betweenten' : ['ten', 'eleven','twelve', 'thirteen','fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen', ],
  'dec' : ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  'hundred' : ['hundred']
};

