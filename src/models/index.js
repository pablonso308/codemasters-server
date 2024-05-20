'use strict'

import { getAlumnos, addAlumno, getProfesores, addProfesor, getAsignaturas, addAsignatura } from './data.js'

function getAlumnoById(idAlumno) {
    // TODO
}

function getProfesorById(idProfesor) {
    // TODO
}

function getAsignaturaById(idAsignatura) {
    // TODO
}

// Asignaturas que imparte un profesor
function getAsignaturasByProfesorId(idProfesor) {
    // TODO
}

// Asignaturas en las que está matriculado un alumno
function getAsignaturasByAlumnoId(idAlumno) {
    // TODO
}

export default {
    alumnos: {
        get: {
            all: getAlumnos,
            byId: getAlumnoById
        },
        add: addAlumno
    },
    profesores: {
        get: {
            all: getProfesores,
            byId: getProfesorById
        },
        add: addProfesor
    },
    asignaturas: {
        get: {
            all: getAsignaturas,
            byId: getAsignaturaById,
            byProfesorid: getAsignaturasByProfesorId,
        },
        add: addAsignatura
    }
}