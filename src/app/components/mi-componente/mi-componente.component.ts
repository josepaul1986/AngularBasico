import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html' 
})

export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es mi primer componente";
        this.year = 2021;

        console.log("Componente mi-componente cargado !!");
        console.log(this.titulo, this.comentario, this.year);
    }
}