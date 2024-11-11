import TrolleyLoader from '@/components/TrolleyLoader'


const LoadPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center z-50">
      <TrolleyLoader size={50} color="#3498db" />
    </div>
  )
}

export default LoadPage
