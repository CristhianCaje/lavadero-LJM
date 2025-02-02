import { columns } from "./columnas"
import Create from "./create-user";
import { DataTable } from "./table-user"
import { listarUsuarios } from "./users.api";




export default async function DemoPage() {

    const data = await listarUsuarios();

    return (
        <div className="container mx-auto py-10 ">
            <Create />
            <DataTable columns={columns} data={data} />

        </div>
    )
}
