export const translate = (input='') => {
    let result = [];
    if (!input.length) return [];

    let proteins = {
        "STOP" : ["UAA","UAG","UGA"],
        "Methionine" : ["AUG"],
        "Phenylalanine" : ["UUU", "UUC"],
        "Leucine" : ["UUA", "UUG"],
        "Serine" : ["UCU", "UCC", "UCA", "UCG"],
        "Tyrosine" : ["UAU", "UAC"],
        "Cysteine" : ["UGU", "UGC"],
        "Tryptophan" : ["UGG"]
    }

    let allTags = Object.values(proteins).join(', ').replace(/ /g, '').split(",")

    for(let strSlice=0; strSlice<input.length; strSlice+=3){
        for (let entry of Object.entries(proteins)){
            let start = strSlice; let end = strSlice + 3;
            if (!allTags.includes(input.slice(start,end))) throw new Error("Invalid codon");
            if (proteins["STOP"].includes(input.slice(start,end))) return result;
            if (entry[1].includes(input.slice(start, end))){
                result.push(entry[0]);
            }
        };
    }
    return result;
}
