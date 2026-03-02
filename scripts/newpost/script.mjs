import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url"
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import minimist from 'minimist';
import getContent from "./getContent.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createPost(title, isHebTitle = false) {
  const rl = readline.createInterface({ input, output });
  const slug = title.toLowerCase().replaceAll(/\s+/g, '-')
  const filename = `${slug}.mdx`
  const filepath = path.resolve(__dirname, "../../src/content/posts", filename);
  const assetPath = path.resolve(__dirname, "../../src/assets", slug);
  const answer = await rl.question(
    `A new post will be created
    Title: ${title}
    Slug & Asset Path: ${slug}
    Should we proceed?`);
  
  if (answer.toLowerCase() === "y") {
    await fs.writeFile(filepath, getContent({title}))
    await fs.mkdir(assetPath);
    console.info(`Post created: ${filepath}`)
  } else {
    console.info("Post creation aborted...")
    console.info(`Usage: npm run newpost -- --title="New york pizza"`)
  }

  rl.close();

}



const argv = minimist(process.argv.slice(2));
const { title } = argv;

createPost(title).catch(err => {
    console.error('Error creating post:', err)
    process.exit(1)
})




