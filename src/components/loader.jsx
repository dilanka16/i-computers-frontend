export default function Loader(){
    return(
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
  <div className="bg-white/10 p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4">
    <div className="w-14 h-14 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    <p className="text-white text-sm tracking-wide">Loading...</p>
  </div>
</div>

    )
}