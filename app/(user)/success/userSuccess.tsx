'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CheckoutSuccess from '@/components/CheckoutSuccess'

interface SuccessClientProps {
  sessionId: string
}

export default function SuccessClient({ sessionId }: SuccessClientProps) {
  const router = useRouter()

  useEffect(() => {
    if (!sessionId) {
      router.push('/')
    }
  }, [sessionId, router])

  if (!sessionId) {
    return null
  }

  return (
    <div>
      <CheckoutSuccess id={sessionId} />
    </div>
  )
}