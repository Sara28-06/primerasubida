const fs = require('fs');

let cursos = [{
	id: 101,
	curso: 'Español',
	duracion: '30 Horas',
	costo: 50000
},

{
	id: 202,
	curso: 'Programacion',
	duracion: '50 Horas',
	costo: 100000
},

{
	id: 303,
	curso: 'Ciencias',
	duracion: '30 Horas',
	costo: 60000
}];


let imprimir = (a, callback) => {
	setTimeout(()=>{
		callback('El nombre del curso es ' + cursos[a].curso + ' con id ' + cursos[a].id + ', con una \n' 
		+ 'duracion de ' + cursos[a].duracion + ' y un valor de ' + cursos[a].costo)},
		(2000*(a+1))
		);
}

for (let i=0;i<=2;i++){
	imprimir (i, function(resultado){
		console.log(resultado);
	})
}

const opciones = {
	id: {
		demand: true,
		alias: 'i'
	},
	nombre: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'c'
	}
}

const argv = require('yargs')
	.command ('inscribir', 'Curso a inscribir', opciones)
	.argv

console.log(argv);

let crearArchivo = (estudiante) => {
	texto = 'El estudiante ' + n + ' con cedula ' + c + ' se ha matriculado al curso \n' + i
	+ ' exitosamente'
		fs.writeFile(' curso.txt', texto, (err) => {
			if (err) throw (err);
			console.log('se ha creado el archivo')
		});
	}

/*
if(argv._[0]=='inscribir'){
	console.log('El curso inscrito es ' + argv.i);
}else{
	console.log('El curso no se ha inscrito');
}

crearArchivo(estudiante);
*/