export const splitMessage = (message, splitSize = 50) => {
    if (typeof message !== 'string') {
        throw new Error("message must be a string");
    }
    
    if (message.length <= splitSize) {
        return [message];
    }

    const trimedMessage = message.replace(/\s+/g," ");
    
    const chunkedMessage = trimedMessage.match(new RegExp('.{1,' + splitSize + '}', 'g')) // split into limit 50 character.
    
    const result = [];
    const splitBySpace = trimedMessage.split(" ");
    splitBySpace.forEach((word) => {
        if (word.length > 50) {
            throw new Error("invalid message");
        }
    });
    let reservedString = null;
    
    const theLastIndex = chunkedMessage.length.toString() + "/" + chunkedMessage.length.toString() + " ";
    let resultArrayLength = chunkedMessage.length;
    
    const totalSizeOfTheLast = chunkedMessage[chunkedMessage.length -1].length + theLastIndex.length;
    if ( totalSizeOfTheLast > splitSize - theLastIndex.length) {
        resultArrayLength += 1;
    }
    
    for (let i = 1; i <= resultArrayLength; i += 1) {
        result.push(i.toString() + "/" + resultArrayLength.toString());
        if (reservedString !== null) {
                result[i-1] += ` ${reservedString}`;
            }
        while (splitBySpace.length > 0) {
            const word = splitBySpace.shift(); 
            if (word) {
                const newWord = result[i-1] + ` ${word}`;
                if (newWord.length <= splitSize) {
                    result[i-1] = result[i-1] + ` ${word}`;
                    reservedString = null;
                } else {
                    reservedString = word;
                    break;
                }
            }
        }
    }
    return result;
}
    