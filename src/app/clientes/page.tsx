import React from 'react'
import { DataTableDemo } from '@/components/table'
import { DialogDemo } from './create-clientes'

export default function clientes() {
    return (
        <div>
            <DialogDemo />
            <DataTableDemo />
        </div>
    )
}