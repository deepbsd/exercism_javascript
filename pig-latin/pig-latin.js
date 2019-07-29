export class translator {

    static translate(word) {

        if ( word.indexOf(' ') > -1 ) return word.split(' ').map( elem => translator.translate(elem) ).join(' '); 

        if ( ['a','e','i','o','u'].includes(word.slice(0,1)) ) return word + 'ay';
        else if ( ['squ', 'thr', 'sch'].includes(word.slice(0,3)) ) return word.slice(3) + word.slice(0,3) + 'ay';
        else if ( ['rh', 'qu', 'ch', 'sh', 'sk', 'th'].includes(word.slice(0,2)) ) return word.slice(2) + word.slice(0,2) + 'ay';
        else if ( ['yt', 'xr'].includes(word.slice(0,2)) ) return word + 'ay';
        else return word.slice(1) + word.slice(0,1) + 'ay';
    }

}
