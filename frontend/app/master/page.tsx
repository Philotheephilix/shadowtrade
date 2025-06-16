"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
import { Send, DollarSign, Activity, Users, Zap } from "lucide-react"

export default function MasterDashboard() {
  const [signalForm, setSignalForm] = useState({
    tokenPair: "",
    amount: "",
    slippage: "0.5",
    memo: "",
  })

  const activeSignals = [
    {
      id: 1,
      pair: "ETH/USDC",
      amount: "1.5 ETH",
      status: "executing",
      followers: 23,
      timestamp: "2 min ago",
    },
    {
      id: 2,
      pair: "BTC/USDT",
      amount: "0.1 BTC",
      status: "completed",
      followers: 45,
      timestamp: "15 min ago",
    },
    {
      id: 3,
      pair: "LINK/ETH",
      amount: "100 LINK",
      status: "pending",
      followers: 12,
      timestamp: "1 min ago",
    },
  ]

  const revenueData = [
    { tier: "Basic", earnings: "2.4 ETH", subscribers: 156 },
    { tier: "Premium", earnings: "5.7 ETH", subscribers: 89 },
    { tier: "Elite", earnings: "12.3 ETH", subscribers: 34 },
  ]

  const handleSignalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signal submission
    console.log("Signal submitted:", signalForm)
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Master Control Room"
        subtitle="Broadcast your trading signals to followers worldwide"
        badge="Live"
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Trade Signal Form */}
        <Card className="lg:col-span-1 bg-black/40 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-cyan-400">
              <Send className="w-5 h-5" />
              <span>Create Signal</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignalSubmit} className="space-y-4">
              <div>
                <Label htmlFor="tokenPair" className="text-gray-300">
                  Token Pair
                </Label>
                <Input
                  id="tokenPair"
                  placeholder="ETH/USDC"
                  value={signalForm.tokenPair}
                  onChange={(e) => setSignalForm({ ...signalForm, tokenPair: e.target.value })}
                  className="bg-black/60 border-gray-700 focus:border-cyan-500 text-white"
                />
              </div>
              <div>
                <Label htmlFor="amount" className="text-gray-300">
                  Amount
                </Label>
                <Input
                  id="amount"
                  placeholder="1.5"
                  value={signalForm.amount}
                  onChange={(e) => setSignalForm({ ...signalForm, amount: e.target.value })}
                  className="bg-black/60 border-gray-700 focus:border-cyan-500 text-white"
                />
              </div>
              <div>
                <Label htmlFor="slippage" className="text-gray-300">
                  Slippage %
                </Label>
                <Input
                  id="slippage"
                  placeholder="0.5"
                  value={signalForm.slippage}
                  onChange={(e) => setSignalForm({ ...signalForm, slippage: e.target.value })}
                  className="bg-black/60 border-gray-700 focus:border-cyan-500 text-white"
                />
              </div>
              <div>
                <Label htmlFor="memo" className="text-gray-300">
                  Memo (Optional)
                </Label>
                <Textarea
                  id="memo"
                  placeholder="Trade reasoning..."
                  value={signalForm.memo}
                  onChange={(e) => setSignalForm({ ...signalForm, memo: e.target.value })}
                  className="bg-black/60 border-gray-700 focus:border-cyan-500 text-white resize-none"
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25"
              >
                <Zap className="w-4 h-4 mr-2" />
                Broadcast Signal
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Active Signals */}
        <Card className="lg:col-span-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-purple-400">
              <Activity className="w-5 h-5" />
              <span>Active Signals</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeSignals.map((signal) => (
                <div
                  key={signal.id}
                  className="flex items-center justify-between p-4 bg-black/60 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        signal.status === "executing"
                          ? "bg-yellow-400 animate-pulse"
                          : signal.status === "completed"
                            ? "bg-green-400"
                            : "bg-gray-400"
                      }`}
                    />
                    <div>
                      <div className="font-semibold text-white">{signal.pair}</div>
                      <div className="text-sm text-gray-400">{signal.amount}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-sm text-gray-400">
                        <Users className="w-3 h-3" />
                        <span>{signal.followers}</span>
                      </div>
                      <div className="text-xs text-gray-500">{signal.timestamp}</div>
                    </div>
                    <Badge
                      variant={signal.status === "completed" ? "default" : "secondary"}
                      className={
                        signal.status === "executing"
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          : signal.status === "completed"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }
                    >
                      {signal.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Analytics */}
      <div className="grid md:grid-cols-3 gap-6">
        {revenueData.map((tier, index) => (
          <Card
            key={tier.tier}
            className="bg-black/40 backdrop-blur-md border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-green-400">{tier.tier} Tier</span>
                <DollarSign className="w-5 h-5 text-green-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-white">{tier.earnings}</div>
                <div className="text-sm text-gray-400">{tier.subscribers} subscribers</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((tier.subscribers / 200) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Access Control */}
      <Card className="bg-black/40 backdrop-blur-md border border-orange-500/20">
        <CardHeader>
          <CardTitle className="text-orange-400">Access Control & Metering</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-300">Basic Tier Limit</Label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-orange-400 font-semibold">50/day</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Premium Tier Limit</Label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="500"
                  defaultValue="200"
                  className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-orange-400 font-semibold">200/day</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Elite Tier Limit</Label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  defaultValue="500"
                  className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-orange-400 font-semibold">Unlimited</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
