export default function Logo() {
  return (
    <div className="flex items-center select-none shrink-0 py-0.5">
      <img
        src="https://www.digabyss.com/wp-content/uploads/2014/01/cropped-logo.png"
        alt="Digabyss Logo"
        className="h-7 sm:h-9 md:h-11 max-[400px]:h-6.5 w-auto object-contain transition-all duration-200"
        onError={(e) => {
          // Fallback just in case there is a connection issue with the external link
          (e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
    </div>
  )
}
