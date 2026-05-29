'use client'

import React, { useEffect, useState } from 'react'
import SignalCard from './SignalCard'
import { TrendingUp, TrendingDown, Zap } from 'lucide-react'

interface Signal {
  symbol: string
  signal: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  risk_level: string
  stop_loss: number
  take_profit: number
  current_price: number
}

export default function Dashboard() {
  const [signals, setSignals] = useState<Signal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSignals()
    // Refresh signals every 60 seconds
    const interval = setInterval(fetchSignals, 60000)
    return () => clearInterval(interval)
  }, [])

  const fetchSignals = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:8000/api/signals')
      const data = await response.json()
      setSignals(data.signals || [])
      setError(null)
    } catch (err) {
      setError('Failed to fetch signals')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h1 className="text-4xl font-bold text-white">Trading Dashboard</h1>
        </div>
        <p className="text-gray-400">AI-powered trading signals in real-time</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <p className="text-gray-400 text-sm mb-2">Portfolio Value</p>
          <p className="text-3xl font-bold text-white">$10,000.00</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <p className="text-gray-400 text-sm mb-2">Total Gain/Loss</p>
          <p className="text-3xl font-bold text-green-400">+$0.00</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <p className="text-gray-400 text-sm mb-2">Win Rate</p>
          <p className="text-3xl font-bold text-blue-400">0%</p>
        </div>
      </div>

      {/* Signals Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Trading Signals</h2>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-gray-400 mt-4">Loading signals...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-4 text-red-400">
            {error}
          </div>
        )}

        {!loading && signals.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signals.map((signal) => (
              <SignalCard key={signal.symbol} signal={signal} />
            ))}
          </div>
        )}

        {!loading && signals.length === 0 && !error && (
          <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700">
            <p className="text-gray-400">No signals available</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-12">
        <p>Last updated: {new Date().toLocaleTimeString()}</p>
        <p>Mega Trading AI v0.1.0</p>
      </div>
    </div>
  )
}
