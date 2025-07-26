"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Mock news data - in a real app, this would come from the API
const newsArticles = [
  {
    id: 1,
    title: "Jordan Hinds Earns Atlantic Region Player of the Year",
    excerpt: "Bluefield State's Jordan Hinds has been named Atlantic Region Player of the Year by the Division II Conference Commissioner's Association (D2CAA). This prestigious award recognizes his outstanding performance throughout the season.",
    content: "Bluefield, WV – Jordan Hinds has been named Atlantic Region Player of the Year by the Division II Conference Commissioner's Association (D2CAA). The senior guard from Charleston, WV, has led the Big Blues to an impressive 18-8 record this season, averaging 18.5 points, 5.3 rebounds, and 4.1 assists per game. Hinds shot an impressive 52.1% from the field and has been instrumental in the team's success in CIAA play.",
    date: "2025-03-14",
    category: "Awards",
    featured: true,
    author: "Sports Information"
  },
  {
    id: 2,
    title: "Big Blues Secure CIAA Tournament Berth",
    excerpt: "The Bluefield State men's basketball team has officially secured their spot in the upcoming CIAA Tournament after a strong finish to the regular season.",
    content: "The Big Blues finished the regular season with a 12-4 conference record, earning them the #3 seed in the CIAA Tournament. Head Coach Mike Johnson praised the team's resilience and determination throughout the challenging conference schedule.",
    date: "2025-03-10",
    category: "Team News",
    featured: true,
    author: "Mike Stevens"
  },
  {
    id: 3,
    title: "Larry Howell Named CIAA Player of the Week",
    excerpt: "Junior forward Larry Howell has been selected as the CIAA Player of the Week following his dominant performances in two conference victories.",
    content: "Howell averaged 22 points and 12 rebounds in wins over Virginia Union and Lincoln (PA). The 6'6\" forward from Orangeburg, SC, shot 65% from the field and was perfect from the free-throw line during the week.",
    date: "2025-03-05",
    category: "Awards",
    featured: false,
    author: "Sports Information"
  },
  {
    id: 4,
    title: "Big Blues Host Youth Basketball Camp",
    excerpt: "Bluefield State will host its annual youth basketball camp this summer, providing young athletes with the opportunity to learn from current players and coaching staff.",
    content: "The camp will run from June 15-19 and is open to players ages 8-16. Participants will receive instruction in fundamental skills, team play, and sportsmanship. Registration is now open on the athletics website.",
    date: "2025-03-01",
    category: "Community",
    featured: false,
    author: "Athletics Department"
  },
  {
    id: 5,
    title: "Senior Night Celebration Honors Four Players",
    excerpt: "The Big Blues honored four senior players during their final regular season home game, celebrating their contributions to the program.",
    content: "Jordan Hinds, Terrell Washington, Marcus Davis, and Anthony Brown were recognized for their dedication and leadership throughout their careers at Bluefield State. The ceremony took place before the team's victory over Shaw University.",
    date: "2025-02-28",
    category: "Team News",
    featured: false,
    author: "Mike Stevens"
  },
  {
    id: 6,
    title: "Big Blues Win Streak Reaches Seven Games",
    excerpt: "Bluefield State extended their winning streak to seven games with a convincing victory over Johnson C. Smith University.",
    content: "The 89-72 victory showcased the team's balanced scoring attack, with five players reaching double figures. The win improved the Big Blues' conference record to 11-3 and strengthened their position for the CIAA Tournament.",
    date: "2025-02-20",
    category: "Game Recap",
    featured: false,
    author: "Sports Information"
  },
  {
    id: 7,
    title: "Coach Johnson Reaches 200-Win Milestone",
    excerpt: "Head Coach Mike Johnson achieved his 200th career victory as the Big Blues defeated Elizabeth City State 76-63.",
    content: "Johnson, who is in his 12th season at Bluefield State, reached this milestone in front of a packed home crowd. The victory was a testament to his consistent leadership and the program's sustained success under his guidance.",
    date: "2025-02-15",
    category: "Coaching",
    featured: false,
    author: "Athletics Department"
  },
  {
    id: 8,
    title: "Academic Excellence: Five Players Named to Dean's List",
    excerpt: "Five members of the men's basketball team have been recognized for their academic achievements by being named to the Dean's List for the fall semester.",
    content: "Jordan Hinds, Rell Williams, Marcus Thompson, Darius Johnson, and Terrell Washington all maintained GPAs of 3.5 or higher while balancing their athletic commitments. This recognition highlights the program's emphasis on academic success.",
    date: "2025-02-10",
    category: "Academics",
    featured: false,
    author: "Academic Affairs"
  }
]

const categories = ["All", "Awards", "Team News", "Game Recap", "Community", "Coaching", "Academics"]

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0F1D44] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Big Blues <span className="text-[#C0AD72]">News</span>
            </h1>
            <p className="text-xl text-white/90">Latest updates from Bluefield State Basketball</p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 
                      "bg-[#0F1D44] text-white" : 
                      "border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-[#0F1D44] mb-6">Featured News</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-[#0F1D44] to-[#C0AD72] flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <Badge className="bg-[#C0AD72] text-[#0F1D44] mb-4">
                          {article.category}
                        </Badge>
                        <h3 className="text-xl font-bold">{article.title}</h3>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                        <span>By {article.author}</span>
                      </div>
                      <CardTitle className="text-[#0F1D44] line-clamp-2">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                      <Button 
                        variant="outline" 
                        className="border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
                      >
                        Read Full Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {featuredArticles.length > 0 && (
              <h2 className="text-2xl font-bold text-[#0F1D44] mb-6">More News</h2>
            )}
            <div className="space-y-6">
              {regularArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 h-32 bg-gradient-to-br from-[#0F1D44] to-[#C0AD72] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Badge className="bg-[#C0AD72] text-[#0F1D44]">
                          {article.category}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                          <span>By {article.author}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0F1D44] mb-3">{article.title}</h3>
                        <p className="text-gray-700 mb-4 line-clamp-2">{article.excerpt}</p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-[#0F1D44] text-[#0F1D44] hover:bg-[#0F1D44] hover:text-white"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredArticles.length === 0 && (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500">No articles found matching your search criteria.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#0F1D44] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/90 mb-8">
              Get the latest news and updates from Big Blues Basketball delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 bg-white text-black"
              />
              <Button className="bg-[#C0AD72] text-[#0F1D44] hover:bg-[#C0AD72]/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
