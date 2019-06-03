workflow "Lint, Deploy, Publish" {
  on = "push"
  resolves = [
    "npm lint",
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

action "publish" {
  uses = "primer/publish@f4c6fecc0beeb67e60f51c83dd27a9e1dd4299e5"
  needs = ["npm install"]
  secrets = [
    "GITHUB_TOKEN",
    "NPM_AUTH_TOKEN",
  ]
  args = ["--", "--unsafe-perm"]
}
