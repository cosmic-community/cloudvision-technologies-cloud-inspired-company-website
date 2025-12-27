import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Fetch company info
export async function getCompanyInfo() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'company-info',
        slug: 'cloudvision-technologies'
      })
      .props(['id', 'title', 'metadata'])
      .depth(0)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch company info')
  }
}

// Fetch cloud sections sorted by display_order
export async function getCloudSections() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'cloud-sections'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    // Sort by display_order
    const sections = (response.objects || []).sort((a, b) => {
      const orderA = a.metadata?.display_order || 999
      const orderB = b.metadata?.display_order || 999
      return orderA - orderB
    })
    
    return sections
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch cloud sections')
  }
}