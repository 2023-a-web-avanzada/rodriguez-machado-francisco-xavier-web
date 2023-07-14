'use client'
export default function Page(
    { params }: { params: { idUsuario: string }}
){

    const semestres = ['2020A','2020B','2021A','2021B','2022A','2022B']

    const misEstilos = {
        color: '#fff',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };

    return (
        <>
            <div className="container"
                 style={misEstilos}
            >
                <p>Ruta MOSTRAR USUARIO: {
                    params.idUsuario
                }</p>
                <ul>
                    { semestres.map((semestre)=> <li key={semestre}>
                        <a href={`/j_ruta/${params.idUsuario}/${semestre}`}>{semestre}</a>
                    </li>)
                    }
                </ul>
            </div>
        </>
    )
}
