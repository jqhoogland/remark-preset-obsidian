

declare module 'remark-wiki-link' {
  import { Plugin } from "unified";

  type RemarkWikiLinkOptionsTuple = [
    ["permalinks", string[]],
    
    // Default, (name) => [name.replace(/ /g, '_').toLowerCase()]
    ["pageResolver", (pageName: string) => string[] | undefined],
    
    // Default, (permalink) => `#/page/${permalink}`
    ["hrefTemplate", (permalink: string) => string | undefined],

    ["wikiLinkClassName", string | undefined],
    ["newClassName", string  | undefined],
    ["aliasDivider", string | undefined],
  ]

  type TupleToUnion<T extends any[]> = T[number];
  type TupleToObject<T extends [string, any][]> = { [key in TupleToUnion<T>[0]]: Extract<TupleToUnion<T>, [key, any]>[1] };

  export type RemarkWikiLinkOptions = TupleToObject<RemarkWikiLinkOptionsTuple>;
  export type RemarkWikiLinkPlugin = Plugin<RemarkWikiLinkOptionsTuple>;

  const wikiLinkPlugin: RemarkWikiLinkPlugin;

  export default wikiLinkPlugin;
}