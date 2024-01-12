import { NextResponse } from "next/server";

export function GET(){
    try {
        const items = [
            {
                name: 'Codo a Codo 4.0',
                institution: 'Buenos Aires Goverment',
                startYear: 2023,
                endYear: 2023,
                imageURL: 'CERTIFICADO_CAC4.png'
            },
            {
                name: 'English course',
                institution: 'CUI - UBA (Pearson)',
                startYear: 2023,
                endYear: 2022,
                imageURL: 'CERTIFICADO_INGLES.png'
            },
            {
                name: 'Doctor in medicine',
                institution: 'UNT',
                startYear: 2021,
                endYear: 'Present',
                imageURL: 'UNT-Logo.png'
            }
        ]
        return NextResponse.json(items, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(error, {
            status: 404
        })
    }
}