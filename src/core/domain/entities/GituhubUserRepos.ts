// To parse this data:
//
//   import { Convert } from "./file";
//
//   const githubUserRepo = Convert.toGithubUserRepo(json);

export interface GithubUserRepo {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: Owner
  html_url: string
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: Date
  updated_at: Date
  pushed_at: Date
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: null
  size: number
  stargazers_count: number
  watchers_count: number
  language: null
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  has_discussions: boolean
  forks_count: number
  mirror_url: null
  archived: boolean
  disabled: boolean
  open_issues_count: number
  license: null
  allow_forking: boolean
  is_template: boolean
  web_commit_signoff_required: boolean
  topics: any[]
  visibility: string
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
  permissions: Permissions
}

export interface Owner {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Permissions {
  admin: boolean
  maintain: boolean
  push: boolean
  triage: boolean
  pull: boolean
}

// Converts JSON strings to/from your types
export function createGithubUserRepoFromJson(json: any): GithubUserRepo {
  const {
    id,
    node_id,
    name,
    full_name,
    private: git_private,
    owner,
    html_url,
    description,
    fork,
    url,
    forks_url,
    keys_url,
    collaborators_url,
    teams_url,
    hooks_url,
    issue_events_url,
    events_url,
    assignees_url,
    branches_url,
    tags_url,
    blobs_url,
    git_tags_url,
    git_refs_url,
    trees_url,
    statuses_url,
    languages_url,
    stargazers_url,
    contributors_url,
    subscribers_url,
    subscription_url,
    commits_url,
    git_commits_url,
    comments_url,
    issue_comment_url,
    contents_url,
    compare_url,
    merges_url,
    archive_url,
    downloads_url,
    issues_url,
    pulls_url,
    milestones_url,
    notifications_url,
    labels_url,
    releases_url,
    deployments_url,
    created_at,
    updated_at,
    pushed_at,
    git_url,
    ssh_url,
    clone_url,
    svn_url,
    homepage,
    size,
    stargazers_count,
    watchers_count,
    language,
    has_issues,
    has_projects,
    has_downloads,
    has_wiki,
    has_pages,
    has_discussions,
    forks_count,
    mirror_url,
    archived,
    disabled,
    open_issues_count,
    license,
    allow_forking,
    is_template,
    web_commit_signoff_required,
    topics,
    visibility,
    forks,
    open_issues,
    watchers,
    default_branch,
    permissions,
  } = json

  return {
    id,
    node_id,
    name,
    full_name,
    private: git_private,
    owner,
    html_url,
    description,
    fork,
    url,
    forks_url,
    keys_url,
    collaborators_url,
    teams_url,
    hooks_url,
    issue_events_url,
    events_url,
    assignees_url,
    branches_url,
    tags_url,
    blobs_url,
    git_tags_url,
    git_refs_url,
    trees_url,
    statuses_url,
    languages_url,
    stargazers_url,
    contributors_url,
    subscribers_url,
    subscription_url,
    commits_url,
    git_commits_url,
    comments_url,
    issue_comment_url,
    contents_url,
    compare_url,
    merges_url,
    archive_url,
    downloads_url,
    issues_url,
    pulls_url,
    milestones_url,
    notifications_url,
    labels_url,
    releases_url,
    deployments_url,
    created_at,
    updated_at,
    pushed_at,
    git_url,
    ssh_url,
    clone_url,
    svn_url,
    homepage,
    size,
    stargazers_count,
    watchers_count,
    language,
    has_issues,
    has_projects,
    has_downloads,
    has_wiki,
    has_pages,
    has_discussions,
    forks_count,
    mirror_url,
    archived,
    disabled,
    open_issues_count,
    license,
    allow_forking,
    is_template,
    web_commit_signoff_required,
    topics,
    visibility,
    forks,
    open_issues,
    watchers,
    default_branch,
    permissions,
  }
}
