//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Say {
  inEnglish(number) {
    const up2_20 = [ 'zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen',
    'fifteen','sixteen','seventeen','eighteen','nineteen','twenty']
    const twenty_100 = { 20:'twenty',30:'thirty',40:'forty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',90:'ninety' }

    const twenty_to_100 = (num) => {
        let s1 = num.slice(0,1)
        let s2 = num.slice(1,2)
        return `${twenty_100[s1+'0']}-${up2_20[s2]}`
      }

    const hundreds = (num) => {
        let s1 = num.slice(0,1)
        let s2 = num.slice(1,3)

        if (s2 <= 20) s2 = up2_20[s2]
        else if (s2 > 20) s2 = twenty_to_100(s2.toString())

        console.log("S2: ",s2)

        if ([100, 200, 300, 400, 500, 600, 700, 800, 900].includes(num)){
            return `${up2_20[+s1]} hundred`
        } else {
            return `${up2_20[s1]} hundred ${s2}`
        }
    }



    const callit = (num) => {
        if (num <= 20) return up2_20[num]
        if (num >= 20 && num <= 100) return twenty_to_100(num.toString()) 
        if (num >= 100 && num < 1000) return hundreds(num.toString()) 
    }


    return callit(number)    
  }
}
