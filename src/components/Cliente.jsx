

const Cliente = ({cliente}) => {
    const {nombre,empresa,email,telefono}=cliente
  return (
    <tr >
          <td className="border px-4 py-2">{nombre}</td>
          <td className="border px-4 py-2">{telefono}</td>
          <td className="border px-4 py-2">{empresa}</td>
          <td className="border px-4 py-2">{email}</td>
          <td className="border px-4 py-2">
          <button type="button" className="flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold">
          Eliminar
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          </button>
          </td>
          <td className="border px-4 py-2">
          <button type="button" className="flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold">
          Editar
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>

          </svg>
          </button>
          </td>
          </tr>
  )
}

export default Cliente