```sh
mando@mandalarian ~/G/workshop-chapters (main) [SIGINT]> yarn add rescript@10.0.0-m1
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved 0 new dependencies.
✨  Done in 220.30s.
mando@mandalarian ~/G/workshop-chapters (main)> yarn re:build
yarn run v1.22.10
$ rescript
events.js:292
      throw er; // Unhandled 'error' event
      ^

Error: spawn /Users/mando/Github/workshop-chapters/node_modules/rescript/darwin/rescript.exe ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:269:19)
    at onErrorNT (internal/child_process.js:465:16)
    at processTicksAndRejections (internal/process/task_queues.js:80:21)
Emitted 'error' event on ChildProcess instance at:
    at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
    at onErrorNT (internal/child_process.js:465:16)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'spawn /Users/mando/Github/workshop-chapters/node_modules/rescript/darwin/rescript.exe',
  path: '/Users/mando/Github/workshop-chapters/node_modules/rescript/darwin/rescript.exe',
  spawnargs: []
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
mando@mandalarian ~/G/workshop-chapters (main) [1]> git add . && git commit -m "rescript m1 fails"
[main 56344150aa48] rescript m1 fails
 3 files changed, 44 insertions(+), 6 deletions(-)
 create mode 100644 .yarnrc
mando@mandalarian ~/G/workshop-chapters (main)> ghrc
? Repository name test-rescript-m1
? Repository description
? Visibility Public
? This will add an "origin" git remote to your local repository. Continue? Yes
HTTP 401: Bad credentials (https://api.github.com/graphql)
hint: try authenticating with `gh auth login`
mando@mandalarian ~/G/workshop-chapters (main) [1]>
```
