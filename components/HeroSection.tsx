import type { CompanyInfo } from '@/types'

interface HeroSectionProps {
  companyInfo: CompanyInfo
}

export default function HeroSection({ companyInfo }: HeroSectionProps) {
  const heroImageUrl = companyInfo.metadata?.hero_image?.imgix_url

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImageUrl && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${heroImageUrl}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt={companyInfo.metadata?.company_name || 'Hero'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cloud-blue-900/50 to-cloud-blue-600/30" />
        </div>
      )}
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          {companyInfo.metadata?.company_name || 'CloudVision Technologies'}
        </h1>
        
        {companyInfo.metadata?.tagline && (
          <p className="text-2xl md:text-3xl text-white/90 mb-8 drop-shadow-md">
            {companyInfo.metadata.tagline}
          </p>
        )}
        
        <div className="flex gap-4 justify-center">
          <a
            href="#sections"
            className="px-8 py-4 bg-white text-cloud-blue-600 rounded-full font-semibold hover:bg-cloud-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}