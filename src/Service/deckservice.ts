import { Deck, Flashcard } from '../Model';
import raw from '../data.json';
export interface IDeckServiceDataSource {
    readData(): Promise<Deck[]>;
    writeData(data: Deck[]): Promise<Boolean>;
}
export class DeckService {
    private data?: Deck[];
    private dataSource: IDeckServiceDataSource;
    constructor(dataSource: IDeckServiceDataSource) {
        this.dataSource = dataSource;
        this.setData()
    }
    async getDecks(): Promise<Deck[]> {
        await this.setData();
        return this.data ? this.data : [];
    }
    
    async deleteDeck(id: String): Promise<Boolean> {
        await this.ensureData();
        let newData = this.data.slice();
        newData = newData.filter((d) => d.id != id);
        this.data = newData;
        return this.dataSource.writeData(this.data);
    }
    
    async addDeck(deck: Deck): Promise<Boolean> {
        await this.ensureData();
        this.data.push(deck);
        return this.dataSource.writeData(this.data);
    }
    
    async updateDeck(id: String, deck: Deck): Promise<Boolean> {
        await this.ensureData();
        let newData = this.data.slice();
        newData = newData.filter((d) => d.id != id);
        this.data = newData;
        this.data.push(deck);
        return this.dataSource.writeData(this.data);
    }

    private async ensureData() {
        this.data === undefined ? await this.setData() : 0;
    }
    private async setData() {
        await this.dataSource.readData().then((data) => this.data = data);
    }
}


