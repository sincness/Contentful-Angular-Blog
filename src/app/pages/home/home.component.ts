import { Component, OnInit } from "@angular/core";
import { ContentfulService } from "../../contentful.service";
import { Router } from "@angular/router";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Entry } from "contentful";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  Posts: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}
  ngOnInit() {
    this.contentfulService.getBlogPosts().then(Posts => (this.Posts = Posts));
  }

  goToCourseDetailsPage(courseId: string) {
    this.router.navigate(["/post", courseId]);
  }

  _returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== "document"
    ) {
      return "<p>Error</p>";
    }
    return documentToHtmlString(richText);
  }

  _returnCreatedDate(datetime: any) {
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
