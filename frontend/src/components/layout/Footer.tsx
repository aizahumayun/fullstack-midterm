
const Footer = () => {
  return (
    <div className='flex h-20 w-full justify-center items-center bg-gray-300 text-black'>
      <footer>
        <p className='font-semibold'>@ {new Date().getFullYear()} Quote App </p>
        <p>Build with React and TypeScript</p>
      </footer>
    </div>
  )
}

export default Footer
