export default function MensajeChat(){
    const {nombre, mensaje, posicion} = props;
    return(<>
        {
            posicion === Posicion.D?
                <p className='text-right'>
                    {mensaje}<strong>:{nombre}</strong>
                </p> :
                <p className='text-left'>
                    <strong>{nombre}:</strong>{mensaje}
                </p>
        }
    </>)
}