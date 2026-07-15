import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';

const worker = `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (request.method === "GET" && response.status === 404) {
      const url = new URL(request.url);
      url.pathname = "/index.html";
      url.search = "";
      return env.ASSETS.fetch(new Request(url, request));
    }

    return response;
  },
};
`;

await mkdir('dist/server', { recursive: true });
await mkdir('dist/.openai', { recursive: true });
await writeFile('dist/server/index.js', worker);

await readFile('.openai/hosting.json', 'utf8');
await copyFile('.openai/hosting.json', 'dist/.openai/hosting.json');
