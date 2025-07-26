"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock player data - in a real app, this would come from the API
const players = [
  {
    id: 1,
    name: "Larry Howell",
    jersey: 0,
    position: "F",
    height: "6'6\"",
    weight: "210",
    year: "Junior",
    hometown: "Orangeburg, SC",
    previousSchool: "Richard Bland CC",
    stats: {
      ppg: 15.2,
      rpg: 8.1,
      apg: 2.3,
      fgp: 0.485
    }
  },
  {
    id: 2,
    name: "Rell Williams",
    jersey: 1,
    position: "G",
    height: "6'3\"",
    weight: "185",
    year: "Junior",
    hometown: "Brooklyn, NY",
    previousSchool: "Monroe CC",
    stats: {
      ppg: 12.8,
      rpg: 4.2,
      apg: 5.7,
      fgp: 0.442
    }
  },
  {
    id: 3,
    name: "Jordan Hinds",
    jersey: 23,
    position: "G",
    height: "6'2\"",
    weight: "180",
    year: "Senior",
    hometown: "Charleston, WV",
    previousSchool: "Bluefield State",
    stats: {
      ppg: 18.5,
      rpg: 5.3,
      apg: 4.1,
      fgp: 0.521
    }
  },
  {
    id: 4,
    name: "Marcus Thompson",
    jersey: 15,
    position: "C",
    height: "6'8\"",
    weight: "235",
    year: "Sophomore",
    hometown: "Richmond, VA",
    previousSchool: "Bluefield State",
    stats: {
      ppg: 11.2,
      rpg: 9.8,
      apg: 1.5,
      fgp: 0.567
    }
  },
  {
    id: 5,
    name: "Darius Johnson",
    jersey: 3,
    position: "G",
    height: "6'1\"",
    weight: "175",
    year: "Freshman",
    hometown: "Atlanta, GA",
    previousSchool: "North Atlanta HS",
    stats: {
      ppg: 8.7,
      rpg: 2.9,
      apg: 3.2,
      fgp: 0.398
    }
  },
  {
    id: 6,
    name: "Terrell Washington",
    jersey: 22,
    position: "F",
    height: "6'7\"",
    weight: "220",
    year: "Senior",
    hometown: "Norfolk, VA",
    previousSchool: "Norfolk State",
    stats: {
      ppg: 13.6,
      rpg: 7.4,
      apg: 2.8,
      fgp: 0.478
    }
  }
]

const positions = ["All", "G", "F", "C"]
const years = ["All", "Freshman", "Sophomore", "Junior", "Senior"]

export default function RosterPage() {
  const [selectedPosition, setSelectedPosition] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")

  const filteredPlayers = players.filter(player => {
    const positionMatch = selectedPosition === "All" || player.position === selectedPosition
    const yearMatch = selectedYear === "All" || player.year === selectedYear
    return positionMatch && yearMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0F1D44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              2024-25 <span className="text-[#C0AD72]">Roster</span>
            </h1>
            <p className="text-xl text-white/90">Meet the Big Blues Basketball Team</p>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-[#0F1D44] to-[#C0AD72] rounded-lg mb-8 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">2024-25 Team Photo</h3>
                <p className="text-white/80">Bluefield State Big Blues Basketball</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-[#0F1D44]">Position:</label>
                <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map(position => (
                      <SelectItem key={position} value={position}>{position}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-[#0F1D44]">Year:</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Cards */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player) => (
                <Card key={player.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-[#0F1D44] text-white text-center">
                    <div className="w-24 h-24 mx-auto bg-[#C0AD72] rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-[#0F1D44]">#{player.jersey}</span>
                    </div>
                    <CardTitle className="text-xl">{player.name}</CardTitle>
                    <div className="flex justify-center space-x-2 mt-2">
                      <Badge variant="secondary" className="bg-[#C0AD72] text-[#0F1D44]">
                        {player.position}
                      </Badge>
                      <Badge variant="outline" className="border-[#C0AD72] text-[#C0AD72]">
                        {player.height}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year:</span>
                        <span className="font-medium">{player.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-medium">{player.weight} lbs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hometown:</span>
                        <span className="font-medium text-right">{player.hometown}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Previous:</span>
                        <span className="font-medium text-right">{player.previousSchool}</span>
                      </div>
                      
                      <div className="border-t pt-3 mt-4">
                        <h4 className="font-semibold text-[#0F1D44] mb-2">Season Stats</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex justify-between">
                            <span>PPG:</span>
                            <span className="font-medium">{player.stats.ppg}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>RPG:</span>
                            <span className="font-medium">{player.stats.rpg}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>APG:</span>
                            <span className="font-medium">{player.stats.apg}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>FG%:</span>
                            <span className="font-medium">{(player.stats.fgp * 100).toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
