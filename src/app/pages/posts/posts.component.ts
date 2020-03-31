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
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get("id");
    this.contentfulService.getCourse(courseId).then(post => {
      this.post = post;
    });
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
}
