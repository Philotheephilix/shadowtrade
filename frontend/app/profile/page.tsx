"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
import {
  User,
  Settings,
  Bell,
  LinkIcon,
  AlertTriangle,
  Twitter,
  MessageCircle,
  Mail,
  Webhook,
  Shield,
  Trash2,
} from "lucide-react"

export default function ProfilePage() {
  const [mode, setMode] = useState("follower")
  const [notifications, setNotifications] = useState({
    email: true,
    telegram: false,
    webhooks: true,
  })

  const profileData = {
    ens: "shadowtrader.eth",
    avatar: "/placeholder.svg?height=80&width=80",
    joinDate: "March 2024",
    totalTrades: 1247,
    successRate: "87.3%",
  }

  const linkedAccounts = [
    { platform: "Twitter", username: "@shadowtrader", connected: true },
    { platform: "Discord", username: "ShadowTrader#1234", connected: true },
    { platform: "Telegram", username: "@shadowtrader", connected: false },
  ]

  return (
    <div className="space-y-8">
      <PageHeader title="Profile & Settings" subtitle="Manage your account and preferences" badge="Verified" />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <Card className="lg:col-span-1 bg-black/40 backdrop-blur-md border border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-purple-400">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="relative">
                <img
                  src={profileData.avatar || "/placeholder.svg"}
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto border-2 border-purple-500/50"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">{profileData.ens}</div>
                <div className="text-gray-400">Member since {profileData.joinDate}</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Trades</span>
                <span className="text-white font-semibold">{profileData.totalTrades}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Success Rate</span>
                <span className="text-green-400 font-semibold">{profileData.successRate}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-gray-300">Trading Mode</Label>
              <div className="flex items-center space-x-4">
                <Button
                  variant={mode === "follower" ? "default" : "outline"}
                  onClick={() => setMode("follower")}
                  className={
                    mode === "follower" ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "border-gray-700 text-gray-400"
                  }
                >
                  Follower
                </Button>
                <Button
                  variant={mode === "master" ? "default" : "outline"}
                  onClick={() => setMode("master")}
                  className={
                    mode === "master" ? "bg-gradient-to-r from-purple-500 to-pink-500" : "border-gray-700 text-gray-400"
                  }
                >
                  Master
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="lg:col-span-2 bg-black/40 backdrop-blur-md border border-cyan-500/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-cyan-400">
              <Settings className="w-5 h-5" />
              <span>Account Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Notification Preferences */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notification Preferences</span>
              </h3>
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-white">Email Notifications</div>
                      <div className="text-sm text-gray-400">Trade alerts and updates</div>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="text-white">Telegram Bot</div>
                      <div className="text-sm text-gray-400">Real-time trade signals</div>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.telegram}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, telegram: checked })}
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Webhook className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-white">Webhook Notifications</div>
                      <div className="text-sm text-gray-400">API callbacks for integrations</div>
                    </div>
                  </div>
                  <Switch
                    checked={notifications.webhooks}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, webhooks: checked })}
                  />
                </div>
              </div>
            </div>

            {/* Linked Accounts */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <LinkIcon className="w-5 h-5" />
                <span>Linked Accounts</span>
              </h3>
              <div className="space-y-3">
                {linkedAccounts.map((account, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {account.platform === "Twitter" && <Twitter className="w-4 h-4 text-blue-400" />}
                      {account.platform === "Discord" && <MessageCircle className="w-4 h-4 text-indigo-400" />}
                      {account.platform === "Telegram" && <MessageCircle className="w-4 h-4 text-blue-500" />}
                      <div>
                        <div className="text-white">{account.platform}</div>
                        <div className="text-sm text-gray-400">{account.username}</div>
                      </div>
                    </div>
                    <Badge
                      className={
                        account.connected
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }
                    >
                      {account.connected ? "Connected" : "Not Connected"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="bg-black/40 backdrop-blur-md border border-red-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-400">
            <AlertTriangle className="w-5 h-5" />
            <span>Danger Zone</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Unsubscribe from All Masters</h4>
              <p className="text-sm text-gray-400">
                This will cancel all your active subscriptions and stop copying trades.
              </p>
              <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                Unsubscribe All
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Reset Wallet</h4>
              <p className="text-sm text-gray-400">
                Generate a new smart wallet address. This action cannot be undone.
              </p>
              <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                <Trash2 className="w-4 h-4 mr-2" />
                Reset Wallet
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
