# Odonto Murilo — Landing Page

Landing page institucional para a clínica odontológica **Odonto Murilo**, apresentando serviços, diferenciais e formas de contato. Projeto responsivo, moderno e focado em conversão (agendamento via WhatsApp).

---

## 🌐 Demo

**Site em produção:** [https://jaumm0.github.io/mrl-odonto/](https://jaumm0.github.io/mrl-odonto/)

---

## ✨ Funcionalidades

- **Hero (Início)** — Título, subtítulo, CTA “Agende sua consulta” (WhatsApp) e botão “Conhecer Serviços”; destaques (pacientes atendidos, avaliação Google, anos de experiência); imagem de destaque.
- **Serviços** — Grid de 6 serviços: Clínica Geral, Ortodontia, Implantes Dentários, Clareamento Dental, Estética do Sorriso, Odontopediatria; ícones (Lucide) e descrições.
- **Como trabalhamos** — Explicação do fluxo de atendimento e diferenciais.
- **Depoimentos** — Seção preparada para depoimentos de pacientes.
- **Sobre** — Apresentação da clínica e do profissional.
- **Prefooter** — Chamada para ação antes do rodapé.
- **Footer** — Links e informações de contato.
- **Header fixo** — Navegação (Início, Serviços, Sobre) + botão “Agendar Consulta”; menu hambúrguer em mobile.
- **Botão flutuante WhatsApp** — Fixo no canto inferior direito, link direto para WhatsApp.

---

## 🛠 Stack

| Tecnologia        | Uso                          |
|-------------------|------------------------------|
| **React 19**      | UI e componentes             |
| **Vite 7**        | Build e dev server           |
| **Tailwind CSS 4**| Estilos e tema (variáveis)   |
| **Lucide React**  | Ícones                       |
| **GSAP**          | Animações (disponível no projeto) |
| **gh-pages**      | Deploy no GitHub Pages       |

---

## 📁 Estrutura do projeto

```
Murilo Dentista/
├── public/                 # Assets estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Assets/         # Imagens (ex.: hero-dental.jpg)
│   │   ├── About.jsx       # Seção Sobre
│   │   ├── Dep.jsx         # Depoimentos
│   │   ├── Footer.jsx      # Rodapé
│   │   ├── Header.jsx     # Cabeçalho e menu
│   │   ├── Inicio.jsx     # Hero / Início
│   │   ├── Prefooter.jsx  # Bloco antes do footer
│   │   ├── Services.jsx   # Serviços
│   │   ├── TextType.jsx   # Utilitário de texto
│   │   ├── WhatsAppButton.jsx  # Botão flutuante WhatsApp
│   │   └── Workon.jsx     # Como trabalhamos
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css          # Tailwind + tema (variáveis CSS)
├── index.html
├── vite.config.js         # base: '/mrl-odonto/' para GitHub Pages
├── package.json
└── README.md
```

---

## 📋 Pré-requisitos

- **Node.js** 18+ (recomendado 20+)
- **npm** (ou yarn/pnpm)

---

## 🚀 Instalação e execução

### 1. Clonar o repositório

```bash
git clone https://github.com/jaumm0/mrl-odonto.git
cd mrl-odonto
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Abre em [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal).

### 4. Build para produção

```bash
npm run build
```

Gera a pasta `dist/` com os arquivos otimizados.

### 5. Preview do build local

```bash
npm run preview
```

Simula o site de produção localmente.

---

## 📜 Scripts disponíveis

| Comando           | Descrição                                      |
|-------------------|------------------------------------------------|
| `npm run dev`     | Sobe o servidor de desenvolvimento (Vite)     |
| `npm run build`   | Gera o build de produção em `dist/`           |
| `npm run preview` | Servidor local para testar o conteúdo de `dist`|
| `npm run lint`    | Executa o ESLint no projeto                    |
| `npm run deploy`  | Roda `predeploy` (build) e publica no GitHub Pages |

---

## 🌍 Deploy (GitHub Pages)

O projeto está configurado para **GitHub Pages** na raiz do repositório:

- **Repositório:** [jaumm0/mrl-odonto](https://github.com/jaumm0/mrl-odonto)
- **URL base no Vite:** `base: '/mrl-odonto/'` em `vite.config.js`
- **Homepage no `package.json`:** `https://jaumm0.github.io/mrl-odonto/`

### Publicar alterações

```bash
npm run build
npm run deploy
```

O script `deploy` usa `gh-pages` e envia o conteúdo da pasta `dist/` para a branch `gh-pages`, que o GitHub Pages usa para servir o site.

---

## 🎨 Personalização

### Cores e tema

As cores e parte do estilo vêm de variáveis CSS em `src/index.css` (bloco `@theme`), por exemplo:

- Cabeçalho: `--color-Headertext`
- Hero: `--color-bginicio`, `--color-ptext`, `--color-h1`, `--color-bgwhats`, etc.
- Serviços: `--color-bgServices`, `--color-bgIcons`, `--color-spantext`
- Botão WhatsApp: `--color-bgwhats`

Alterar essas variáveis em `index.css` atualiza o visual em todo o site.

### Número do WhatsApp

O número está em formato internacional (ex.: `5511999999999`). Troque nos arquivos:

- `src/components/Inicio.jsx` — link do botão “Agende sua consulta”
- `src/components/WhatsAppButton.jsx` — link do botão flutuante
- (Se existir) `src/components/Header.jsx` — link do botão “Agendar Consulta”

Substitua `5511999999999` pelo número real (DDI + DDD + número, sem espaços ou símbolos).

---

## 📄 Licença

Projeto de uso privado. Contato e créditos conforme definido pelo dono do repositório.

---

## 👤 Repositório

**GitHub:** [jaumm0/mrl-odonto](https://github.com/jaumm0/mrl-odonto)
