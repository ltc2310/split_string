import { splitMessage } from '../splitMessage';

describe('utils/splitMesssage.js', () => {

    it('it should return array message with one element if message not longer 50 characters', () => {
        const message = 'hello';
        const result = splitMessage(message);

        expect(result).toEqual(['hello']);
    });

    it('it should throw error if message is not string', () => {
        const message = {obj: 1};
        const expectedError = new Error ( 'message must be a string' );
        try{
            splitMessage(message);
        }catch(e){
            expect(e).toEqual(expectedError);
        }
    });

    it('it should throw error if message contains a span of non-whitespace characters longer than 50 characters', () => {
        const message = `I can'tdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffieve Tweeter
                        now supports chunking my messages, so I don't have to do it myself.     `;
        const expectedError = new Error ( 'message contains a span of non-whitespace characters longer than 50 characters' );
        try{
            splitMessage(message);
        }catch(e){
            expect(e).toEqual(expectedError);
        }
    });

    it('it should return array message with 2 element if message has more than two space between words', () => {
        const message = `I can't         believe Tweeter         now supports chunking my messages, so I don't have to do it myself.     `;
        const expectedResult =  ["1/2 I can't believe Tweeter now supports chunking", "2/2 my messages, so I don't have to do it myself."];
        
        const actualResult =  splitMessage(message);

        expect(actualResult).toEqual(expectedResult);

    });

    it('it should return array message with 2 element if message is correct format', () => {
        const message = `I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.`;
        const expectedResult =  ["1/2 I can't believe Tweeter now supports chunking", "2/2 my messages, so I don't have to do it myself."];
        
        const actualResult =  splitMessage(message);

        expect(actualResult).toEqual(expectedResult);

    });

    it('it should return array message with 3 element if the last element of array message longer than 50 characters', () => {
        const message = `I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself. ha`;
        const expectedResult =  ["1/3 I can't believe Tweeter now supports chunking", "2/3 my messages, so I don't have to do it myself.", "3/3 ha"];
        
        const actualResult =  splitMessage(message);

        expect(actualResult).toEqual(expectedResult);

    });
});