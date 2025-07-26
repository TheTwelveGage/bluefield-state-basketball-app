// Web scraping utilities for Bluefield State basketball data
import * as cheerio from 'cheerio';

const BASE_URL = 'https://gobstate.com/sports/mens-basketball';

export interface Player {
  id: number;
  name: string;
  jersey: number;
  position: string;
  height: string;
  weight: string;
  year: string;
  hometown: string;
  previousSchool: string;
}

export interface Game {
  id: number;
  date: string;
  time: string;
  opponent: string;
  location: string;
  venue: string;
  result?: string;
  score?: string;
  status: 'completed' | 'upcoming';
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  featured: boolean;
}

// Scrape roster data
export async function scrapeRoster(): Promise<Player[]> {
  try {
    const response = await fetch(`${BASE_URL}/roster`);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const players: Player[] = [];
    
    // This selector would need to be adjusted based on the actual HTML structure
    $('.roster-player').each((index: number, element: any) => {
      const $player = $(element);
      
      const player: Player = {
        id: index + 1,
        name: $player.find('.player-name').text().trim(),
        jersey: parseInt($player.find('.jersey-number').text().trim()) || 0,
        position: $player.find('.position').text().trim(),
        height: $player.find('.height').text().trim(),
        weight: $player.find('.weight').text().trim(),
        year: $player.find('.year').text().trim(),
        hometown: $player.find('.hometown').text().trim(),
        previousSchool: $player.find('.previous-school').text().trim()
      };
      
      if (player.name) {
        players.push(player);
      }
    });
    
    return players;
  } catch (error) {
    console.error('Error scraping roster:', error);
    return [];
  }
}

// Scrape schedule data
export async function scrapeSchedule(): Promise<Game[]> {
  try {
    const response = await fetch(`${BASE_URL}/schedule`);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const games: Game[] = [];
    
    $('.schedule-game').each((index: number, element: any) => {
      const $game = $(element);
      
      const game: Game = {
        id: index + 1,
        date: $game.find('.game-date').text().trim(),
        time: $game.find('.game-time').text().trim(),
        opponent: $game.find('.opponent').text().trim(),
        location: $game.find('.location').text().includes('Home') ? 'Home' : 'Away',
        venue: $game.find('.venue').text().trim(),
        result: $game.find('.result').text().trim() || undefined,
        score: $game.find('.score').text().trim() || undefined,
        status: $game.find('.result').length > 0 ? 'completed' : 'upcoming'
      };
      
      if (game.opponent) {
        games.push(game);
      }
    });
    
    return games;
  } catch (error) {
    console.error('Error scraping schedule:', error);
    return [];
  }
}

// Scrape news articles
export async function scrapeNews(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(`${BASE_URL}/news`);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const articles: NewsArticle[] = [];
    
    $('.news-article').each((index: number, element: any) => {
      const $article = $(element);
      
      const article: NewsArticle = {
        id: index + 1,
        title: $article.find('.article-title').text().trim(),
        excerpt: $article.find('.article-excerpt').text().trim(),
        content: $article.find('.article-content').text().trim(),
        date: $article.find('.article-date').text().trim(),
        category: $article.find('.article-category').text().trim() || 'Team News',
        author: $article.find('.article-author').text().trim() || 'Sports Information',
        featured: $article.hasClass('featured')
      };
      
      if (article.title) {
        articles.push(article);
      }
    });
    
    return articles;
  } catch (error) {
    console.error('Error scraping news:', error);
    return [];
  }
}

// Generic scraper function that can be customized
export async function scrapeData(url: string, selectors: Record<string, string>) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const data: Record<string, string> = {};
    
    Object.entries(selectors).forEach(([key, selector]) => {
      data[key] = $(selector).text().trim();
    });
    
    return data;
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return {};
  }
}
