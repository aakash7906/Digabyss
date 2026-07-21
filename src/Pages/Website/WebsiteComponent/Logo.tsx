export default function Logo() {
  return (
    <div className="flex items-center select-none shrink-0 py-0.5">
      <img
        src="https://www.digabyss.com/wp-content/uploads/2014/01/cropped-logo.png"
        alt="Digabyss Logo"
        className="h-10 md:h-11 w-auto object-contain"
        onError={(e) => {
          // Fallback just in case there is a connection issue with the external link
          (e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
    </div>
  )
}
