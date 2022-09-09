export interface MultipleChoiceType {
  SKU: string;
  interpreter: number;
  type: string;
  language: string;
  tagsOrConcepts: string[];
  text: string;
  alternatives: Alternative[];
}

interface Alternative {
  text: string;
  feedback: string;
  correct: boolean;
}