'use client'
export default function Page(
    { params }: { params: { idUsuario: string; semestre: string; }}
){
    const materias = ['Web A.','Moviles','Seguridades', 'Inteligencia Artificial']

    const misEstilos = {
        color: '#F5F4F2',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };

    return (
        <>
            <div className="container" style={misEstilos}>
                <p>Ruta MOSTRAR USUARIO: {
                    params.idUsuario
                }</p>
                <p>Ruta MOSTRAR SEMESTRE: {
                    params.semestre
                }</p>
                <ul>
                    { materias.map((materia)=> <li key={materia}>
                        <a href={`/j_ruta/${params.idUsuario}/${params.semestre}/${materia}`}>{materia}</a>
                    </li>)
                    }
                </ul>
            </div>
        </>
    )
}