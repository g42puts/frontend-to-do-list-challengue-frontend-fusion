const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center text-white h-20">
      <span>Site desenvolvidor por
        <a
          href="https://www.linkedin.com/in/gilmar-jose/"
          rel="me"
          target="_blank"
          className="hover:underline hover:text-yellow-300 duration-100 ml-1 transition-all"
        ><b className="tracking-wider">Gilmar José</b></a>
      </span></div>
  )
}

export { Footer };