import { Answer, Deck, Flashcard } from "../Model"
import DeckService from "./deckservice";
describe('deck service', () => {
    
    
    const CORRECT_ANSWER_ONE: Answer = {
        isCorrect: true,
        text: "CORRECT_ANSWER_ONE"
    }
    const CORRECT_ANSWER_TWO: Answer = {
        isCorrect: true,
        text: "CORRECT_ANSWER_TWO"
    }
    const INCORRECT_ANSWER_ONE: Answer = {
        isCorrect: false,
        text: "INCORRECT_ANSWER_ONE"
    }
    const INCORRECT_ANSWER_TWO: Answer = {
        isCorrect: false,
        text: "INCORRECT_ANSWER_TWO"
    }
    const INCORRECT_ANSWER_THREE: Answer = {
        isCorrect: false,
        text: "INCORRECT_ANSWER_THREE"
    }
    const FLASHCARD_ONE: Flashcard = {
        answers: [CORRECT_ANSWER_ONE, INCORRECT_ANSWER_ONE, INCORRECT_ANSWER_TWO, INCORRECT_ANSWER_THREE],
        question: "FLASHCARD_ONE"
    }
    const FLASHCARD_TWO: Flashcard = {
        answers: [CORRECT_ANSWER_TWO, INCORRECT_ANSWER_ONE, INCORRECT_ANSWER_TWO, INCORRECT_ANSWER_THREE],
        question: "FLASHCARD_TWO"
    }
    const DECK_ONE: Deck = {
        id: "DECK_ONE",
        draw: [FLASHCARD_ONE],
        discard: []
    }
    const DECK_TWO: Deck = {
        id: "DECK_TWO",
        draw: [FLASHCARD_TWO],
        discard: []
    }
    const DECK_THREE: Deck = {
        id: "DECK_THREE",
        draw: [FLASHCARD_ONE, FLASHCARD_TWO],
        discard: []
    }
    //https://medium.com/@matthill8286/dependency-injection-in-react-a-good-guide-with-code-examples-4afc8adc6cdb
    it('delete deck Should return true And remove deck with id When id is in deck', () => {
        let initialDecks: Deck[] = [];
        //when
        let svc = new DeckService(initialDecks);
        let actualSuccess = svc.addDeck(DECK_ONE);
        let actualDecks = svc.getDecks();
        //then
        expect(actualSuccess).toBe(true);
        expect(actualDecks.length).toBe(1);
    })
    it('add deck Should have one deck still', () => {
        let initialDecks: Deck[] = [];
        //when
        let svc = new DeckService(initialDecks);
        let actualSuccess = svc.addDeck(DECK_ONE);
        let actualDecks = svc.getDecks();
        //then
        expect(actualSuccess).toBe(true);
        expect(actualDecks.length).toBe(1);
    })
})