export interface IUsers {
  avatar_url: string | null
  bio: string | null
  blog: string | null
  company: string | null
  created_at: string | null
  email: string | null
  events_url: string | null
  followers: number | null
  followers_url: string | null
  following: number | null
  following_url: string | null
  gists_url: string | null
  gravatar_id: string | null
  hireable: string | null
  html_url: string | null
  id: number | null
  location: string | null
  login: string | null
  name: string | null
  node_id: string | null
  organizations_url: string | null
  public_gists: number | null
  public_repos: number | null
  received_events_url: string | null
  repos_url: string | null
  site_admin: boolean
  starred_url: string | null
  subscriptions_url: string | null
  twitter_username: string | null
  type: string | null
  updated_at: string | null
  url: string
}

export interface IProfileAPI {
  avatar_url: string | null
  events_url: string | null
  followers_url: string | null
  following_url: string | null
  gists_url: string | null
  gravatar_id: string | null
  html_url: string | null
  id: number | null
  login: string | null
  node_id: string | null
  organizations_url: string | null
  received_events_url: string | null
  repos_url: string | null
  score: number | null
  site_admin: boolean | null
  starred_url: string | null
  subscriptions_url: string | null
  type: string | null
  url: string | null
}

export interface IRepoAPI {
  archive_url: string | null
  archived: boolean | null
  assignees_url: string | null
  blobs_url: string | null
  branches_url: string | null
  clone_url: string | null
  collaborators_url: string | null
  comments_url: string | null
  commits_url: string | null
  compare_url: string | null
  contents_url: string | null
  contributors_url: string | null
  created_at: string | null
  default_branch: string | null
  deployments_url: string | null
  description: string | null
  disabled: boolean | null
  downloads_url: string | null
  events_url: string | null
  fork: boolean | null
  forks: number | null
  forks_count: number | null
  forks_url: string | null
  full_name: string | null
  git_commits_url: string | null
  git_refs_url: string | null
  git_tags_url: string | null
  git_url: string | null
  has_downloads: true
  has_issues: boolean | null
  has_pages: boolean | null
  has_projects: true
  has_wiki: true
  homepage: string | null
  hooks_url: string | null
  html_url: string | null | undefined
  id: number | null
  issue_comment_url: string | null
  issue_events_url: string | null
  issues_url: string | null
  keys_url: string | null
  labels_url: string | null
  language: string | null
  languages_url: string | null
  license: string | null
  merges_url: string | null
  milestones_url: string | null
  mirror_url: null
  name: string | null
  node_id: string | null
  notifications_url: string | null
  open_issues: number | null
  open_issues_count: number | null
  owner: Iowner
  permissions: Ipermissions
  private: boolean | null
  pulls_url: string | null
  pushed_at: string | null
  releases_url: string | null
  size: number | null
  ssh_url: string | null
  stargazers_count: number | null
  stargazers_url: string | null
  statuses_url: string | null
  subscribers_url: string | null
  subscription_url: string | null
  svn_url: string | null
  tags_url: string | null
  teams_url: string | null
  trees_url: string | null
  updated_at: string | null
  url: string | null
  watchers: number | null
  watchers_count: number | null
}

interface Iowner {
  avatar_url: string | null
  events_url: string | null
  followers_url: string | null
  following_url: string | null
  gists_url: string | null
  gravatar_id: string | null
  html_url: string | null
  id: number | null
  login: string | null
  node_id: string | null
  organizations_url: string | null
  received_events_url: string | null
  repos_url: string | null
  site_admin: boolean | null
  starred_url: string | null
  subscriptions_url: string | null
  type: string | null
  url: string | null
}

interface Ipermissions {
  admin: boolean | null
  pull: boolean | null
  push: boolean | null
}
