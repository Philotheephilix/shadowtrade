"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"
import { Code, Terminal, Key, BarChart3, Play, Copy, Eye, EyeOff, Zap, Database, Globe } from "lucide-react"

export default function DeveloperPortal() {
  const [selectedTab, setSelectedTab] = useState("keys")
  const [showApiKey, setShowApiKey] = useState(false)
  const [queryInput, setQueryInput] = useState("")

  const apiKeys = [
    {
      id: 1,
      name: "Production API",
      key: "st_live_1234567890abcdef",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
      requests: 15420,
    },
    {
      id: 2,
      name: "Development API",
      key: "st_test_abcdef1234567890",
      created: "2024-01-10",
      lastUsed: "5 min ago",
      requests: 892,
    },
  ]

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/masters",
      description: "List all available masters",
    },
    {
      method: "POST",
      path: "/api/v1/follow",
      description: "Follow a master trader",
    },
    {
      method: "GET",
      path: "/api/v1/trades",
      description: "Get trade history",
    },
    {
      method: "POST",
      path: "/api/v1/signals",
      description: "Create a new trade signal",
    },
  ]

  const codeExamples = {
    javascript: `// Follow a master trader
const response = await fetch('https://api.shadowtrade.io/v1/follow', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    masterId: 'master_123',
    amount: '1.5',
    token: 'ETH'
  })
});

const result = await response.json();
console.log(result);`,
    curl: `# Follow a master trader
curl -X POST https://api.shadowtrade.io/v1/follow \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "masterId": "master_123",
    "amount": "1.5",
    "token": "ETH"
  }'`,
    python: `import requests

# Follow a master trader
response = requests.post(
    'https://api.shadowtrade.io/v1/follow',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'masterId': 'master_123',
        'amount': '1.5',
        'token': 'ETH'
    }
)

result = response.json()
print(result)`,
  }

  const usageStats = {
    totalRequests: 16312,
    successRate: 99.7,
    avgResponseTime: 145,
    monthlyLimit: 100000,
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Developer Portal"
        subtitle="Build with ShadowTrade APIs and integrate copy trading into your applications"
        badge="Beta"
      />

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-black/40 backdrop-blur-md rounded-lg p-1 border border-gray-800/50">
        {[
          { id: "keys", label: "API Keys", icon: Key },
          { id: "endpoints", label: "Endpoints", icon: Globe },
          { id: "usage", label: "Usage", icon: BarChart3 },
          { id: "playground", label: "Playground", icon: Play },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
              selectedTab === tab.id
                ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* API Keys Tab */}
      {selectedTab === "keys" && (
        <div className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                  <span>API Key Management</span>
                </div>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  Generate New Key
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((key) => (
                  <div
                    key={key.id}
                    className="p-4 bg-black/60 rounded-lg border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white">{key.name}</h3>
                        <div className="text-sm text-gray-400">Created {key.created}</div>
                      </div>
                      <Badge
                        className={
                          key.name.includes("Production")
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {key.name.includes("Production") ? "Live" : "Test"}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex-1 font-mono text-sm bg-black/40 p-2 rounded border">
                        {showApiKey ? key.key : "st_" + "•".repeat(20)}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="text-gray-400 hover:text-cyan-400"
                      >
                        {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-cyan-400">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Last used: {key.lastUsed}</span>
                      <span className="text-cyan-400">{key.requests.toLocaleString()} requests</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Endpoints Tab */}
      {selectedTab === "endpoints" && (
        <div className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-purple-400">
                  <Database className="w-5 h-5" />
                  <span>REST API Endpoints</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {endpoints.map((endpoint, index) => (
                    <div
                      key={index}
                      className="p-3 bg-black/60 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge
                          className={
                            endpoint.method === "GET"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          }
                        >
                          {endpoint.method}
                        </Badge>
                        <code className="text-white font-mono text-sm">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-400 text-sm">{endpoint.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-400">
                  <Code className="w-5 h-5" />
                  <span>Code Examples</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    {Object.keys(codeExamples).map((lang) => (
                      <Button
                        key={lang}
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800/50"
                      >
                        {lang === "javascript" ? "JS" : lang.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                  <div className="bg-black/60 rounded-lg border border-gray-700/50 p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{codeExamples.javascript}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Usage Tab */}
      {selectedTab === "usage" && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-black/40 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{usageStats.totalRequests.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Total Requests</div>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-md border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">{usageStats.successRate}%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">{usageStats.avgResponseTime}ms</div>
                <div className="text-sm text-gray-400">Avg Response</div>
              </CardContent>
            </Card>
            <Card className="bg-black/40 backdrop-blur-md border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">
                  {Math.round((usageStats.totalRequests / usageStats.monthlyLimit) * 100)}%
                </div>
                <div className="text-sm text-gray-400">Monthly Usage</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/40 backdrop-blur-md border border-gray-800/50">
            <CardHeader>
              <CardTitle className="text-white">Usage Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-black/60 rounded-lg border border-gray-700/50 flex items-center justify-center">
                <div className="text-gray-400">Usage chart visualization would go here</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Playground Tab */}
      {selectedTab === "playground" && (
        <div className="space-y-6">
          <Card className="bg-black/40 backdrop-blur-md border border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-400">
                <Play className="w-5 h-5" />
                <span>API Playground</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-gray-300">Query</Label>
                    <Textarea
                      placeholder="Enter your GraphQL query or REST endpoint..."
                      value={queryInput}
                      onChange={(e) => setQueryInput(e.target.value)}
                      className="bg-black/60 border-gray-700 focus:border-green-500 text-white font-mono text-sm"
                      rows={10}
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                    <Zap className="w-4 h-4 mr-2" />
                    Execute Query
                  </Button>
                </div>
                <div className="space-y-4">
                  <Label className="text-gray-300">Response</Label>
                  <div className="bg-black/60 border border-gray-700/50 rounded-lg p-4 h-64 overflow-auto">
                    <pre className="text-sm text-gray-300">
                      <code>
                        {`{
  "data": {
    "masters": [
      {
        "id": "master_123",
        "username": "CryptoNinja",
        "pnl": "+127.3%",
        "followers": 1247,
        "verified": true
      }
    ]
  },
  "status": "success"
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
