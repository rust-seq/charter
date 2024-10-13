export enum Kind {
  Binary,
  Library,
}

export interface Category {
  name: string;
  icon: string;
}

export interface Socials {
  github?: string;
  docs?: string;
  zulip: boolean;
}

export interface Crate {
  name: string;
  kind: Kind;
  organization: string;
  category: Category;
  socials: Socials;
  description: string;
  recentlyReleased?: boolean;
}
