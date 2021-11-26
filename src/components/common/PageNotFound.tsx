import styled from 'styled-components'

export const PageNotFound = () => {
  return(
    <>
      <Head>Page Not Found</Head>
      <h3>Error code: 404</h3>
    </>
  )
}

const Head = styled.h1`
  margin-top: 10%;
  font-size: xx-large;
  color: #771f1f;
`