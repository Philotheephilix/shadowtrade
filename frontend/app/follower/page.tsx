"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { PageHeader } from "@/components/page-header"
import { Users, TrendingUp, Star, Eye, CheckCircle, Bot } from "lucide-react"

export default function FollowerDashboard() {
  const [smartTradeAI, setSmartTradeAI] = useState(false)

  const masters = [
    {
      id: 1,
      username: "CryptoNinja",
      avatar: "/placeholder.svg?height=60&width=60",
      pnl: "+127.3%",
      tier: "Premium",
      price: "0.1 ETH/month",
      followers: 1247,
      verified: true,
      rating: 4.9,
    },
    {
      id: 2,
      username: "DeFiMaster",
      avatar: "/placeholder.svg?height=60&width=60",
      pnl: "+89.7%",
      tier: "Basic",
      price: "0.05 ETH/month",
      followers: 892,
      verified: true,
      rating: 4.7,
    },
    {
      id: 3,
      username: "AlphaBot",
      avatar: "/placeholder.svg?height=60&width=60",
      pnl: "+156.2%",
      tier: "Elite",
      price: "0.25 ETH/month",
      followers: 2156,
      verified: true,
      rating: 4.8,
    },
    {
      id: 4,
      username: "TradeGuru",
      avatar: "/placeholder.svg?height=60&width=60",
      pnl: "+94.8%",
      tier: "Premium",
      price: "0.15 ETH/month",
      followers: 743,
      verified: false,
      rating: 4.6,
    },
  ]

  const subscribedMasters = [
    {
      id: 1,
      username: "CryptoNinja",
      lastTrade: "ETH/USDC • 2 min ago",
      status: "active",
    },
    {
      id: 2,
      username: "DeFiMaster",
      lastTrade: "BTC/USDT • 15 min ago",
      status: "active",
    },
  ]

  const tradeHistory = [
    {
      id: 1,
      master: "CryptoNinja",
      pair: "ETH/USDC",
      amount: "1.5 ETH",
      status: "completed",
      pnl: "+$234.56",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      master: "DeFiMaster",
      pair: "BTC/USDT",
      amount: "0.1 BTC",
      status: "executing",
      pnl: "—",
      timestamp: "5 min ago",
    },
    {
      id: 3,
      master: "AlphaBot",
      pair: "LINK/ETH",
      amount: "100 LINK",
      status: "failed",
      pnl: "-$12.34",
      timestamp: "1 hour ago",
    },
  ]

  return (
    <div className="space-y-8">
      <PageHeader
        title="Copy Trades Like a Pro"
        subtitle="Follow the best traders and automate your success"
        badge="Active"
      >
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-purple-400" />
          <span className="text-gray-300">Smart Trade AI</span>
          <Switch checked={smartTradeAI} onCheckedChange={setSmartTradeAI} />
        </div>
      </PageHeader>

      {/* Discover Masters */}
      <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-cyan-400">
            <Users className="w-5 h-5" />
            <span>Discover Masters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {masters.map((master) => (
              <Card
                key={master.id}
                className="bg-black/60 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={master.avatar || "/placeholder.svg"}
                        alt={master.username}
                        className="w-12 h-12 rounded-full border-2 border-cyan-500/50"
                      />
                      {master.verified && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{master.username}</div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-400">{master.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">30d PNL</span>
                      <span className="text-green-400 font-semibold">{master.pnl}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Followers</span>
                      <span className="text-white">{master.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price</span>
                      <span className="text-purple-400">{master.price}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge
                      className={
                        master.tier === "Elite"
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          : master.tier === "Premium"
                            ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }
                    >
                      {master.tier}
                    </Badge>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Follow Master
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Subscribed Masters */}
        <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-purple-400">
              <Eye className="w-5 h-5" />
              <span>Subscribed Masters</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subscribedMasters.map((master) => (
                <div
                  key={master.id}
                  className="flex items-center justify-between p-4 bg-black/60 rounded-lg border border-gray-700/50"
                >
                  <div>
                    <div className="font-semibold text-white">{master.username}</div>
                    <div className="text-sm text-gray-400">{master.lastTrade}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm">Live</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trade History */}
        <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-400">
              <TrendingUp className="w-5 h-5" />
              <span>Trade Replication History</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tradeHistory.map((trade) => (
                <div
                  key={trade.id}
                  className="flex items-center justify-between p-4 bg-black/60 rounded-lg border border-gray-700/50"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        trade.status === "completed"
                          ? "bg-green-400"
                          : trade.status === "executing"
                            ? "bg-yellow-400 animate-pulse"
                            : "bg-red-400"
                      }`}
                    />
                    <div>
                      <div className="font-semibold text-white">{trade.pair}</div>
                      <div className="text-sm text-gray-400">
                        {trade.master} • {trade.amount}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-semibold ${
                        trade.pnl.startsWith("+")
                          ? "text-green-400"
                          : trade.pnl.startsWith("-")
                            ? "text-red-400"
                            : "text-gray-400"
                      }`}
                    >
                      {trade.pnl}
                    </div>
                    <div className="text-xs text-gray-500">{trade.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
