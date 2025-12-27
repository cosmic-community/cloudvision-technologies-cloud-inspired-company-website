import { getCompanyInfo, getCloudSections } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import CloudSection from '@/components/CloudSection'
import type { CompanyInfo, CloudSection as CloudSectionType } from '@/types'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const companyInfo = await getCompanyInfo() as CompanyInfo | null
  const sections = await getCloudSections() as CloudSectionType[]

  if (!companyInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading company information...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <HeroSection companyInfo={companyInfo} />
      
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {sections.map((section, index) => (
          <CloudSection 
            key={section.id} 
            section={section} 
            reverse={index % 2 !== 0}
          />
        ))}
      </section>
    </div>
  )
}