# Geferson Lopes 🍃
# Plathanus

> Front-end em **React + TypeScript** para visualização do teste técnico.

[Demo em produção](https://plathanus-lovat.vercel.app/)  

---

## ✨ Visão geral

Aplicação single-page contruida para o teste técnico.

**Principais destaques**

- **React 19** + **Vite** (hot-reload ⚡)
- **Zustand** para estado global
- **React Hook Form** + **Zod** para formulários/validação
- **React Leaflet** para mapas
- **Tailwind CSS** para estilos utilitários
- **TanStack Query** para cache e requisições
- **Framer Motion** em animações

---

## 🚀 Começando

### Requisitos

- **Node.js ≥ 18**
- **npm ≥ 8**

### Instalação e execução

```bash
# clone o repositório
git clone https://github.com/GefersonLopes/Plathanus.git
cd Plathanus/client

# instale as dependências
npm install

# rode em modo dev (http://localhost:5173)
npm run dev

---

## 🗂️ Estrutura de Pastas

```

client/
├── public/  
└── src/
├── components/  
 ├── hooks/  
 ├── pages/  
 ├── store/  
 ├── styles/  
 └── utils/

```

```

## 📜 Scripts úteis

### Comando  

#### Inicia servidor de desenvolvimento
`npm run dev`  

#### Gera build de produção
`npm run build`  

#### Executa ESLint + Prettier
`npm run lint`


## 🖥️ Deploy

O build de produção é gerado com npm run build e publicado manualmente no Vercel

[Site da aplicação em Produção](https://plathanus-lovat.vercel.app/).