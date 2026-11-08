# my-site

Página pessoal de Rennan Raposo, feita com Hono, TypeScript e Cloudflare Workers.

- Site: https://my-site.raposo-re.workers.dev
- Código da página: `src/index.tsx`
- Configuração do Worker: `wrangler.jsonc`

## Começar em outro computador

Requisitos: Git e uma versão LTS do Node.js compatível com o Wrangler instalado (consulte `node_modules/wrangler/package.json`). O npm acompanha o Node.js.

No terminal do VS Code, dentro de uma pasta onde você possa trabalhar:

```powershell
git clone https://github.com/rennanraposo/my-site.git
cd my-site
npm.cmd ci
npm.cmd run dev
```

Abra o endereço local informado pelo Wrangler. Abra essa mesma pasta como projeto no OpenCode. No Windows, `npm.cmd` evita conflitos com a política de execução de scripts do PowerShell; não é necessário alterar essa política. Em macOS ou Linux, use `npm`.

`npm ci` instala as versões do arquivo `package-lock.json`; não é preciso copiar `node_modules` entre computadores. Este site não usa bindings ou segredos de aplicação atualmente. Se isso mudar, as credenciais precisarão ser configuradas separadamente, nunca pelo GitHub público.

## Trabalhar em uma nova tarefa

Confira o estado da cópia antes de começar. Se houver alterações pendentes, registre ou resolva essas alterações antes de trocar de branch; não descarte trabalho.

```powershell
git status
git switch main
git pull --ff-only origin main
git switch -c feat/nome-da-tarefa
```

Depois de editar, teste localmente e simule o empacotamento sem publicar:

```powershell
npm.cmd run deploy -- --dry-run
git diff --check
git diff
```

O dry run valida o empacotamento, não substitui testar a página no navegador. Ainda não há testes automatizados configurados.

Adicione apenas os arquivos revisados (exemplo para uma mudança na página):

```powershell
git add src/index.tsx
git diff --cached
git commit -m "feat: descreve a alteração"
git push -u origin feat/nome-da-tarefa
```

No GitHub, abra um pull request da sua branch para `main`, revise e faça o merge. Não faça push direto na `main`. Use prefixos como `feat:`, `fix:`, `docs:` e `refactor:` nos commits.

## Publicação automática

O Worker `my-site` está conectado a este repositório pelo Workers Builds:

- Branch de produção: `main`.
- Diretório raiz: `/`.
- Comando de build separado: vazio; o Wrangler empacota o projeto.
- Comando de implantação: `npm run deploy`.
- Builds de preview: desativados nesta configuração inicial.

Um novo commit na `main`, inclusive um merge de pull request, aciona a publicação. Confira os registros da compilação e o site antes de considerar a tarefa concluída. Uma falha na publicação não significa que o commit falhou.

`npm.cmd run deploy` publica diretamente na Cloudflare quando há autenticação e permissões; prefira o fluxo por pull request. Não é necessário entrar na Cloudflare no computador da faculdade para publicar pelo fluxo GitHub → Workers Builds.

Ao voltar ao outro computador, confira `git status`, mude para `main` sem alterações pendentes e execute `git pull --ff-only origin main`. Se houver divergências, investigue em vez de usar comandos que descartam trabalho. Envie os commits antes de sair: alterações não enviadas não estarão no outro computador.

## Segurança e máquinas compartilhadas

- Nunca registre senhas, tokens, `.env`, variantes `.env.*`, `.dev.vars` ou variantes `.dev.vars.*` no Git.
- `node_modules`, `.wrangler` e arquivos de ambiente estão ignorados; o `.gitignore` não remove segredos já registrados em commits.
- Um repositório público permite leitura anônima; enviar alterações exige autenticação autorizada no GitHub.
- Use somente ferramentas permitidas pela faculdade. Não deixe contas conectadas nem credenciais persistentes em máquinas compartilhadas; saia do navegador, do OpenCode e de eventuais gerenciadores de credenciais usados.
- O clone não inclui credenciais, configuração pessoal ou histórico de conversas do OpenCode.

## Tipos e worktrees

Se adicionar bindings ao Worker, gere os tipos com `npm.cmd run cf-typegen` e use `Hono<{ Bindings: CloudflareBindings }>` conforme a configuração do projeto.

Worktrees permitem trabalhar em branches simultâneas em pastas separadas no mesmo computador. São opcionais para alternar entre casa e faculdade; para isso, use clone, pull e push. Cada worktree pode precisar de sua própria instalação de dependências.
