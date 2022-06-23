export class User {
    id: string = '';
    name: string = '';
    role: string = '';
    pokemon: string = '';

    constructor(id: string, name: string, role: string, pokemon: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.pokemon = pokemon;
    }
}