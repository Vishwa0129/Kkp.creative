export type ContactPayload = {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  budget?: string
  message: string
}

const RAW_API_BASE_URL = (import.meta as any).env?.VITE_API_URL || ''
const API_BASE_URL = RAW_API_BASE_URL.replace(/\/+$/, '')

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') || ''
  const isJson = contentType.includes('application/json')
  const data = isJson ? await response.json() : await response.text()
  if (!response.ok) {
    const message = (isJson && (data as any)?.message) || response.statusText || 'Request failed'
    throw new Error(message)
  }
  return data as T
}

export async function postContact(payload: ContactPayload): Promise<{ message: string }> {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  return handleResponse<{ message: string }>(res)
}


