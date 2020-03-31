import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ContentfulService } from "../../contentful.service";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { Entry } from "contentful";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  post: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get("id");
    this.contentfulService.getPost(postId).then(post => {
      this.post = post;
      console.log(post);
    });
  }

  goToList() {
    this.router.navigate(["/home"]);
  }

  _returnHtmlFromRichText(richText) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== "document"
    ) {
      return "<p>Error</p>";
    }
    return documentToHtmlString(richText);
  }

  _returnCreatedDate(datetime) {
    if (datetime === undefined || datetime === null) {
      return "<p>Error</p>";
    }
    const e = new Date(datetime);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return e.toLocaleDateString("da-DK", options);
  }
}
