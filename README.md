# Desperte suas memórias

Landing page interativa do projeto acadêmico **Memórias Sentidas**, inspirada no Natura Ekos Cacau Frescor.

O visitante responde 4 perguntas. Cada opção está ligada, sem mostrar o nome, a uma fragrância da linha Ekos Frescor (Andiroba, Pitanga, Cacau, Maracujá, Castanha e Açaí). No final aparece um resultado personalizado com opção de compartilhar, e a página apresenta o Ekos Cacau Frescor. Em caso de empate, o resultado Cacau tem prioridade.

## Arquivos

- `index.html`: a página completa (HTML, CSS e JavaScript)
- `img/cacau-ambiente.jpg`: foto do perfume entre os frutos de cacau
- `img/cacau-frasco.jpg`: foto do frasco em fundo branco

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo, `memorias-sentidas`).
2. Envie o `index.html`, o `README.md` e a pasta `img` para a raiz do repositório.
3. Em **Settings → Pages**, em *Source*, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)` e salve.
4. Depois de cerca de um minuto, a página fica disponível em `https://SEU-USUARIO.github.io/memorias-sentidas/`.

## Editar perguntas e resultados

No final do `index.html`, dentro do `<script>`:

- `PERGUNTAS`: título, texto de apoio e opções de cada pergunta. O campo `f` indica a fragrância que a opção soma.
- `RESULTADOS`: título, texto e tags de cada resultado.

---

Projeto acadêmico. Natura e Ekos são marcas da Natura &Co, citadas apenas para fins educacionais.
