"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts"

// Mock statistics data - in a real app, this would come from the API
const teamStats = {
  record: { wins: 18, losses: 8 },
  conferenceRecord: { wins: 12, losses: 4 },
  averages: {
    pointsFor: 78.5,
    pointsAgainst: 71.2,
    rebounds: 38.4,
    assists: 16.8,
    steals: 7.3,
    blocks: 4.1,
    turnovers: 12.6,
    fieldGoalPercentage: 0.467,
    threePointPercentage: 0.342,
    freeThrowPercentage: 0.738
  },
  rankings: {
    ciaaScoring: 2,
    ciaaDefense: 4,
    ciaaRebounding: 3,
    ciaaAssists: 1
  }
}

const playerStats = [
  {
    name: "Jordan Hinds",
    position: "G",
    gamesPlayed: 26,
    pointsPerGame: 18.5,
    reboundsPerGame: 5.3,
    assistsPerGame: 4.1,
    fieldGoalPercentage: 0.521,
    threePointPercentage: 0.389,
    freeThrowPercentage: 0.842
  },
  {
    name: "Larry Howell",
    position: "F",
    gamesPlayed: 25,
    pointsPerGame: 15.2,
    reboundsPerGame: 8.1,
    assistsPerGame: 2.3,
    fieldGoalPercentage: 0.485,
    threePointPercentage: 0.267,
    freeThrowPercentage: 0.756
  },
  {
    name: "Terrell Washington",
    position: "F",
    gamesPlayed: 24,
    pointsPerGame: 13.6,
    reboundsPerGame: 7.4,
    assistsPerGame: 2.8,
    fieldGoalPercentage: 0.478,
    threePointPercentage: 0.312,
    freeThrowPercentage: 0.689
  },
  {
    name: "Rell Williams",
    position: "G",
    gamesPlayed: 26,
    pointsPerGame: 12.8,
    reboundsPerGame: 4.2,
    assistsPerGame: 5.7,
    fieldGoalPercentage: 0.442,
    threePointPercentage: 0.378,
    freeThrowPercentage: 0.823
  },
  {
    name: "Marcus Thompson",
    position: "C",
    gamesPlayed: 23,
    pointsPerGame: 11.2,
    reboundsPerGame: 9.8,
    assistsPerGame: 1.5,
    fieldGoalPercentage: 0.567,
    threePointPercentage: 0.000,
    freeThrowPercentage: 0.634
  }
]

const gameByGameScoring = [
  { game: 1, points: 78, opponent: "WVSU" },
  { game: 2, points: 72, opponent: "VUU" },
  { game: 3, points: 85, opponent: "Lincoln" },
  { game: 4, points: 92, opponent: "Bowie St" },
  { game: 5, points: 76, opponent: "ECSU" },
  { game: 6, points: 68, opponent: "FSU" },
  { game: 7, points: 89, opponent: "JCSU" },
  { game: 8, points: 83, opponent: "Shaw" },
  { game: 9, points: 79, opponent: "VSU" },
  { game: 10, points: 87, opponent: "WSSU" }
]

const scoringDistribution = [
  { name: "Jordan Hinds", value: 18.5, color: "#0F1D44" },
  { name: "Larry Howell", value: 15.2, color: "#C0AD72" },
  { name: "Terrell Washington", value: 13.6, color: "#2563eb" },
  { name: "Rell Williams", value: 12.8, color: "#7c3aed" },
  { name: "Others", value: 18.4, color: "#6b7280" }
]

const COLORS = ["#0F1D44", "#C0AD72", "#2563eb", "#7c3aed", "#6b7280"]

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0F1D44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Team <span className="text-[#C0AD72]">Statistics</span>
            </h1>
            <p className="text-xl text-white/90">2024-25 Season Performance</p>
          </div>
        </div>
      </section>

      {/* Quick Stats Overview */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#0F1D44] mb-2">
                    {teamStats.record.wins}-{teamStats.record.losses}
                  </div>
                  <div className="text-gray-600">Overall Record</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#C0AD72] mb-2">
                    {teamStats.conferenceRecord.wins}-{teamStats.conferenceRecord.losses}
                  </div>
                  <div className="text-gray-600">CIAA Record</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#0F1D44] mb-2">
                    {teamStats.averages.pointsFor}
                  </div>
                  <div className="text-gray-600">PPG</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#C0AD72] mb-2">
                    +{(teamStats.averages.pointsFor - teamStats.averages.pointsAgainst).toFixed(1)}
                  </div>
                  <div className="text-gray-600">Point Differential</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="team" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="team" className="data-[state=active]:bg-[#0F1D44] data-[state=active]:text-white">
                  Team Stats
                </TabsTrigger>
                <TabsTrigger value="players" className="data-[state=active]:bg-[#0F1D44] data-[state=active]:text-white">
                  Player Stats
                </TabsTrigger>
                <TabsTrigger value="charts" className="data-[state=active]:bg-[#0F1D44] data-[state=active]:text-white">
                  Charts & Trends
                </TabsTrigger>
              </TabsList>

              {/* Team Statistics */}
              <TabsContent value="team" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#0F1D44]">Offensive Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Points Per Game:</span>
                        <span className="font-bold">{teamStats.averages.pointsFor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Field Goal %:</span>
                        <span className="font-bold">{(teamStats.averages.fieldGoalPercentage * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>3-Point %:</span>
                        <span className="font-bold">{(teamStats.averages.threePointPercentage * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Free Throw %:</span>
                        <span className="font-bold">{(teamStats.averages.freeThrowPercentage * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Assists Per Game:</span>
                        <span className="font-bold">{teamStats.averages.assists}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Turnovers Per Game:</span>
                        <span className="font-bold">{teamStats.averages.turnovers}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#0F1D44]">Defensive Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Points Allowed:</span>
                        <span className="font-bold">{teamStats.averages.pointsAgainst}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rebounds Per Game:</span>
                        <span className="font-bold">{teamStats.averages.rebounds}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Steals Per Game:</span>
                        <span className="font-bold">{teamStats.averages.steals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Blocks Per Game:</span>
                        <span className="font-bold">{teamStats.averages.blocks}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#0F1D44]">CIAA Conference Rankings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#C0AD72] mb-1">#{teamStats.rankings.ciaaScoring}</div>
                        <div className="text-sm text-gray-600">Scoring Offense</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#C0AD72] mb-1">#{teamStats.rankings.ciaaDefense}</div>
                        <div className="text-sm text-gray-600">Scoring Defense</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#C0AD72] mb-1">#{teamStats.rankings.ciaaRebounding}</div>
                        <div className="text-sm text-gray-600">Rebounding</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#C0AD72] mb-1">#{teamStats.rankings.ciaaAssists}</div>
                        <div className="text-sm text-gray-600">Assists</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Player Statistics */}
              <TabsContent value="players">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#0F1D44]">Leading Players</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Player</th>
                            <th className="text-left p-2">Pos</th>
                            <th className="text-center p-2">GP</th>
                            <th className="text-center p-2">PPG</th>
                            <th className="text-center p-2">RPG</th>
                            <th className="text-center p-2">APG</th>
                            <th className="text-center p-2">FG%</th>
                            <th className="text-center p-2">3P%</th>
                            <th className="text-center p-2">FT%</th>
                          </tr>
                        </thead>
                        <tbody>
                          {playerStats.map((player, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="p-2 font-medium">{player.name}</td>
                              <td className="p-2">
                                <Badge variant="outline" className="border-[#0F1D44] text-[#0F1D44]">
                                  {player.position}
                                </Badge>
                              </td>
                              <td className="p-2 text-center">{player.gamesPlayed}</td>
                              <td className="p-2 text-center font-bold text-[#C0AD72]">{player.pointsPerGame}</td>
                              <td className="p-2 text-center">{player.reboundsPerGame}</td>
                              <td className="p-2 text-center">{player.assistsPerGame}</td>
                              <td className="p-2 text-center">{(player.fieldGoalPercentage * 100).toFixed(1)}%</td>
                              <td className="p-2 text-center">{player.threePointPercentage > 0 ? (player.threePointPercentage * 100).toFixed(1) + '%' : '-'}</td>
                              <td className="p-2 text-center">{(player.freeThrowPercentage * 100).toFixed(1)}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Charts and Trends */}
              <TabsContent value="charts" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#0F1D44]">Scoring Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={gameByGameScoring}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="game" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="points" stroke="#0F1D44" strokeWidth={3} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#0F1D44]">Scoring Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={scoringDistribution}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value }) => `${name}: ${value}`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {scoringDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#0F1D44]">Player Comparison - Points Per Game</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={playerStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pointsPerGame" fill="#0F1D44" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
