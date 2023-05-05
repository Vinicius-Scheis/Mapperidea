class Pessoa {

  constructor(nome, sobrenome, idade) {
    this._nome = null;
    this._sobrenome = null;
    this._idade = null;
  }

  setNome(nome) {
    this._nome = nome;
  }

  getNome() {
    return this._nome;
  }

  setSobrenome(sobrenome) {
    this._sobrenome = sobrenome;
  }

  getSobrenome() {
    return this._sobrenome;
  }

  setIdade(idade) {
    this._idade = idade;
  }

  getIdade() {
    return this._idade;
  }

}
