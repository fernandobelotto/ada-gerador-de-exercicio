export interface GapType {
  SKU: string;
  interpreter: number;
  type: string;
  language: string;
  tagsOrConcepts: string[];
  text: string[];
  alternatives: Alternative[];
  gaps: Gap[];
}

interface Gap {
  expected: string;
  feedbacks: Feedback[];
}

interface Feedback {
  value: string;
  text: string;
}

interface Alternative {
  value: string;
  hint: string;
}
