"use client"

import GenerateButton from '@/components/GenerateButton'
import { Tldraw } from '@tldraw/tldraw'

export default function Home() {
  return (
    <main className='h-screen w-screen'>
      <GenerateButton />
      <Tldraw persistenceKey='snapsite' >
        </Tldraw>
    </main>
  )
}

  
