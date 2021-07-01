import Parser from 'rss-parser'

const postCount = 3

// TODO: Use type guards
export type MediumPost = {
  creator: string
  title: string
  link: string
  date: string
  img: string
  snippet: string
}

// TODO: Refactor this ugly function
export const fetchMediumPosts = async (): Promise<MediumPost[]> => {
  const parser = new Parser()

  const feed = await parser.parseURL('https://medium.com/feed/qest')
  const posts = []

  for (let i = 0; i < postCount; i++) {
    const post = feed.items[i]

    if (post) {
      posts.push({
        creator: post.creator ?? '',
        title: post.title ?? '',
        link: post.link ?? '',
        date: post.isoDate ?? '',
        img: post['content:encoded'].match(/(?<=(<img[^>]+src="))([^"\s]+)(?!"[^>]*\/z)/g)[0],
        snippet: (post['content:encodedSnippet'] || '').split('\n', 3)[1],
      })
    }
  }
  return posts
}
