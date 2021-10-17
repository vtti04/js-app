import { PostsComponent } from "../components/posts.component";

class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }
  async createPost(post) {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: "post",
        body: JSON.stringify(post),
      });
      return useRequest(request);
      // const response = await fetch(request)
      // return await response.json()
    } catch (error) {
      console.error(error);
    }
  }
  async fetchPosts() {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: "get", // метод get идет по умолчанию, поэтому можно не указывать
      });

      return useRequest(request);
      // const response = await fetch(request)
      // return await response.json()
    } catch (error) {
      console.error(error);
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

export const apiService = new ApiService(
  "https://elen-s-blog-9532e-default-rtdb.asia-southeast1.firebasedatabase.app"
);
