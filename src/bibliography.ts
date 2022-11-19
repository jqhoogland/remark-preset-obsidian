/**
 * The remark-cite plugin doesn't actually do anything with the citation nodes. That's up to this plugin
 */

import { Bibliography } from "./types/csl";

export interface RemarkBibliographyOptions {
    /** Path to the bibliography */
    bibliography: Bibliography;
    format?: "CSL";
    appendBibliographySection?: boolean;
}

export interface CitationItem {
    key: string;
    prefix?: string;
    suffix?: string;
    suppressAuthor?: boolean;
}

export interface CitationNode {
    type: "cite";
    value: string;
    data: {
        citeItems: Array<CitationItem>
    }
}
