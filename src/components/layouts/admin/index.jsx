import { useState } from 'react'
import HeaderAdmin from '../admin/headeradmin'

export default function LayoutAdmin(props) {
    return <>
        <HeaderAdmin /> 
            <main className="col-span-4 p-2 bg-gray-200 h-full">
                {props.children}
            </main>
    </>
}