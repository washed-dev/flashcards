import { Answer, Deck, Flashcard } from "../Model"
import * as TestData from '../testdata/flashcards';
import {DeckService, IDeckServiceDataSource} from "./deckservice";
import raw from '../testdata/data.json';
import * as fs from 'fs/promises';
import * as path from 'path';
describe('deck service', () => {
    
    class FileDataSource implements IDeckServiceDataSource {
        path: string;
        constructor(path: string) {
            this.path = path;
        }
        async readData(): Promise<Deck[]> {
            return JSON.parse(await fs.readFile(this.path, 'utf-8'));
        }
        async writeData(data: Deck[]): Promise<Boolean> {
            await fs.writeFile(this.path, JSON.stringify(data));
            return true;
        }

    }

    class inMemoryDatabase implements IDeckServiceDataSource {
        private data: Deck[];
        constructor(initialData: Deck[]) {
            this.data = initialData;
        }
        readData(): Promise<Deck[]> {
            return Promise.resolve(this.data ? this.data : []);
        }
        writeData(data: Deck[]): Promise<boolean> {
            this.data = data;
            return Promise.resolve(true);
        }
        
    }
    
    it('add deck Should add deck', async () => {
        //given
        let dataSource: IDeckServiceDataSource = new FileDataSource(path.join(__dirname, '..', 'testdata/data.json'));
        let initialDecks: Deck[] = [];
        dataSource.writeData(initialDecks);
        //when
        let svc = new DeckService(dataSource);
        let actualSuccess = await svc.addDeck(TestData.DECK_ONE);
        let actualDecks = await svc.getDecks();
        //then
        expect(actualSuccess).toBe(true);
        expect(actualDecks.length).toBe(1);
        let actualDeck = actualDecks[0]
        expect(actualDeck.draw[0].answers[1].text).toEqual("INCORRECT_ANSWER_ONE");
    })
    //https://medium.com/@matthill8286/dependency-injection-in-react-a-good-guide-with-code-examples-4afc8adc6cdb
    it('update deck Should update deck Given multiple decks present', async () => {
        //given
        let initialDecks: Deck[] = [TestData.DECK_ONE, TestData.DECK_THREE, TestData.DECK_TWO];
        let dataSource: IDeckServiceDataSource = new FileDataSource(path.join(__dirname, '..', 'testdata/data.json'));
        dataSource.writeData(initialDecks);
        let updatedDeck: Deck = {id: "DECK_ONE", draw: TestData.DECK_ONE.draw.slice(),discard: TestData.DECK_ONE.discard.slice() };
        updatedDeck.draw[0].answers[1].text = "newtext";
        //when
        let svc = new DeckService(dataSource);
        let actualSuccess = await svc.updateDeck("DECK_ONE", updatedDeck);
        let actualDeck = (await svc.getDecks()).find((d) => d.id === "DECK_ONE");
        //then
        expect(actualSuccess).toBe(true);
        expect(actualDeck.draw[0].answers[1].text).toEqual("newtext");
    })   
    it('delete deck Should delete deck', async () => {
        //given
        let initialDecks: Deck[] = [TestData.DECK_ONE];
        let dataSource: IDeckServiceDataSource = new FileDataSource(path.join(__dirname, '..', 'testdata/data.json'));
        dataSource.writeData(initialDecks);
        //when
        let svc = new DeckService(dataSource);
        let actualSuccess = await svc.deleteDeck(TestData.DECK_ONE.id);
        let actualDecks = await svc.getDecks();
        //then
        expect(actualSuccess).toBe(true);
        expect(actualDecks.length).toBe(0);
    })    
    it('delete deck Should delete deck Given multiple decks present', async () => {
        //given
        let initialDecks: Deck[] = [TestData.DECK_ONE, TestData.DECK_THREE, TestData.DECK_TWO];
        let dataSource: IDeckServiceDataSource = new FileDataSource(path.join(__dirname, '..', 'testdata/data.json'));
        dataSource.writeData(initialDecks);
        //when
        let svc = new DeckService(dataSource);
        let actualSuccess = await svc.deleteDeck(TestData.DECK_ONE.id);
        let actualDecks = await svc.getDecks();
        //then
        expect(actualSuccess).toBe(true);
        expect(actualDecks.length).toBe(2);
        expect(actualDecks.find((d) => d.id === TestData.DECK_ONE.id)).toBeUndefined();
    })


})