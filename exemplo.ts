interface DadosDeEnvioEmail{
    para: string, 
    id: number, 
    assunto: string, 
    texto: string
}

function enviarEmail(dados: DadosDeEnvioEmail){
    const { para, id, assunto, texto } = dados

    console.log(para, id, assunto, texto)
}

class EnviarEmailParaUsuario{
    send(){
        enviarEmail({
            para: "paulo@gmail.com",
            id: 123456,
            assunto: "NLW",
            texto: "04"
        })
    }
}