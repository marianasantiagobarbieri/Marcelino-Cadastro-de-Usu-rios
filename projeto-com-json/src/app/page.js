"use client"
import './globals.css'
import { useRouter } from 'next/navigation';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <div className='LoginBox2'>
      <div className='LoginContainer2'>

    <h1>Usuários Cadastrados</h1>
    <div className='LoginForm2' >
      {alunos.map(aluno => (
        <div key={aluno.id}>
          <p>{aluno.nome}</p> 
          <p>{aluno.curso}</p> 
          <p>{aluno.num_inscricao}</p> 
          <button className='LoginBotaoCadastrar' onClick={e => e.preventDefault(remover(aluno.id))}>Remover</button>
        </div>
      ))}
      </div>
      <a className='LoginAhref' href="/cadastro">Voltar a Cadastrar Usuários</a> 

      </div>
      
    </div>
    
  )
}




// async função assíncrona.
// await é uma espera, ou seja, até o comando da linha 4 não funcionar o comando da
// linha  5 não funciona.
// fetch pega os dados e nos traz, e entre '()' colocamos o endereço que a api está rodando, 
// que no caso, é a 3003 e o fetch retorna os dados.
// o 'req.json()' pega os dados e formata o mesmo no formato de json.
// o 'key={aluno.id}' é o meu indentificador, ou seja, o meu id.
// o '{ cache: "no-cache" }' serve p/ 
