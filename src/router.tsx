import { createBrowserRouter } from 'react-router-dom'

// Basicamente estamos criando um roteador de rotas baseado na URL do navegador
// Dentro desta função estamos criando todas as rotas da aplicação
export const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <h1>Formulario de Simulação</h1>,
      },
      {
        path: '/resultado',
        element: <h1>Resultado de Simulação</h1>,
      },
      {
        path: '/historico',
        element: <h1>Histórico de Simulações</h1>,
      },
    ],
  },
])
