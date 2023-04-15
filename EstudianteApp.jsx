import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";




export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [busqueda, setBusqueda] = useState("");


    const agregarEstudiante = (estudiante) => {
        const existeEstudiante = estudiantes.some((element) => element.id === estudiante.id);
        if (existeEstudiante) {
            window.alert("¡Según su ID este estudiante ya existe!");
        } else {
            setEstudiantes([...estudiantes, estudiante]);
        }
    }


    const filtrarEstudiantes = (estudiantes, busqueda) => {
        if (busqueda === "") {
            return estudiantes;
        } else {
            const estudiantesFiltrados = estudiantes.filter((est) =>
                est.nombre.toLowerCase().includes(busqueda.toLowerCase())
            );
            return estudiantesFiltrados;
        }
    };

    const listaEstudiantesFiltrados = filtrarEstudiantes(estudiantes, busqueda);

    const eliminarEstudiante = (id) => {
        const isEliminar = window.confirm(`Desea eliminar el estudiante con id: ${id}`)

        if (isEliminar) {
            const filterEstudiantes = estudiantes.filter(est => est.id !== id)
            setEstudiantes(filterEstudiantes);
        }
    }

    const [estudianteEditar, setEstudianteEditar] = useState(null);

   

    const editarEstudiante = (estudiante) => {
        const nuevaListaEstudiantes = estudiantes.map((e) => {
          if (e.id === estudiante.id) {
            return estudiante;
          } else {
            return e;
          }
        });
        setEstudiantes(nuevaListaEstudiantes);
        setEstudianteEditar(null);
      };

    const actualizarEstudiante = (estudiante) => {
        const indice = estudiantes.findIndex((est) => est.id === estudiante.id);
        const nuevosEstudiantes = [...estudiantes];
        nuevosEstudiantes[indice] = estudiante;
        setEstudiantes(nuevosEstudiantes);
        setEstudianteEditar(null);
    };


    return (
        <>
            <FormularioEstudiante agregar={agregarEstudiante} setBusqueda={setBusqueda} estudianteEditar={estudianteEditar}
                actualizarEstudiante={actualizarEstudiante}
            />
            <TablaEstudiante listaEstudiantes={listaEstudiantesFiltrados} eliminarEstudiante={eliminarEstudiante}
                editarEstudiante={setEstudianteEditar}
            />
        </>
    )
}
