import errorImg from '../assets/img/notFound.avif'

const ErrorFetch = ({ error }) => {
  return (
    <article className='text-center'>
      <h3>¡No pudimos atraparlos! :o Intenta más tarde: {error}</h3>
      <img src={errorImg} width='200' />
    </article>
  )
}
export default ErrorFetch
