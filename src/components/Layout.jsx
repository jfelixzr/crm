
import { Outlet, Link,useLocation } from "react-router-dom"
function Layout() {
    const location = useLocation()
  return (
    <div className="md:flex
     md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-600 px-5 py-10">
<h2 className="text-4xl text-white font-black text-center">CRM - Clientes</h2>
<nav className="mt-10">
<Link className={` ${location.pathname ==='/' ? 'text-blue-300':'text-white'} block  my-4 hover:bg-blue-700 p-2 rounded text-2xl`} to="/">Clientes</Link>
<Link className={` ${location.pathname ==='/clientes/nuevo' ? 'text-blue-300':'text-white'}  block my-4 hover:bg-blue-700 p-2 rounded text-2xl`} to="/clientes/nuevo">Nuevo Cliente</Link>

</nav>
            </aside>
<main className="md:w-3/4 p-10 md-h-screen overflow-scroll">
<Outlet />
        </main>

        
        </div>
  )
}

export default Layout