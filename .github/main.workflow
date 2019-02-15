workflow "Lint, deploy & publish" {
  on = "push"
  resolves = [
    "npm lint",
    "deploy",
    "publish",
  ]
}

action "npm install" {
  uses = "actions/npm@94e6933"
  args = "ci"
}

action "npm lint" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["npm install"]
  args = "run lint"
}

action "deploy" {
  uses = "primer/deploy@v2.0.0"
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
}

action "publish" {
  uses = "primer/publish@master"
  secrets = [
    "GITHUB_TOKEN",
    "NPM_AUTH_TOKEN",
  ]
}
