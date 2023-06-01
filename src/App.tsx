import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SideMenu from './components/SideMenu'
import React, {  lazy } from 'react'

const SideMenuLayout = lazy(() => import('./layouts/SideMenuLayout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenuLayout />
        <h1>Home</h1>
      </div>
    ),
  },
  {
    path: 'task-list',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> 
        <h1>Task List</h1>
      </div>
    ),
  },
  {
    path: 'task-progress',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> 
        <h1>Task Progress</h1>
      </div>
    ),
  },
],
{basename: '/kanban-app/'}
)


function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App