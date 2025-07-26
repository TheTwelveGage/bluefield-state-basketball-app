"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Mock photo data - in a real app, this would come from the API
const photoCategories = [
  {
    id: "team",
    name: "Team Photos",
    count: 12
  },
  {
    id: "games",
    name: "Game Action",
    count: 24
  },
  {
    id: "practice",
    name: "Practice",
    count: 8
  },
  {
    id: "events",
    name: "Events",
    count: 15
  }
]

const photos = [
  {
    id: 1,
    title: "2024-25 Team Photo",
    category: "team",
    date: "2024-10-15",
    description: "Official team photo for the 2024-25 season featuring all players and coaching staff."
  },
  {
    id: 2,
    title: "Jordan Hinds Game Winner",
    category: "games",
    date: "2025-01-15",
    description: "Jordan Hinds celebrates after hitting the game-winning shot against Shaw University."
  },
  {
    id: 3,
    title: "Larry Howell Dunk",
    category: "games",
    date: "2025-01-08",
    description: "Larry Howell throws down a powerful dunk during the victory over Johnson C. Smith."
  },
  {
    id: 4,
    title: "Team Huddle",
    category: "practice",
    date: "2024-12-10",
    description: "Players gather for a team huddle during practice preparation for conference play."
  },
  {
    id: 5,
    title: "Senior Night Ceremony",
    category: "events",
    date: "2025-02-28",
    description: "Senior players are honored during the pre-game ceremony on Senior Night."
  },
  {
    id: 6,
    title: "Coach Johnson 200th Win",
    category: "events",
    date: "2025-02-15",
    description: "Head Coach Mike Johnson celebrates his 200th career victory with the team."
  },
  {
    id: 7,
    title: "Defensive Stand",
    category: "games",
    date: "2025-02-01",
    description: "Big Blues defense forces a turnover during crucial conference matchup."
  },
  {
    id: 8,
    title: "Fast Break",
    category: "games",
    date: "2025-01-22",
    description: "Rell Williams leads a fast break opportunity against Virginia Union."
  },
  {
    id: 9,
    title: "Team Celebration",
    category: "games",
    date: "2025-03-01",
    description: "Players celebrate after securing their spot in the CIAA Tournament."
  },
  {
    id: 10,
    title: "Youth Camp",
    category: "events",
    date: "2024-07-15",
    description: "Players work with young athletes during the annual youth basketball camp."
  },
  {
    id: 11,
    title: "Pre-Game Warmup",
    category: "practice",
    date: "2025-01-10",
    description: "Team goes through pre-game warmup routine before conference game."
  },
  {
    id: 12,
    title: "Championship Banner",
    category: "team",
    date: "2024-11-01",
    description: "Team poses with conference championship banner from previous season."
  }
]

export default function PhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)

  const filteredPhotos = selectedCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0F1D44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Big Blues <span className="text-[#C0AD72]">Photos</span>
            </h1>
            <p className="text-xl text-white/90">Capturing the moments that matter</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? 
                  "bg-[#0F1D44] text-white" : 
                  "border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
                }
              >
                All Photos ({photos.length})
              </Button>
              {photoCategories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 
                    "bg-[#0F1D44] text-white" : 
                    "border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
                  }
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photo */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden mb-8">
              <div className="aspect-video bg-gradient-to-br from-[#0F1D44] to-[#C0AD72] flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Badge className="bg-[#C0AD72] text-[#0F1D44] mb-4">Featured</Badge>
                  <h2 className="text-3xl font-bold mb-4">2024-25 Team Photo</h2>
                  <p className="text-white/90 max-w-2xl">
                    The official team photo showcasing the Big Blues basketball team for the 2024-25 season, 
                    featuring all players, coaches, and support staff ready for another successful campaign.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => (
                <Dialog key={photo.id}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="aspect-video bg-gradient-to-br from-[#0F1D44] to-[#C0AD72] flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <Badge className="bg-[#C0AD72] text-[#0F1D44] mb-2">
                            {photoCategories.find(cat => cat.id === photo.category)?.name}
                          </Badge>
                          <h3 className="font-bold text-lg">{photo.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                          <span>{new Date(photo.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700 text-sm line-clamp-2">{photo.description}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="space-y-4">
                      <div className="aspect-video bg-gradient-to-br from-[#0F1D44] to-[#C0AD72] rounded-lg flex items-center justify-center">
                        <div className="text-white text-center p-8">
                          <Badge className="bg-[#C0AD72] text-[#0F1D44] mb-4">
                            {photoCategories.find(cat => cat.id === photo.category)?.name}
                          </Badge>
                          <h2 className="text-2xl font-bold mb-4">{photo.title}</h2>
                          <p className="text-white/90">{photo.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                          {new Date(photo.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                        <Button 
                          variant="outline"
                          className="border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {filteredPhotos.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500">No photos found in this category.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Photo Submission */}
      <section className="py-16 bg-[#0F1D44] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Share Your Photos</h2>
            <p className="text-white/90 mb-8">
              Have photos from games or events? Share them with the Big Blues community! 
              Send your best shots to be featured in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#C0AD72] text-[#0F1D44] hover:bg-[#C0AD72]/90">
                Submit Photos
              </Button>
              <Button 
                variant="outline" 
                className="border-[#C0AD72] text-[#C0AD72] hover:bg-[#C0AD72] hover:text-[#0F1D44]"
              >
                Photo Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#0F1D44] mb-4">Follow Us for More Photos</h3>
            <p className="text-gray-600 mb-6">
              Stay connected with Big Blues Basketball on social media for the latest photos, 
              behind-the-scenes content, and game highlights.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline"
                className="border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
              >
                Instagram
              </Button>
              <Button 
                variant="outline"
                className="border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
              >
                Twitter
              </Button>
              <Button 
                variant="outline"
                className="border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
              >
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
