import { BoxesIcon, Building2, CalendarRangeIcon, CarIcon, ChartNoAxesCombinedIcon, ChevronDown, ClipboardList, CogIcon, Contact, Contact2, IdCard, User } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import Link from "next/link"

const adms = [
    {
        title: "Usuarios",
        url: "/users",
        icon: User,
    },
    {
        title: "Ciudades",
        url: "#",
        icon: Building2,
    },
    {
        title: "Tipos de Documentos",
        url: "#",
        icon: IdCard,
    },
]
const gestiones = [
    {
        title: "Clientes",
        url: "/clientes",
        icon: Contact,
    },
    {
        title: "Proveedores",
        url: "#",
        icon: Contact2,
    },
    {
        title: "Stock",
        url: "#",
        icon: BoxesIcon,
    },
    {
        title: "Servicios",
        url: "#",
        icon: ClipboardList,
    },
    {
        title: "Vehículos",
        url: "#",
        icon: CarIcon,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-2xl">LJM Lavadero</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <ChartNoAxesCombinedIcon />
                                        <span>Dashboard</span></Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <Collapsible className="group/collapsible">
                                <SidebarGroup className="p-0">
                                    <SidebarMenuButton asChild>
                                        <CollapsibleTrigger>
                                            <CalendarRangeIcon />
                                            Gestión
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </CollapsibleTrigger>
                                    </SidebarMenuButton>
                                    <CollapsibleContent>
                                        {gestiones.map((gestion) => (
                                            <SidebarMenuItem key={gestion.title}>
                                                <SidebarMenuButton asChild>
                                                    <a href={gestion.url}>
                                                        <gestion.icon />
                                                        <span>{gestion.title}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </CollapsibleContent>
                                </SidebarGroup>
                            </Collapsible>
                            <Collapsible className="group/collapsible">
                                <SidebarGroup className="p-0">
                                    <SidebarMenuButton asChild>
                                        <CollapsibleTrigger>
                                            <CogIcon />
                                            Configuración
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </CollapsibleTrigger>
                                    </SidebarMenuButton>
                                    <CollapsibleContent>
                                        {adms.map((adm) => (
                                            <SidebarMenuItem key={adm.title}>
                                                <SidebarMenuButton asChild>
                                                    <a href={adm.url}>
                                                        <adm.icon />
                                                        <span>{adm.title}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </CollapsibleContent>
                                </SidebarGroup>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
