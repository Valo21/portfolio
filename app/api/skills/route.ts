import { NextResponse } from "next/server";

export function GET(){
    try {
        const skills = [
            {name: 'HTML', progress: 100},
            {name: 'CSS', progress: 100},
            {name: 'Javascript', progress: 100},
            {name: 'Typescript', progress: 50},
            {name: 'ReactJS', progress: 50},
            {name: 'TailwindCSS', progress: 50},
            {name: 'NextJS', progress: 50},
            {name: 'React Native', progress: 30},
            {name: 'NodeJS', progress: 30},
            {name: 'Express', progress: 30},
            {name: 'MongoDB', progress: 30},
            {name: 'Prisma', progress: 30}
        ]
        return NextResponse.json(skills, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(error, {
            status: 404
        })
    }
}