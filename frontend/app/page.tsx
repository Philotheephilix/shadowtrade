"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Zap,
  Lock,
  Wallet,
  TrendingUp,
  Users,
  Star,
  Github,
  Twitter,
  MessageCircle,
  FileText,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const router = useRouter()
  const [currentTrader, setCurrentTrader] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    router.push("/master")
  }, [router])

  const features = [
    {
      icon: Shield,
      title: "On-Chain Copy Trading",
      description: "Trade directly from your wallet with zero custodial risk. Your funds, your control.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Gasless Payments",
      description: "Pay for signals seamlessly via INTMAX with zero gas fees and instant settlements.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lock,
      title: "Paywalled Signals",
      description: "Monetize your expertise with x402 MCP protocol for private, secure signal distribution.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Wallet,
      title: "Smart Wallet Creation",
      description: "Auto-generated smart wallets via CDP for seamless onboarding and trade execution.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const topTraders = [
    {
      id: 1,
      username: "CryptoNinja",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 1247,
      returns: "+127.3%",
      verified: true,
    },
    {
      id: 2,
      username: "DeFiMaster",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 892,
      returns: "+89.7%",
      verified: true,
    },
    {
      id: 3,
      username: "AlphaBot",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 2156,
      returns: "+156.2%",
      verified: true,
    },
    {
      id: 4,
      username: "TradeGuru",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 743,
      returns: "+94.8%",
      verified: true,
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Master Creates Signal",
      description: "Top traders broadcast their strategies and trade signals to the network",
    },
    {
      number: "02",
      title: "Followers Pay via x402",
      description: "Users pay for access to premium signals through secure, gasless payments",
    },
    {
      number: "03",
      title: "Smart Wallets Execute",
      description: "Automated smart wallets copy trades in real-time with perfect precision",
    },
    {
      number: "04",
      title: "Masters Earn Income",
      description: "Traders monetize their expertise with private, recurring revenue streams",
    },
  ]

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Algorithmic Trader",
      avatar: "/placeholder.svg?height=50&width=50",
      quote:
        "ShadowTrade transformed my bot's performance. Following top masters increased my returns by 340% in just 3 months.",
    },
    {
      name: "Sarah Kim",
      role: "DeFi Investor",
      avatar: "/placeholder.svg?height=50&width=50",
      quote:
        "The gasless payments and on-chain security give me complete confidence. No more worrying about custodial risks.",
    },
    {
      name: "TradeBot_Alpha",
      role: "Automated System",
      avatar: "/placeholder.svg?height=50&width=50",
      quote: "Seamless integration with CDP smart wallets. My execution latency dropped to under 100ms. Pure alpha.",
    },
  ]

  const nextTrader = () => {
    setCurrentTrader((prev) => (prev + 1) % topTraders.length)
  }

  const prevTrader = () => {
    setCurrentTrader((prev) => (prev - 1 + topTraders.length) % topTraders.length)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 backdrop-blur-md bg-black/20 border-b border-cyan-500/20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ShadowTrade
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Features
          </Link>
          <Link href="#traders" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Top Traders
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors">
            How It Works
          </Link>
          <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
            Launch App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/30">
                🚀 Now Live on Mainnet
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Monetize Your Strategy.
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Follow the Best.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Trade Like a Pro.
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Broadcast your trades or pay to copy the best in real-time, securely and privately. The future of
                decentralized copy trading is here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/25 group"
              >
                Become a Master
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 group"
              >
                <Play className="mr-2 h-4 w-4" />
                Start Copying
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">$2.4M+</div>
                <div className="text-sm text-gray-400">Volume Traded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1,247</div>
                <div className="text-sm text-gray-400">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">127%</div>
                <div className="text-sm text-gray-400">Avg Returns</div>
              </div>
            </div>
          </div>

          {/* 3D Visualization */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Master Node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 font-semibold">
                  MASTER
                </div>
              </div>

              {/* Follower Nodes */}
              {[...Array(8)].map((_, i) => {
                const angle = i * 45 * (Math.PI / 180)
                const radius = 120
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={i}
                    className="absolute w-12 h-12 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-full flex items-center justify-center shadow-lg animate-pulse"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <Users className="w-4 h-4 text-white" />
                  </div>
                )
              })}

              {/* Connecting Lines */}
              {[...Array(8)].map((_, i) => {
                const angle = i * 45 * (Math.PI / 180)
                const length = 120

                return (
                  <div
                    key={i}
                    className="absolute w-px bg-gradient-to-r from-cyan-500/50 to-transparent"
                    style={{
                      left: "50%",
                      top: "50%",
                      height: `${length}px`,
                      transformOrigin: "top",
                      transform: `rotate(${i * 45}deg)`,
                      animation: `pulse 2s infinite ${i * 0.2}s`,
                    }}
                  />
                )
              })}

              {/* Glowing Orbs */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-500/30 mb-4">
              Core Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Built for the Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Decentralized Trading
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience next-generation copy trading with cutting-edge blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-md border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Traders Showcase */}
      <section id="traders" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30 mb-4">
              Elite Masters
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Follow the</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Top Performers
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTrader}
                className="border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
                {topTraders.slice(currentTrader, currentTrader + 3).map((trader, index) => (
                  <Card
                    key={trader.id}
                    className="bg-black/60 backdrop-blur-md border border-gray-800/50 hover:border-green-500/50 transition-all duration-300 group hover:scale-105"
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="relative">
                        <img
                          src={trader.avatar || "/placeholder.svg"}
                          alt={trader.username}
                          className="w-16 h-16 rounded-full mx-auto border-2 border-green-500/50"
                        />
                        {trader.verified && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white fill-white" />
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white">{trader.username}</h3>
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mt-2">
                          <span>{trader.followers} followers</span>
                          <span className="text-green-400 font-semibold">{trader.returns}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Follow this Master
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTrader}
                className="border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex justify-center space-x-2">
              {topTraders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTrader(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTrader ? "bg-green-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30 mb-4">
              Process Flow
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">How</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ShadowTrade Works
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30 mb-4">
              Social Proof
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Trusted by</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Elite Traders
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-md border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-300 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border border-orange-500/50"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ShadowTrade
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The future of decentralized copy trading. Secure, private, and profitable.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Product</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Features
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Security
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Resources</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Documentation</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Community</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discord</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShadowTrade. All rights reserved. Built for the future of DeFi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
