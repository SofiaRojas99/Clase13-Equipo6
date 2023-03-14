import React, { useEffect, useState } from 'react'


const FuncComponent = () => {
    const [pizza, setPizza] = useState('')

    useEffect(() => {
        setTimeout(() =>{
            setPizza('Muzzarella')
        }, 2000)

        return () => {
            console.log('Se desmonto el componente de funcion')
        }
    },[])

    useEffect(() => {
        console.log('Se actualizó el componente de función') 
     },[pizza])

  return (
    <div>
        <h3>{pizza}</h3>
    </div>
  )
}

export default FuncComponent