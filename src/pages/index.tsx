import Image from 'next/image'
import { Inter } from 'next/font/google'
import { invoke } from '@tauri-apps/api/tauri'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    invoke('init')
    .then(console.log)
    .catch(console.error)
  }, []);
  
  return (
    <main>
      <h1>Hello world</h1>
    </main>
  )
}
