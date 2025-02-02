export async function listarUsuarios() {
    const res = await fetch('http://localhost:4000/api/usuarios');
    return await res.json();
}
export async function crearUsuario(usuarios: unknown) {
    const res = await fetch('http://localhost:4000/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),
    });
    const data = await res.json();
    console.log(data)
}
export async function eliminarUsuario(id: string) {
    const res = await fetch(`http://localhost:4000/api/usuarios/${id}`, {
        method: 'DELETE'
    });
    return await res.json();
}
export async function actualizarUsuario(id: string, data: unknown) {
    const res = await fetch(`http://localhost:4000/api/usuarios/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error ${res.status}: ${errorText}`);
    }

    return res.json();
}
