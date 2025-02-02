"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { crearUsuario } from "./users.api"
import { useForm } from "react-hook-form"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function Create() {
    const { register, handleSubmit } = useForm();
    const router = useRouter()

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        await crearUsuario(data)
        router.push('/')
    })

    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Crear Usuario</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Crear Usuario</DialogTitle>
                    <DialogDescription>
                        Completa los campos requeridos para la creación del usuario. Haz clic en guardar cuando hayas terminado.
                    </DialogDescription>
                </DialogHeader>
                <form action="" onSubmit={onSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="nombre" className="text-right">
                                Nombres
                            </Label>
                            <Input
                                id="nombre"
                                {...register('nombre')}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="apellido" className="text-right">
                                Apellidos
                            </Label>
                            <Input
                                id="apellido"
                                {...register('apellido')}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Correo Electronico
                            </Label>
                            <Input
                                id="email"
                                {...register('email')}
                                className="col-span-3"
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="contrasena" className="text-right">
                                Contraseña
                            </Label>
                            <Input
                                id="contrasena"
                                {...register('contrasena')}
                                type="password"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">Guardar</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >

    )
}