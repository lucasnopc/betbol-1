import axios from "axios"
import { useState } from "react"
import InputMask from "react-input-mask"

export default function FormRegister ({popularForm }) {
  const [popularForm, setPopularForm] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const onSubmit = async data => {
    const sendData = await axios.post('/api/register', { data })
    if (sendData.status == 203) {
      alert('Dados Atualizados com Sucesso')
      router.push('/')
    }
  }

  if (popularForm) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="text-sm font-semibold text-gray-700 tracking-wide">Insira seu E-mail</div>
                email: {props.session.user.email}
        </div>
        <div>
          <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Nome</div>
          <input
            {...register('name', { required: true })}
            name="name"
            type="text"
            placeholder="Mike"
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
            defaultValue={getStateRegister.name}
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-700 tracking-wide">Sobrenome</div>
          <input
            {...register('lastname', { required: true })}
            name="lastname"
            type="text"
            placeholder="Adams Silva"
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
            defaultValue={getStateRegister.lastname}
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-700 tracking-wide">Telefone</div>
          <InputMask
            mask="\+\5\5 (99) 99999-9999"
            {...register('tel', { required: true })}
            placeholder="+55 (99) 99999-9999"
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
            defaultValue={getStateRegister.tel}
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-700 tracking-wide">CPF</div>
          <InputMask
            mask="999.999.999-99"
            {...register('cpf', { required: true })}
            placeholder="123.456.789-10"
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
            defaultValue={getStateRegister.cpf}
          />
        </div>
        <div>
          <h2 className="mt-5 font-semibold uppercase text-gray-400">Endereço</h2>
          <div className="text-sm font-semibold text-gray-700 tracking-wide">CEP</div>
          <InputMask
            mask="99999-999"
            {...register('cep', { required: true })}
            placeholder="12345-678"
            onChange={getAndress}
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
            defaultValue={getStateRegister.cep}
          />
        </div>
        <div>
      <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Logradouro</div>
      <input
        {...register('logradouro', { required: true })}
        name="logradouro"
        type="text"
        placeholder="Mike"
        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
        defaultValue={getStateRegister.andress.logradouro}
      />
    </div>

    <div>
      <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Bairro</div>
      <input
        {...register('bairro', { required: true })}
        name="bairro"
        type="text"
        placeholder="Mike"
        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
        defaultValue={getStateRegister.andress.bairro}
      />
    </div>

    <div>
      <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Localidade</div>
      <input
        {...register('localidade', { required: true })}
        name="localidade"
        type="text"
        placeholder="Mike"
        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
        defaultValue={getStateRegister.andress.localidade}
      />
    </div>

    <div>
      <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Estado</div>
      <input
        {...register('uf', { required: true })}
        name="uf"
        type="text"
        placeholder="Mike"
        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
        defaultValue={getStateRegister.andress.uf}
      />
    </div>
        <div>
          <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Numero</div>
          <input
            {...register('numhouse', { required: true })}
            name="numhouse"
            type="number"
            placeholder="30"
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
            defaultValue={getStateRegister.numhouse}
          />
        </div>
        <div>
        </div>
        <div className="mt-10">
          <button className="btn p-4 w-full">
            Atualizar Dados
          </button>
        </div>
      </form>
    )
  }
  return ""
}