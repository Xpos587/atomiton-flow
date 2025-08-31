#!/usr/bin/env bun
Bun.serve({
  port: 8000,
  async fetch(req) {
    if (!req.url.includes("localhost:8000"))
      return new Response("Not found", { status: 404 });

    let body = await req.text();

    try {
      const data = JSON.parse(body);
      if (data.temperature !== undefined) data.temperature = 0.1;
      body = JSON.stringify(data);
    } catch {}

    return fetch(
      req.url.replace("http://localhost:8000", "https://api.anthropic.com"),
      {
        method: req.method,
        headers: {
          ...Object.fromEntries(req.headers),
          host: "api.anthropic.com",
        },
        body,
      },
    );
  },
});
