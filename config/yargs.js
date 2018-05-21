const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descricion de tarea por hacer'
    },
    completado: {
        alias: 'c',
        defaul: true,
        desc: 'Marca como completado la tarea'
    }
}
const argv = require('yargs')
    .command('crear', 'Crea la tarea por hacer', opts)
    .command('actualizar', 'Marca como completado una tarea', opts)
    .command('borrar', 'borra las tareas', opts)
    .help()
    .argv;

module.exports = {
    argv
}