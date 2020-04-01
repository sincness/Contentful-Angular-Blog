import { Injectable } from "@angular/core";
import { createClient, Entry } from "contentful";
import { environment } from "../environments/environment";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken
  });

  constructor() {}

  async getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(Object.assign({}, query))
      .then(res => res.items);
  }

  getSinglePost(contentId: any): Observable<any> {
    const promise = this.cdaClient.getEntry(contentId);
    return from(promise).pipe(map(entry => entry.fields));
  }
}
