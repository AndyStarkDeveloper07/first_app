import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      {/* HEADER */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            MiEmpresa
          </h1>

          <nav className="flex gap-6">
            <a href="#" className="hover:text-gray-300">
              Inicio
            </a>

            <a href="#" className="hover:text-gray-300">
              Servicios
            </a>

            <a href="#" className="hover:text-gray-300">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Desarrollo Web Profesional
          </h2>

          <p className="text-xl text-gray-600 mb-8">
            Creamos aplicaciones modernas con Next.js,
            Spring Boot y MySQL.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
            Comenzar
          </button>
        </div>
      </section>

      {/* CARDS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Frontend
            </h3>

            <p className="text-gray-600">
              Interfaces modernas con React y Next.js.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Backend
            </h3>

            <p className="text-gray-600">
              APIs REST profesionales y escalables.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Base de Datos
            </h3>

            <p className="text-gray-600">
              Integración con MySQL y Prisma ORM.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>
            © 2026 MiEmpresa. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
