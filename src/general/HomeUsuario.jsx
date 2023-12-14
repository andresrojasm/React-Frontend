import axios from 'axios';
import React, { useEffect, useState } from 'react'

const USUARIO_BASE_API = "http://localhost:8080/usuario";

export default function HomeUsuario() {

    const [usuarios, setUsuarios] = useState([]);

    const cargarUsuarios = async () => {
        const res = await axios(USUARIO_BASE_API);
        setUsuarios(res.data);
    };

    useEffect(() => { cargarUsuarios() }, []);

    return (
        <div className='container'>
            <div className='py-4'>
                <table className='table border shadow'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>USUARIO</th>
                            <th>CORREO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map(usuario =>
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <button className='btn btn-primary mx-1'>Ver</button>
                                        <button className='btn btn-outline-primary mx-1'>Editar</button>
                                        <button className='btn btn-danger mx-1'>Borrar</button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}