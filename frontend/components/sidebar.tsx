"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, Wallet, Settings, Code, TrendingUp, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Master Dashboard", href: "/master", icon: TrendingUp },
  { name: "Follower Dashboard", href: "/follower", icon: Users },
  { name: "Wallet & Payments", href: "/wallet", icon: Wallet },
  { name: "Profile & Settings", href: "/profile", icon: Settings },
  { name: "Developer Portal", href: "/developer", icon: Code },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 h-screen bg-black/80 backdrop-blur-xl border-r border-cyan-500/20 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ShadowTrade
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-cyan-400" : "text-gray-400 group-hover:text-white",
                )}
              />
              {!collapsed && <span className="font-medium">{item.name}</span>}
              {isActive && !collapsed && <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />}
            </Link>
          )
        })}
      </nav>

      {/* Status Indicator */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400">Network Active</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">Mainnet • Block 18,234,567</div>
          </div>
        </div>
      )}
    </div>
  )
}
