export interface UserGraph {
  isCampusExpert: boolean;
  isDeveloperProgramMember: boolean;
  isGitHubStar: boolean;
  isHireable: boolean;
  commitComments: ClosedIssues;
  gistComments: ClosedIssues;
  repositoryDiscussionComments: ClosedIssues;
  id: string;
  login: string;
  name: string;
  email: string;
  avatarUrl: string;
  company: string;
  location: string;
  status: Status | null;
  followers: ClosedIssues;
  following: ClosedIssues;
  starredRepositories: ClosedIssues;
  bio: string;
  gists: ClosedIssues;
  pullRequests: PullRequests;
  openIssues: ClosedIssues;
  closedIssues: ClosedIssues;
  hasSponsorsListing: boolean;
  sponsors: ClosedIssues;
  contributionsCollection: ContributionsCollection;
  contributedRepos: Repositories;
  myRepos: Repositories;
  collaboratedRepos: Repositories;
}

export interface ClosedIssues {
  totalCount: number;
}

export interface Repositories {
  totalCount: number;
  edges: RepoEdge[];
}

export interface RepoEdge {
  node: RepoNode;
}

export interface RepoNode {
  createdAt?: string;
  owner: Owner;
  watchers: ClosedIssues;
  isFork: boolean;
  nameWithOwner?: string;
  stargazerCount?: number;
  id: string;
  name: string;
  stargazers: ClosedIssues;
  languages: Languages;
  forkCount: number;
}

export interface Languages {
  edges: LanguagesEdge[];
}

export interface LanguagesEdge {
  size: number;
  node: LangNode;
}

export interface LangNode {
  name: string;
  color: string;
}

export interface Owner {
  login: string;
}

export interface Status {
  id: string;
  emoji: string;
  message: string;
}

export interface ContributionsCollection {
  totalCommitContributions: number;
  totalRepositoryContributions: number;
  totalPullRequestContributions: number;
  totalPullRequestReviewContributions: number;
}

export interface PullRequests {
  edges: PullRequestsEdge[];
  totalCount: number;
}

export interface PullRequestsEdge {
  node: TentacledNode;
}

export interface TentacledNode {
  title: string;
  number: number;
  createdAt: string;
  state: State | string;
  author: Owner;
  repository: UserRepository;
}

export interface UserRepository {
  owner: Owner;
  name: string;
  stargazerCount: number;
}

export enum State {
  Closed = 'CLOSED',
  Merged = 'MERGED',
  Open = 'OPEN',
}
