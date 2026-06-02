export enum ContactType {
  Email = "email",
  Phone = "phone",
  GitHub = "github",
  LinkedIn = "linkedin",
  Telegram = "telegram",
}

export interface Contact {
  type: ContactType;
  value: string;
  href: string;
}

export enum EmploymentType {
  FullTime = "full_time",
  PartTime = "part_time",
  SelfEmployed = "self_employed",
  Freelance = "freelance",
  Contract = "contract",
  Internship = "internship",
  Apprenticeship = "apprenticeship",
  Seasonal = "seasonal",
}

export enum LocationType {
  OnSite = "on_site",
  Hybrid = "hybrid",
  Remote = "remote",
}

export enum ExperienceType {
  Company = "company",
  Project = "project",
}

export enum ProfileStatus {
  OpenToWork = "open_to_work",
  Hiring = "hiring",
  Unavailable = "unavailable",
}

export interface Profile {
  first_name: string;
  last_name: string;
  additional_name?: string;
  pronouns?: string;
  headline: string;
  industry?: string;
  location: string;
  address?: string;
  birthday?: string;
  website?: string;
  status?: ProfileStatus;
  contacts: Contact[];
  languages: {
    persian: string;
    english: string;
  };
}

export interface About {
  summary: string;
}

export interface Experience {
  title: string;
  type?: ExperienceType;
  role?: string;
  employment_type?: EmploymentType;
  location_type?: LocationType;
  location?: {
    country: string;
    city: string;
  };
  period?: {
    start: string;
    end: string;
  };
  description?: string;
  stacks?: string[];
  responsibilities?: string[];
  value?: number;
  children?: Omit<Experience, "children">[];
}

export interface Education {
  school: string;
  degree?: string;
  field_of_study?: string;
  period: {
    start: string;
    end: string;
  };
  grade?: string;
  activities?: string;
  description?: string;
  stacks: string[];
}

export interface FeaturedProject {
  name: string;
  description: string;
  url?: string;
  tech_stack: string[];
}

export interface ImpactHighlight {
  title: string;
  description: string;
}

export interface AdditionalInfoItem {
  label: string;
  value: string;
}

export interface Portfolio {
  profile: Profile;
  about: About;
  impact_highlights: ImpactHighlight[];
  experience: Experience[];
  education: Education[];
  additional_information: AdditionalInfoItem[];
  preferences: {
    portfolio_goal: string | null;
    tone: string;
    languages_output: string[];
  };
}
