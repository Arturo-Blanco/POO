import { Word } from "./wordClass";

export class Dictionary {
    private wordList:Word[];

    public constructor(pWord:Word[]){
        this.wordList=pWord.sort();
    }
}