import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcrypt'
import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github' 
import GoogleProvider from 'next-auth/providers/google'
import prisma from '@/app/libs/prismadb'

export const authOptions : AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: {
        GithubProvider
    }
}