export interface AuthorCommits {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

export interface Item {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: Commit;
  author: OwnerClass;
  committer: OwnerClass;
  parents: Parent[];
  repository: Repository;
  score: number;
}

export interface OwnerClass {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type | string;
  site_admin: boolean;
}

export enum Type {
  Organization = 'Organization',
  User = 'User',
}

export interface Commit {
  url: string;
  author: CommitAuthor;
  committer: CommitAuthor;
  message: string;
  tree: Tree;
  comment_count: number;
}

export interface CommitAuthor {
  date: string;
  name: string;
  email: string;
}

export interface Tree {
  url: string;
  sha: string;
}

export interface Parent {
  url: string;
  html_url: string;
  sha: string;
}

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: OwnerClass;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
}
