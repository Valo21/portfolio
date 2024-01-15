import { NextResponse } from "next/server";
import { prisma } from '@/prisma-client'

export async function GET(){
    try {
        const skills = await prisma.skill.findMany();
        return NextResponse.json(skills, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(error, {
            status: 404
        })
    }
}