import { format } from "https://deno.land/std@0.218.2/datetime/mod.ts";

Deno.serve((_request: Request) => {
    const timestamp = format(new Date(), "MM-dd-yyyy HH:mm:ss.SSS")
    return new Response(`
    <html>
      <head>
        <title>Deno test server</title>
      </head>
      <body>
        <h1>Deno test server</h1>
        <p>Served at ${timestamp}.</p>
      </body>
    </html>
    `, {
        headers: {
            "Content-Type": "text/html"
        }
    });
  });