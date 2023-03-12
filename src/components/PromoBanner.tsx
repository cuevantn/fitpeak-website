const PromoBanner = ({ children }) => (
  <div className="bg-pink-600 hover:bg-zinc-900">
    <div className="container flex h-10 items-center justify-end text-white">
      <h1 className="text-sm font-bold">{children}</h1>
    </div>
  </div>
)

export default PromoBanner
