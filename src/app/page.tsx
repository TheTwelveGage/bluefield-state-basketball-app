"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data - in a real app, this would come from the API
const nextGame = {
  opponent: "West Virginia State",
  date: "2024-02-15",
  time: "7:30 PM",
  location: "Home",
  venue: "WVSU Gym"
}

const featuredNews = [
  {
    id: 1,
    title: "Jordan Hinds Earns Atlantic Region Player of the Year",
    excerpt: "Bluefield State's Jordan Hinds has been named Atlantic Region Player of the Year by the Division II Conference Commissioner's Association.",
    date: "Mar 14, 2025",
    image: "/api/placeholder/400/200"
  },
  {
    id: 2,
    title: "Big Blues Advance to CIAA Tournament",
    excerpt: "The team secured their spot in the conference tournament with a strong finish to the regular season.",
    date: "Mar 10, 2025",
    image: "/api/placeholder/400/200"
  }
]

const teamStats = {
  wins: 18,
  losses: 8,
  conferenceRecord: "12-4",
  ranking: "#3 CIAA"
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center space-x-8 text-center">
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-[#C0AD72]">{timeLeft.days}</span>
        <span className="text-sm text-white/80">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-[#C0AD72]">{timeLeft.hours}</span>
        <span className="text-sm text-white/80">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-[#C0AD72]">{timeLeft.minutes}</span>
        <span className="text-sm text-white/80">Minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-[#C0AD72]">{timeLeft.seconds}</span>
        <span className="text-sm text-white/80">Seconds</span>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F1D44] to-[#1a2b5c] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#C0AD72]">BIG BLUES</span>
              <br />
              BASKETBALL
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Bluefield State University Men's Basketball
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Badge variant="secondary" className="bg-[#C0AD72] text-[#0F1D44] text-lg px-4 py-2">
                {teamStats.ranking}
              </Badge>
              <Badge variant="outline" className="border-[#C0AD72] text-[#C0AD72] text-lg px-4 py-2">
                {teamStats.wins}-{teamStats.losses} Overall
              </Badge>
              <Badge variant="outline" className="border-[#C0AD72] text-[#C0AD72] text-lg px-4 py-2">
                {teamStats.conferenceRecord} CIAA
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Next Game Countdown */}
      <section className="bg-[#0F1D44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Next Game</h2>
            <p className="text-xl mb-2">vs {nextGame.opponent}</p>
            <p className="text-lg text-white/80 mb-8">
              {new Date(nextGame.date).toLocaleDateString()} at {nextGame.time}
            </p>
            <CountdownTimer targetDate={`${nextGame.date}T19:30:00`} />
            <div className="mt-8">
              <Link href="/schedule">
                <Button className="bg-[#C0AD72] text-[#0F1D44] hover:bg-[#C0AD72]/90">
                  View Full Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0F1D44]">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredNews.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-[#0F1D44] to-[#C0AD72]"></div>
                <CardHeader>
                  <CardTitle className="text-[#0F1D44]">{article.title}</CardTitle>
                  <p className="text-sm text-gray-500">{article.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Link href="/news">
                    <Button variant="outline" className="border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/news">
              <Button className="bg-[#0F1D44] text-white hover:bg-[#0F1D44]/90">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-[#0F1D44] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Season Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-[#C0AD72] mb-2">{teamStats.wins}</div>
              <div className="text-white/80">Wins</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C0AD72] mb-2">{teamStats.losses}</div>
              <div className="text-white/80">Losses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C0AD72] mb-2">12</div>
              <div className="text-white/80">Conference Wins</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#C0AD72] mb-2">3rd</div>
              <div className="text-white/80">CIAA Ranking</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
