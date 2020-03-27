import { Injectable } from "@angular/core";

import { createClient, Entry } from "contentful";

const CONFIG = {
  space: "tru394ah5370",
  accessToken: "ykryRRQJuJvloPA8EvYNWHnhxHGLSFU0r-67hZufQDQ",

  contentTypeIds: {
    product: "2PqfXUJwE8qSYKuM0U6w8M"
  }
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {}

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.product
          },
          query
        )
      )
      .then(res => res.items);
  }
}
