import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Our Products menu data structure
export interface MenuItem {
  name: string
  path: string
  children?: MenuItem[]
}

export const ourProductsMenu: MenuItem[] = [
  {
    name: 'Audio',
    path: '/product-category/audio',
    children: [
      { name: 'Music', path: '/product-category/audio/music' },
      { name: 'Sound Tracts', path: '/product-category/audio/sound-tracts' },
      { name: 'Raw Rhythms', path: '/product-category/audio/raw-rhythms' },
      { name: 'Raw Melodies', path: '/product-category/audio/raw-melodies' },
      { name: 'Audio Books', path: '/product-category/audio/audio-books' },
    ]
  },
  {
    name: 'Digital Art',
    path: '/product-category/digital-art',
    children: [
      { name: 'Paintings', path: '/product-category/digital-art/paintings' },
      { name: 'Posters', path: '/product-category/digital-art/posters' },
      { name: 'Line Drawings', path: '/product-category/digital-art/line-drawings' },
      { name: 'Photography', path: '/product-category/digital-art/photography' },
    ]
  },
  {
    name: 'Games',
    path: '/product-category/games',
    children: [
      { name: 'Action', path: '/product-category/games/action' },
      { name: 'Adventure', path: '/product-category/games/adventure' },
      { name: 'Religious', path: '/product-category/games/religious' },
      { name: 'Educational', path: '/product-category/games/educational' },
      { name: 'Musical', path: '/product-category/games/musical' },
    ]
  },
  {
    name: 'Literature',
    path: '/product-category/literature',
    children: [
      { name: 'Novel', path: '/product-category/literature/novel' },
      { name: 'Drama', path: '/product-category/literature/drama' },
      { name: 'Academic Test & Exams', path: '/product-category/literature/academic-test-exams' },
      { name: 'Myths', path: '/product-category/literature/myths' },
      { name: 'Romance', path: '/product-category/literature/romance' },
      { name: 'Play', path: '/product-category/literature/play' },
      { name: 'Comedy', path: '/product-category/literature/comedy' },
      { name: 'Legal Trial Transcripts', path: '/product-category/literature/legal-trial-transcripts' },
      { name: 'Fable', path: '/product-category/literature/fable' },
      { name: 'Fairy Tale', path: '/product-category/literature/fairy-tale' },
      { name: 'Fantasy', path: '/product-category/literature/fantasy' },
      { name: 'Mystery', path: '/product-category/literature/mystery' },
      { name: 'Mythology', path: '/product-category/literature/mythology' },
      { name: 'Poetry & Lyrics', path: '/product-category/literature/poetry' },
      { name: 'Biography / Autobiography', path: '/product-category/literature/biography-autobiography' },
      { name: 'Essay', path: '/product-category/literature/essay' },
      { name: 'Speech', path: '/product-category/literature/speech' },
      { name: 'Musical Lyrics', path: '/product-category/literature/musical-lyrics' },
      { name: 'Text Books', path: '/product-category/literature/text-books' },
      { name: 'Short Story', path: '/product-category/literature/short-story' },
    ]
  },
  {
    name: 'Movies',
    path: '/product-category/movies',
    children: [
      { name: 'Action', path: '/product-category/movies/action-movies' },
      { name: 'Comedy', path: '/product-category/movies/comedy-movies' },
      { name: 'Documentary', path: '/product-category/movies/documentary' },
      { name: 'Dramas', path: '/product-category/movies/dramas' },
      { name: 'Educational', path: '/product-category/movies/educational-movies' },
      { name: 'History', path: '/product-category/movies/history' },
    ]
  },
  {
    name: 'Diglevision',
    path: '/product-category/television',
    children: [
      { name: 'Action', path: '/product-category/television/action-television' },
      { name: 'Dramas', path: '/product-category/television/dramas-television' },
      { name: 'Comedy', path: '/product-category/television/comedy-television' },
      { name: 'History', path: '/product-category/television/history-television' },
      { name: 'Educational', path: '/product-category/television/educational-television' },
      { name: 'Science Fiction', path: '/product-category/television/science-fiction' },
      { name: 'Documentary', path: '/product-category/television/documentary-television' },
      { name: 'Romance', path: '/product-category/television/romance' },
    ]
  },
  {
    name: 'Software',
    path: '/product-category/software',
    children: [
      { name: 'iPhone Applications', path: '/product-category/software/iphone-applications' },
      { name: 'Android Applications', path: '/product-category/software/android-applications' },
      { name: 'Business Applications', path: '/product-category/software/business-applications' },
      { name: 'Personal Applications', path: '/product-category/software/personal-applications' },
      { name: 'Windows Applications', path: '/product-category/software/windows-applications' },
    ]
  },
]

/**
 * Desktop "Our Products" dropdown using shadcn DropdownMenu components.
 */
export function OurProductsDesktop() {
  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-xs xl:text-m font-semibold tracking-wide whitespace-nowrap transition-colors hover:text-success text-primary-foreground/90 data-[state=open]:text-success cursor-pointer outline-none focus:outline-none">
        Our Products
        <ChevronDown className="w-4 h-4 transition-transform duration-200" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="bg-[#1a1a1a] border border-[#2a2a2a] text-white min-w-[200px] p-1.5 shadow-2xl rounded-xl z-50">
        <DropdownMenuGroup>
          {ourProductsMenu.map((category) => {
            const hasChildren = Boolean(category.children && category.children.length > 0)

            if (!hasChildren) {
              return (
                <DropdownMenuItem
                  key={category.name}
                  onClick={() => navigate(category.path)}
                  className="cursor-pointer px-3.5 py-2.5 text-sm font-semibold text-gray-200 hover:text-success focus:bg-success/10 focus:text-success rounded-lg"
                >
                  {category.name}
                </DropdownMenuItem>
              )
            }

            return (
              <DropdownMenuSub key={category.name}>
                <DropdownMenuSubTrigger className="cursor-pointer px-3.5 py-2.5 text-sm font-semibold text-gray-200 hover:text-success focus:bg-success/10 focus:text-success data-[state=open]:bg-success/10 data-[state=open]:text-success rounded-lg">
                  <span onClick={(e) => { e.stopPropagation(); navigate(category.path); }}>
                    {category.name}
                  </span>
                </DropdownMenuSubTrigger>

                <DropdownMenuSubContent className="bg-[#1a1a1a] border border-[#2a2a2a] text-white min-w-[210px] max-h-[380px] overflow-y-auto p-1.5 shadow-2xl rounded-xl z-50 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#333] [&::-webkit-scrollbar-thumb]:rounded-full">
                  {category.children?.map((child) => (
                    <DropdownMenuItem
                      key={child.path}
                      onClick={() => navigate(child.path)}
                      className="cursor-pointer px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-success focus:bg-success/10 focus:text-success rounded-lg"
                    >
                      {child.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface OurProductsMobileProps {
  onNavigate?: () => void
}

/**
 * Mobile "Our Products" accordion with nested category expansion.
 */
export function OurProductsMobile({ onNavigate }: OurProductsMobileProps) {
  const [mobileProductsOpen, setMobileProductsOpen] = useState<boolean>(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <div>
      <button
        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
        className="w-full flex items-center justify-between text-sm font-medium py-3 px-4 rounded-lg text-muted-foreground hover:bg-white/10 hover:text-primary-foreground transition-colors cursor-pointer"
      >
        <span>Our Products</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
      </button>

      {mobileProductsOpen && (
        <div className="ml-4 mt-1 space-y-1 border-l border-[#2a2a2a] pl-3">
          {ourProductsMenu.map((category) => {
            const hasChildren = Boolean(category.children && category.children.length > 0)
            return (
              <div key={category.name}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                  className="w-full flex items-center justify-between text-sm font-medium py-2.5 px-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  <span>{category.name}</span>
                  {hasChildren && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedCategory === category.name ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {expandedCategory === category.name && hasChildren && (
                  <div className="ml-3 mt-0.5 space-y-0.5 border-l border-[#333] pl-3">
                    {category.children?.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={onNavigate}
                        className="block text-xs font-medium py-2 px-3 rounded-lg text-gray-400 hover:bg-white/10 hover:text-success transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
