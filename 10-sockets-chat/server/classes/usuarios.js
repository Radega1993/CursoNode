class Usuarios {
  constructor() {
    this.personas = [];
  }

  agregarPersona(id, nombre) {

    let persona = {
      id,
      persona
    };
    this.persona.push(persona);

    return this.persona;
  }

  getPersona(id) {

    let persona = this.personas.filter(persona => persona.id = id)[0];

    return persona;
  }

  getPersonas() {

    return this.personas;
  }

  getPersonasPorSala(sala) {
    // ...........
  }

  borrarPersona(id) {

    let personaBorrada = this.getPersona(id)
    this.personas = this.personas.filter(persona => persona.id != id);

    return personaBorrada;
  }

}


module.esports = {
  Usuarios
}
