import { Blog } from "./Blog";
import { Portfolio } from "./Portfolio";

export interface MarkdownItem{
    title : string;
    description: string;
    content: string;
    slug: string;
    date: string;
    coverImage: string;
}

export interface MarkdownContent {
    blogs:Blog[];
    portfolios: Portfolio[];
}

// Can holds either blogs or portfolios
export type ContentItemName = keyof MarkdownContent;

export interface SearchContent extends Partial<MarkdownItem>{
    category: ContentItemName;
}

// export interface SearchContent extends Partial<MarkdownItem> {
//     category: string;
//   }
