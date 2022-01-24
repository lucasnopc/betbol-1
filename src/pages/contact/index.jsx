import Head from "next/head";
import Layout from "../../components/layouts/home/layout";
import serverSidePropsClient from "../../utills/serverSitePropsClient";
import { useForm } from "react-hook-form";
import { ImSpinner } from "react-icons/im";

export default function RegulationPage(props) {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const sendEmailContact = (data) => {
      console.log(data)
  };
  return (
    <>
      <Head>
        <title>Betbol - Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout userString={props.userString}>
        <h1 className="font-semibold text-xl p-2">Fale Conosco</h1>
        <div className="p-2">
          <span> ganhei@betbol.io</span>
          <span> suport@betbol.io</span>
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
  const ret = serverSidePropsClient(context);
  return ret;
}
