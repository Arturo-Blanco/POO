export class Word {
    private definition:string;
    private gramaticalFunction:string;
    private synonyms:string[];
    private antonyms:string[];

    public constructor(pDefinition:string,pGramaticalFunction:string,pSynonyms:string[],pAntonyms:string[]){
        this.definition=pDefinition;
        this.gramaticalFunction=pGramaticalFunction;
        this.synonyms=pSynonyms;
        this.antonyms=pAntonyms;
    }
    public getDefinition():string{
        return this.definition;
    }
    public getGramaticalFunction():string{
        return this.gramaticalFunction;
    }
    public getSynonyms():string[]{
        return this.synonyms;
    }
    public getAntonyms():string[]{
        return this.antonyms;
    }
}