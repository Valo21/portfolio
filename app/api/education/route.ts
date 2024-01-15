import { NextResponse } from "next/server";
import {prisma} from '@/prisma-client';

export async function GET(){
    try {
        const items = await prisma.educationItem.findMany();

        return NextResponse.json(items, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(error, {
            status: 404
        })
    }
}