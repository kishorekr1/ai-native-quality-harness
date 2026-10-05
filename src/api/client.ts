import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request<T>(path: string, options: AxiosRequestConfig = {}): Promise<T> {
    const url = `${this.baseURL}${path}`;

    const response: AxiosResponse<T> = await axios({
      url,
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      }
    });

    return response.data;
  }

  async get<T>(path: string, params?: Record<string, unknown>): Promise<T> {
    return this.request<T>(path, {
      method: "GET",
      params
    });
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: "POST",
      data: body
    });
  }

  async put<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>(path, {
      method: "PUT",
      data: body
    });
  }

  async delete<T>(path: string): Promise<T> {
    return this.request<T>(path, {
      method: "DELETE"
    });
  }
}