import { NextResponse } from 'next/server';
import { scrapeRoster } from '@/lib/scraper';

// Mock data as fallback
const mockPlayers = [
  {
    id: 1,
    name: "Larry Howell",
    jersey: 0,
    position: "F",
    height: "6'6\"",
    weight: "210",
    year: "Junior",
    hometown: "Orangeburg, SC",
    previousSchool: "Richard Bland CC"
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
    previousSchool: "Monroe CC"
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
    previousSchool: "Bluefield State"
  }
];

export async function GET() {
  try {
    // Try to scrape live data first
    const scrapedPlayers = await scrapeRoster();
    
    // If scraping returns data, use it; otherwise use mock data
    const players = scrapedPlayers.length > 0 ? scrapedPlayers : mockPlayers;
    
    return NextResponse.json(players);
  } catch (error) {
    console.error('Error in roster API:', error);
    // Return mock data if scraping fails
    return NextResponse.json(mockPlayers);
  }
}
