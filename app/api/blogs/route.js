import blogs from './blogs.json'
import { NextResponse } from 'next/server'

export async function GET(request){
    console.log(blogs)
    return NextResponse.json(blogs)
}