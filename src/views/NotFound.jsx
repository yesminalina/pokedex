import notFoundImg from '../assets/img/notFound.avif'

const NotFound = () => {
  return (
    <article className='container w-50 d-flex justify-content-center align-items-center mt-5'>
      <h2>No hemos encontrado la página</h2>
      <img src={notFoundImg} width='300' />
    </article>
  )
}
export default NotFound
