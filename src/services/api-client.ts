import fetch from 'isomorphic-unfetch'
import { GetAudioRequest, GetAudioRequests, ID, PostAudioRequest, PostAudioRequestBody } from '~/@types/api'

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

class AppApiClient {
  constructor(private baseUri: string = process.env.NEXT_STATIC_API_URL) {}

  public heartbeat = async () => (await this.get('/heartbeat')).json

  public findAudioRequest = async (url: string): Promise<GetAudioRequest | null> =>
    (await this.get(`/audio/requests?youtube_url=${encodeURIComponent(url)}`)).json()
  public audioRequests = async (): Promise<GetAudioRequests> => (await this.get('/audio/requests')).json()
  public audioRequest = async (id: ID): Promise<GetAudioRequest> => {
    const response = await this.get(`/audio/request/${id}`)
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(response.json())
  }
  public postAudioRequest = async (body: PostAudioRequestBody): Promise<PostAudioRequest> => {
    const response = await this.post(`/audio/requests`, body)
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(response.json())
  }

  private get = async (endpoint: string) => {
    return await fetch(`${this.baseUri}${endpoint}`, {
      method: 'GET',
      headers: {
        ...DEFAULT_HEADERS,
      },
    })
  }

  private post = async (endpoint: string, body: object) => {
    return await fetch(`${this.baseUri}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        ...DEFAULT_HEADERS,
      },
    })
  }
}

const ApiClient = new AppApiClient()
export default ApiClient
