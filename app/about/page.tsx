import { getCompanyInfo } from '@/lib/cosmic'
import type { CompanyInfo } from '@/types'

export const revalidate = 60

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo() as CompanyInfo | null

  if (!companyInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading about information...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cloud-blue-600 to-cloud-blue-400 bg-clip-text text-transparent">
          About {companyInfo.metadata?.company_name || 'Us'}
        </h1>
        
        {companyInfo.metadata?.about && (
          <div 
            className="content-html text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: companyInfo.metadata.about }}
          />
        )}
      </div>
    </div>
  )
}