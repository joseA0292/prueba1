export class Ahorcado {

  private word: string
  private guesses: Set<string>
  ast = '***'

  constructor(word: string) {
    this.word = word
    this.guesses = new Set<string>()
    
  }

  setGuess(guess: string): void {
    this.guesses.add(guess.toUpperCase())
  }

  getWord(): string {
    return Array
      .from(this.word)
      .map(x => this.guesses.has(x) ? x : '*')
      .join('')
  }

  getWrongs(): number {
    return Array
      .from(this.guesses)
      .filter(x => ! this.word.includes(x))
      .length
  }
  getAst(): Boolean{
    
    if(this.ast.includes('*')) {return true}
    else {return false}
    
  }
}