// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Company Info (Singleton)
export interface CompanyInfo extends CosmicObject {
  type: 'company-info'
  metadata: {
    company_name?: string
    tagline?: string
    hero_image?: {
      url: string
      imgix_url: string
    }
    about?: string
  }
}

// Cloud Section
export interface CloudSection extends CosmicObject {
  type: 'cloud-sections'
  metadata: {
    section_title?: string
    content?: string
    cloud_image?: {
      url: string
      imgix_url: string
    }
    display_order?: number
  }
}

// API response types
export interface CosmicResponse<T> {
  objects?: T[]
  object?: T
  total?: number
}