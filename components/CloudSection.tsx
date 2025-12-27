import type { CloudSection as CloudSectionType } from '@/types'

interface CloudSectionProps {
  section: CloudSectionType
  reverse?: boolean
}

export default function CloudSection({ section, reverse = false }: CloudSectionProps) {
  const imageUrl = section.metadata?.cloud_image?.imgix_url

  return (
    <div 
      id="sections"
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
    >
      {imageUrl && (
        <div className="w-full md:w-1/2">
          <img
            src={`${imageUrl}?w=1200&h=800&fit=crop&auto=format,compress`}
            alt={section.metadata?.section_title || section.title}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            width={600}
            height={400}
          />
        </div>
      )}
      
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cloud-blue-600 to-cloud-blue-400 bg-clip-text text-transparent">
          {section.metadata?.section_title || section.title}
        </h2>
        
        {section.metadata?.content && (
          <div 
            className="content-html text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: section.metadata.content }}
          />
        )}
      </div>
    </div>
  )
}