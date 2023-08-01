import { useNavigate,Form ,useActionData} from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"
export async function   action({request}) {
const formData=await request.formData()
const datos=Object.fromEntries(formData)

//validar
const email= formData.get('email')  
const errores=[]
if(Object.values(datos).includes('')){
   errores.push('Todos los campos son obligatorios')
}   
let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

if(!regex.test(email)){
    errores.push('Email no valido')
}
//retornar datos si hay errores
if(Object.keys(errores).length){
    return errores
}

}
const NuevoCliente = () => {
    const errores=useActionData()
    const navigate=useNavigate()
  return (
    <><h1 className="font-black text-4xl - text-blue-900">Nuevo Cliente
    </h1>
    <p className="text-gray-700 text-xl">Llena todo los campos para registrar un nuevo cliente</p>

    <div className="flex justify-end mt-5">
<button type="button" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-md" onClick={()=>navigate(-1)}>Volver
    </button>

            </div>        
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

                {errores?.length && errores.map((error,index)=><Error key={index}>{error}</Error>)}
                <Form
                noValidate
                method="POST"
                >
                <Formulario    />
                <input type="submit" className="bg-blue-800 hover:bg-blue-900 w-full mt-5 p-2 text-white uppercase font-bold" value="Registrar Cliente" />
                </Form>
</div>
        </>
  )
}

export default NuevoCliente