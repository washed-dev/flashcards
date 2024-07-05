import { Answer, Flashcard, Deck } from "../Model"

export const CORRECT_ANSWER_ONE: Answer = {
    isCorrect: true,
    text: "CORRECT_ANSWER_ONE"
}
export const CORRECT_ANSWER_TWO: Answer = {
    isCorrect: true,
    text: "CORRECT_ANSWER_TWO"
}
export const INCORRECT_ANSWER_ONE: Answer = {
    isCorrect: false,
    text: "INCORRECT_ANSWER_ONE"
}
export const INCORRECT_ANSWER_TWO: Answer = {
    isCorrect: false,
    text: "INCORRECT_ANSWER_TWO"
}
export const INCORRECT_ANSWER_THREE: Answer = {
    isCorrect: false,
    text: "INCORRECT_ANSWER_THREE"
}
export const FLASHCARD_ONE: Flashcard = {
    answers: [CORRECT_ANSWER_ONE, INCORRECT_ANSWER_ONE, INCORRECT_ANSWER_TWO, INCORRECT_ANSWER_THREE],
    question: "FLASHCARD_ONE"
}
export const FLASHCARD_TWO: Flashcard = {
    answers: [CORRECT_ANSWER_TWO, INCORRECT_ANSWER_ONE, INCORRECT_ANSWER_TWO, INCORRECT_ANSWER_THREE],
    question: "FLASHCARD_TWO"
}
export const DECK_ONE: Deck = {
    id: "DECK_ONE",
    draw: [FLASHCARD_ONE],
    discard: []
}
export const DECK_TWO: Deck = {
    id: "DECK_TWO",
    draw: [FLASHCARD_TWO],
    discard: []
}
export const DECK_THREE: Deck = {
    id: "DECK_THREE",
    draw: [FLASHCARD_ONE, FLASHCARD_TWO],
    discard: []
}