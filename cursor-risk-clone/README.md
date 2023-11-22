learnings from this gen attempt:

1. GPT-4 via ChatGPT is much more up to date vs cursor; versioned next at 14.x vs 11.x
   a. maybe next time around we specify to Cursor to use 14.x? will it retrieve info or hallucinate? not sure atm
2. Do specify Next.js or Cursor will build you with webpack
3. Do specify a 2D board game or GPT-4 will install 3d capability by default
4. Recipes or repo-level refactoring is still hard for either approach. Adding Tailwind to the existing project was rougher than using Blitz.js or some templated approach
5. Ably is allegedly the most Vercel-compatible serverless sockets platform (for chat or w/e) however the Ably-Vercel template didn't work ootb, got 500s
6. Cursor Chat couldn't tell me how to use cursor
7. Specify you want a README and MIT license from Cursor

so, ai code gen rly isn't there yet even for a basic risk clone. we did get a canvas board with hex or square cells easy enough. we could go for REST-based game updates with polling over sockets.
