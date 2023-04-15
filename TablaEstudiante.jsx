
import { useState } from "react"

export const TablaEstudiante = ({ listaEstudiantes, eliminarEstudiante, editarEstudiante }) => {

    const [filtroNombre, setFiltroNombre] = useState("");

    const filtrarEstudiantes = (estudiantes, filtroNombre) => {
        return estudiantes.filter((estudiante) =>
            estudiante.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
        );
    };

    const estudiantesFiltrados = filtrarEstudiantes(listaEstudiantes, filtroNombre);


    return (
        <>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por nombre"
                    value={filtroNombre}
                    onChange={(e) => setFiltroNombre(e.target.value)}
                />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id Estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantesFiltrados.map((estudiante) => (
                        <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.semestre}</td>
                            <td>
                                <button
                                    className="btn btn-info me-2"
                                    onClick={() => editarEstudiante(estudiante)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => eliminarEstudiante(estudiante.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}