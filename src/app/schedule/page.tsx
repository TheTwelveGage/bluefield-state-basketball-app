"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock schedule data - in a real app, this would come from the API
const games = [
  {
    id: 1,
    date: "2024-11-15",
    time: "7:00 PM",
    opponent: "West Virginia State",
    location: "Home",
    venue: "WVSU Gym",
    result: "W",
    score: "78-65",
    status: "completed"
  },
  {
    id: 2,
    date: "2024-11-22",
    time: "6:30 PM",
    opponent: "Virginia Union",
    location: "Away",
    venue: "Barco-Stevens Hall",
    result: "L",
    score: "72-81",
    status: "completed"
  },
  {
    id: 3,
    date: "2024-11-29",
    time: "7:30 PM",
    opponent: "Lincoln (PA)",
    location: "Home",
    venue: "WVSU Gym",
    result: "W",
    score: "85-70",
    status: "completed"
  },
  {
    id: 4,
    date: "2024-12-05",
    time: "8:00 PM",
    opponent: "Bowie State",
    location: "Away",
    venue: "Leonidas S. James Complex",
    result: "W",
    score: "92-88",
    status: "completed"
  },
  {
    id: 5,
    date: "2024-12-12",
    time: "7:00 PM",
    opponent: "Elizabeth City State",
    location: "Home",
    venue: "WVSU Gym",
    result: "W",
    score: "76-63",
    status: "completed"
  },
  {
    id: 6,
    date: "2024-12-19",
    time: "6:00 PM",
    opponent: "Fayetteville State",
    location: "Away",
    venue: "Capel Arena",
    result: "L",
    score: "68-75",
    status: "completed"
  },
  {
    id: 7,
    date: "2025-01-08",
    time: "7:30 PM",
    opponent: "Johnson C. Smith",
    location: "Home",
    venue: "WVSU Gym",
    result: "W",
    score: "89-72",
    status: "completed"
  },
  {
    id: 8,
    date: "2025-01-15",
    time: "8:00 PM",
    opponent: "Shaw University",
    location: "Away",
    venue: "C.C. Spaulding Gym",
    result: "W",
    score: "83-79",
    status: "completed"
  },
  {
    id: 9,
    date: "2025-02-15",
    time: "7:30 PM",
    opponent: "Virginia State",
    location: "Home",
    venue: "WVSU Gym",
    status: "upcoming"
  },
  {
    id: 10,
    date: "2025-02-22",
    time: "6:30 PM",
    opponent: "Winston-Salem State",
    location: "Away",
    venue: "C.E. Gaines Center",
    status: "upcoming"
  },
  {
    id: 11,
    date: "2025-03-01",
    time: "7:00 PM",
    opponent: "Livingstone College",
    location: "Home",
    venue: "WVSU Gym",
    status: "upcoming"
  },
  {
    id: 12,
    date: "2025-03-08",
    time: "TBD",
    opponent: "CIAA Tournament",
    location: "Charlotte, NC",
    venue: "Bojangles Coliseum",
    status: "upcoming"
  }
]

const completedGames = games.filter(game => game.status === "completed")
const upcomingGames = games.filter(game => game.status === "upcoming")

function GameCard({ game }: { game: typeof games[0] }) {
  const isCompleted = game.status === "completed"
  const isWin = game.result === "W"
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-sm text-gray-500">
              {new Date(game.date).toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
            <div className="text-sm font-medium">{game.time}</div>
          </div>
          {isCompleted && (
            <Badge 
              variant={isWin ? "default" : "destructive"}
              className={isWin ? "bg-green-600" : ""}
            >
              {game.result}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#0F1D44] rounded-full flex items-center justify-center">
              <span className="text-[#C0AD72] font-bold text-sm">BS</span>
            </div>
            <div>
              <div className="font-semibold text-[#0F1D44]">Bluefield State</div>
              <div className="text-sm text-gray-500">Big Blues</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">vs</div>
            {isCompleted && (
              <div className="font-bold text-lg">{game.score}</div>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="font-semibold">{game.opponent}</div>
              <div className="text-sm text-gray-500">
                {game.location === "Home" ? "@ Home" : "@ Away"}
              </div>
            </div>
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-bold text-xs">OPP</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-gray-600">{game.venue}</div>
          {game.location === "Home" && (
            <Badge variant="outline" className="mt-2 border-[#C0AD72] text-[#C0AD72]">
              Home Game
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function SchedulePage() {
  const wins = completedGames.filter(game => game.result === "W").length
  const losses = completedGames.filter(game => game.result === "L").length
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0F1D44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              2024-25 <span className="text-[#C0AD72]">Schedule</span>
            </h1>
            <p className="text-xl text-white/90 mb-6">Big Blues Basketball Season</p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C0AD72]">{wins}</div>
                <div className="text-white/80">Wins</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C0AD72]">{losses}</div>
                <div className="text-white/80">Losses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C0AD72]">{upcomingGames.length}</div>
                <div className="text-white/80">Remaining</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upcoming" className="data-[state=active]:bg-[#0F1D44] data-[state=active]:text-white">
                  Upcoming Games ({upcomingGames.length})
                </TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-[#0F1D44] data-[state=active]:text-white">
                  Completed Games ({completedGames.length})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="space-y-4">
                {upcomingGames.length > 0 ? (
                  upcomingGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <p className="text-gray-500">No upcoming games scheduled.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="completed" className="space-y-4">
                {completedGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Next Game Highlight */}
      {upcomingGames.length > 0 && (
        <section className="py-16 bg-[#0F1D44] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Next Game</h2>
              <div className="bg-white/10 rounded-lg p-8">
                <div className="text-2xl font-bold text-[#C0AD72] mb-2">
                  vs {upcomingGames[0].opponent}
                </div>
                <div className="text-lg mb-4">
                  {new Date(upcomingGames[0].date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} at {upcomingGames[0].time}
                </div>
                <div className="text-white/80">
                  {upcomingGames[0].venue}
                </div>
                <Badge 
                  variant="secondary" 
                  className="mt-4 bg-[#C0AD72] text-[#0F1D44]"
                >
                  {upcomingGames[0].location} Game
                </Badge>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
