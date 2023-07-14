'use client'
export default function Page(
    { params }: { params: { idUsuario: string; semestre: string; materia: string; }}
){
    const misEstilos = {
        color: '#F7F7F8',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };

    return (
        <>
            <div className="container" style={misEstilos}>
                <p>USUARIO: {params.idUsuario} / SEMESTRE: {params.semestre} / MATERIA: {params.materia}</p>
            </div>
        </>
    )
}