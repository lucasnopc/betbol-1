import Head from "next/head";
import Layout from "../../components/layouts/home/layout";
import serverSidePropsClientNotRedirect from "../../utills/serverSitePRopsClientNotRedirect";
import { useForm } from "react-hook-form";
import { ImSpinner } from "react-icons/im";
import { useStore } from "../../context/store";

export default function RegulationPage(props) {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const { user } = useStore()
  
  const sendEmailContact = (data) => {
      console.log(data)
  };
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME} - Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="font-semibold text-xl p-2">Fale Conosco</h1>
        <div className="p-2">
          <span> ganhei@sportsgame.online</span>
          <span> suport@sportsgame.online</span>
        </div>
        <form onSubmit={handleSubmit(sendEmailContact)} className="">
          <div className="">
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="Nome"
              className="inline-block p-1.5 focus:outline-none bg-gray-200 h-10           m-2"
              required
            />
          </div>
          <div className="">
            <input
              {...register("email", { required: true })}
              type="text"
              name="email"
              placeholder="E-mail"
              className="inline-block p-1.5 focus:outline-none bg-gray-200 h-10       m-2"
              required
            />
          </div>
          <div className="">
            <input
              {...register("subject", { required: true })}
              type="text"
              name="subject"
              placeholder="Assunto"
              className="inline-block p-1.5 focus:outline-none bg-gray-200 h-10  m-2"
              required
            />
          </div>
          <div className="">
            <textarea
              {...register("message", { required: true })}
              name="message"
              placeholder="Mensagem"
              className="inline-block p-1.5 focus:outline-none bg-gray-200 h-32          m-2"
              required
            />
          </div>
          <div className="">
            {" "}
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-primary hover:bg-primary-ligth p-2 font-medium inline-block text-white"
            >
              <ImSpinner
                className={`${
                  isSubmitting ? `inline-block` : `hidden`
                } animate-spin`}
              />{" "}
              Enviar Mensagem
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClientNotRedirect(context);
  return ret
}
