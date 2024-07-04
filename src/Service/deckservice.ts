import { Deck, Flashcard } from '../Model';
import raw from '../data.json';
export default class DeckService {
    private data: Deck[];
    constructor(data: Deck[]) {
        this.data = data;
    }
    getDecks(): Deck[] {
        return this.data;
    }
    
    deleteDeck(id: String): boolean {
        return false;
    }
    
    addDeck(deck: Deck): boolean {
        this.data.push(deck);
        return true;
    }
    
    updateDeck(id: String, deck: Deck): boolean {
        return false;
    }
}


