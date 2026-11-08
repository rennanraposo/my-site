import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rennan Raposo, estudante de Engenharia de Software e entusiasta de inteligência artificial." />
        <meta name="theme-color" content="#101318" />
        <title>Rennan Raposo | Página pessoal</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          .robot-eyes { transform-origin: 320px 124px; animation: robot-blink 5s infinite; }
          .robot-steam { animation: robot-rise 3s ease-in-out infinite; }
          .robot-steam-second { animation-delay: -1.5s; }
          @keyframes robot-blink { 0%, 46%, 50%, 100% { transform: scaleY(1); } 48% { transform: scaleY(.08); } }
          @keyframes robot-rise { 0% { opacity: 0; transform: translateY(5px); } 35% { opacity: .85; } 100% { opacity: 0; transform: translateY(-13px); } }
          @media (prefers-reduced-motion: reduce) { .robot-eyes, .robot-steam { animation: none; } }
        `}</style>
      </head>
      <body class="bg-[#101318] text-[#f0f2f5] antialiased" style="font-family: 'DM Sans', sans-serif;">
        <div class="mx-auto flex min-h-screen max-w-6xl flex-col px-6 sm:px-12 lg:px-20">
          <header class="flex items-center justify-between border-b border-white/10 py-7">
            <a href="/" class="text-sm font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9c9eb]">Rennan Raposo<span class="text-[#a9c9eb]">.</span></a>
            <a href="https://github.com/rennanraposo" class="text-sm text-[#bac3cf] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9c9eb]">GitHub ↗</a>
          </header>
          <main class="flex flex-1 flex-col justify-center py-20 sm:py-28">
            <div class="grid items-start gap-16 lg:grid-cols-[1fr_280px] lg:gap-20">
              <section aria-labelledby="intro">
                <p class="mb-7 text-sm font-medium text-[#a9c9eb]">Olá, eu sou</p>
                <div class="flex items-center gap-x-2 sm:gap-x-7">
                  <h1 id="intro" class="min-w-0 text-[clamp(2.25rem,10vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">Rennan<br />Raposo<span class="text-[#a9c9eb]">.</span></h1>
                  <svg viewBox="195 35 315 250" class="w-[clamp(4.5rem,24vw,9rem)] shrink-0 text-[#d6e7f8] sm:w-44 lg:w-48" role="img" aria-label="Robô estudando em um notebook ao lado de uma xícara de café">
                    <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M205 270h295M320 61v16m-6-22a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                      <rect x="257" y="77" width="126" height="94" rx="28" />
                      <path d="M257 113h-8v26h8m126-26h8v26h-8M306 145q14 10 28 0" />
                      <g class="robot-eyes"><circle cx="296" cy="124" r="5" /><circle cx="344" cy="124" r="5" /></g>
                      <path d="M274 173q-24 9-30 38m122-38q24 9 30 38M243 211l-17 23m171-23 17 23" />
                      <path d="M247 195h146l-11 65H258zM238 260h164" />
                      <circle cx="320" cy="228" r="4" />
                      <path d="M437 229h46l-4 28q-1 8-10 8h-18q-9 0-10-8zM483 235h7q9 0 9 9t-9 9h-7" />
                      <path class="robot-steam" d="M450 219q-5-5 0-10t0-10" />
                      <path class="robot-steam robot-steam-second" d="M470 219q-5-5 0-10t0-10" />
                    </g>
                  </svg>
                </div>
                <p class="mt-8 max-w-xl text-xl leading-relaxed text-[#c8d0da] sm:text-2xl">Estudante de Engenharia de Software e entusiasta de inteligência artificial.</p>
                <p class="mt-6 max-w-xl text-base leading-8 text-[#9aa6b5]">Estudo na UniBrasil e estou a caminho do terceiro período. Atualmente, estou aprendendo a utilizar agentes de IA com o OpenCode.</p>
                <a href="https://github.com/rennanraposo" class="mt-10 inline-flex items-center gap-3 rounded-md bg-[#d6e7f8] px-5 py-3.5 text-sm font-bold text-[#17202b] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9c9eb]">
                  Conheça meu GitHub <span aria-hidden="true">↗</span>
                </a>
              </section>
              <aside class="border-t border-white/15 pt-6 lg:mt-3" aria-labelledby="interesses">
                <h2 id="interesses" class="text-sm font-medium text-[#9aa6b5]">O que estou explorando</h2>
                <ul class="mt-6 space-y-4 text-base text-[#e4e9ef]">
                  <li>Engenharia de Software</li>
                  <li>Inteligência Artificial</li>
                  <li>Agentes de IA</li>
                </ul>
                <div class="mt-10 h-px w-12 bg-[#a9c9eb]"></div>
              </aside>
            </div>
          </main>
          <footer class="flex flex-wrap justify-between gap-3 border-t border-white/10 py-6 text-sm text-[#9aa6b5]">
            <p>Rennan Raposo</p>
            <p>Aprendendo e construindo, um passo de cada vez.</p>
            <a href="https://github.com/rennanraposo/my-site" class="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9c9eb]">Código-fonte ↗</a>
          </footer>
        </div>
      </body>
    </html>
  )
})

export default app
