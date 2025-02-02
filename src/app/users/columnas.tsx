"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash2Icon } from "lucide-react";
import { eliminarUsuario, actualizarUsuario } from "./users.api";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define la forma de los datos
export type Usuarios = {
    id: string;
    nombre: string;
    apellido: string;
    email: string;

};

// Maneja la eliminación del usuario
async function handleEliminarUsuario(id: string, refresh: () => void) {
    try {
        await eliminarUsuario(id); // Llama a la API para eliminar
        alert("Usuario eliminado exitosamente.");
        refresh(); // Actualiza los datos de la tabla
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        alert("Ocurrió un error al eliminar el usuario.");
    }
}

// Define las columnas para la tabla
export const columns: ColumnDef<Usuarios>[] = [
    {
        accessorKey: "nombre",
        header: "Nombre",
    },
    {
        accessorKey: "apellido",
        header: "Apellido",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        id: "editar",
        header: "Editar",
        cell: ({ row }) => {
            const router = useRouter();
            const usuario = row.original;

            const [nombre, setNombre] = useState(usuario.nombre);
            const [apellido, setApellido] = useState(usuario.apellido);
            const [email, setEmail] = useState(usuario.email);
            const [contrasena, setContrasena] = useState(usuario.contrasena);

            async function handleEditarUsuario() {
                try {
                    await actualizarUsuario(usuario.id, { nombre, apellido, email, contrasena });
                    alert("Usuario actualizado correctamente.");
                    router.refresh(); // Actualiza la tabla
                } catch (error) {
                    console.error("Error al actualizar usuario:", error);
                    alert("Ocurrió un error al actualizar el usuario.");
                }
            }

            return (
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex justify-center">
                            <button className="text-blue-500 hover:text-blue-700">
                                <Edit className="w-5 h-5" />
                            </button>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Editar Usuario</DialogTitle>
                            <DialogDescription>
                                Modifica los campos necesarios y haz clic en  para aplicar los cambios.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="nombre" className="text-right">Nombres</Label>
                                <Input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="apellido" className="text-right">Apellidos</Label>
                                <Input id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">Correo Electrónico</Label>
                                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="contrasena" className="text-right">Contraseña</Label>
                                <Input id="contrasena" type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button onClick={handleEditarUsuario}>Guardar</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            );
        },
    },
    {
        id: "eliminar",
        header: "Eliminar",
        cell: ({ row }) => {
            const router = useRouter();
            return (
                <div className="flex justify-center">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="text-red-500 hover:text-red-700">
                                <Trash2Icon className="w-5 h-5" />
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>¿Estás seguro de que deseas eliminar este usuario?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Esta acción no se puede deshacer. Esto eliminará permanentemente al usuario.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleEliminarUsuario(row.original.id, router.refresh)}>
                                    Continuar
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            );
        },
    },
];
