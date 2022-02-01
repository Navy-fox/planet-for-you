import axios, { AxiosResponse } from 'axios'
import { IUser } from '@/types/IUser'

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in',
})

export const loadUsers = async (): Promise<IUser[]> => {
  try {
    const response: AxiosResponse = await axiosInstance.get('/api/users', {
      params: { page: 2 },
    })
    return response.data.data || []
  } catch (e: any) {
    return []
  }
}
