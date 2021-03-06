import fs from 'fs'
import Parser from 'rss-parser'

const postCount = 3

const fetchMediumPosts = async () => {
    const parser = new Parser()

    const feed = await parser.parseURL('https://medium.com/feed/qest')
    const posts = []

    for (let i = 0; i < postCount; i++) {
        const post = feed.items[i]

        if (post) {
            posts.push({
                creator: post.creator,
                title: post.title || '',
                link: post.link,
                date: new Date(post.isoDate || ''),
                img: post['content:encoded'].match(
                    /(?<=(<img[^>]+src="))([^"\s]+)(?!"[^>]*\/z)/g
                )[0],
                snippet: (post['content:encodedSnippet'] || '').split('\n', 3)[1],
            })
        }
    }
    fs.writeFile('./public/posts.json', JSON.stringify(posts), () => {})
}

fetchMediumPosts()
