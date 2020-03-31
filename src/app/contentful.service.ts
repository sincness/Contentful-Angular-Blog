import { Injectable } from "@angular/core";
import { createClient, Entry } from "contentful";

@Injectable({
  providedIn: "root"
})
export class ContentfulService {
  CONFIG = {
    space: "kn33bkhab8tl",
    accessToken: "t75ExREYp9Y8UFPb94lzZcfgHfY2p3Pq9fNEc6e-kK8"
  };

  private cdaClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken
  });

  constructor() {}

  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(Object.assign({}, query))
      .then(res => res.items);
  }

  getCourse(courseId): Promise<Entry<any>> {
    return this.cdaClient
      .getEntries(Object.assign({}, { "sys.id": courseId }))
      .then(res => res.items[0]);
  }
}
