import { NextResponse } from "next/server";

export function GET(){
    try {
        const items = [
            {
                name: 'Codo a Codo 4.0',
                institution: 'Buenos Aires Autonomous City Goverment',
                startYear: 2023,
                endYear: 2023,
                imageURL: 'CERTIFICADO_CAC4.png'
            },
            {
                name: 'English Program',
                institution: 'CUI - Unversity of Buenos Aires (Via Pearson Portal)',
                startYear: 2022,
                endYear: 2023,
                imageURL: 'CERTIFICADO_INGLES.png'
            },
            {
                name: 'Medical Doctor',
                institution: 'University of Tucuman',
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