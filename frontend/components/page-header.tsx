"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, badge, children }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h1>
          {badge && (
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/30">
              {badge}
            </Badge>
          )}
        </div>
        {subtitle && <p className="text-gray-400">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}
