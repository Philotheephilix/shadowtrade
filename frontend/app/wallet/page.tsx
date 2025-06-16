"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { PageHeader } from "@/components/page-header"
import {
  Wallet,
  Copy,
  QrCode,
  Shield,
  Zap,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle,
} from "lucide-react"

export default function WalletPage() {
  const [privacyMode, setPrivacyMode] = useState(true)
  const [filter, setFilter] = useState("all")

  const walletData = {
    address: "0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4",
    balance: "12.4567 ETH",
    usdValue: "$23,456.78",
  }

  const transactions = [
    {
      id: 1,
      type: "send",
      amount: "1.5 ETH",
      to: "CryptoNinja Signal",
      status: "completed",
      timestamp: "2 hours ago",
      hash: "0xabc123...",
    },
    {
      id: 2,
      type: "receive",
      amount: "0.1 ETH",
      from: "Faucet",
      status: "completed",
      timestamp: "1 day ago",
      hash: "0xdef456...",
    },
    {
      id: 3,
      type: "send",
      amount: "0.05 ETH",
      to: "DeFiMaster Sub",
      status: "pending",
      timestamp: "5 min ago",
      hash: "0xghi789...",
    },
  ]

  const mcpStats = {
    requests: 1247,
    limit: 2000,
    resetDate: "Dec 15, 2024",
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      <PageHeader title="Wallet & Payments" subtitle="Manage your funds and payment preferences" badge="Secure" />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Wallet Card */}
        <Card className="lg:col-span-1 bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-purple-400">
              <Wallet className="w-5 h-5" />
              <span>Smart Wallet</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-white">{walletData.balance}</div>
              <div className="text-gray-400">{walletData.usdValue}</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                <span className="text-gray-400 text-sm">Address</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-mono text-sm">
                    {walletData.address.slice(0, 6)}...{walletData.address.slice(-4)}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(walletData.address)}
                    className="h-6 w-6 text-gray-400 hover:text-cyan-400"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                <span className="text-gray-400 text-sm">INTMAX Privacy</span>
                <Switch checked={privacyMode} onCheckedChange={setPrivacyMode} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                <QrCode className="w-4 h-4 mr-2" />
                QR Code
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                <Zap className="w-4 h-4 mr-2" />
                Faucet
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Timeline */}
        <Card className="lg:col-span-2 bg-black/40 backdrop-blur-md border border-cyan-500/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Clock className="w-5 h-5" />
                <span>Transaction Timeline</span>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="bg-black/60 border border-gray-700 rounded px-2 py-1 text-sm text-white"
                >
                  <option value="all">All</option>
                  <option value="send">Sent</option>
                  <option value="receive">Received</option>
                </select>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 bg-black/60 rounded-lg border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === "send" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {tx.type === "send" ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownLeft className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{tx.amount}</div>
                      <div className="text-sm text-gray-400">
                        {tx.type === "send" ? `To: ${tx.to}` : `From: ${tx.from}`}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={
                        tx.status === "completed"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }
                    >
                      {tx.status}
                    </Badge>
                    <div className="text-xs text-gray-500 mt-1">{tx.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* MCP Metering Stats */}
      <Card className="bg-black/40 backdrop-blur-md border border-orange-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-orange-400">
            <Shield className="w-5 h-5" />
            <span>MCP Metering Dashboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">API Requests</span>
                <span className="text-orange-400">
                  {mcpStats.requests}/{mcpStats.limit}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(mcpStats.requests / mcpStats.limit) * 100}%` }}
                />
              </div>
              <div className="text-xs text-gray-500">Resets on {mcpStats.resetDate}</div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">62%</div>
                <div className="text-sm text-gray-400">Usage This Month</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Active
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Rate Limit</span>
                <span className="text-white">100/min</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
