[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=WTgxbVJEVnBFaTYwOTA4V0xseXRBQi81ZThSTmhUWFBGbzZ1a1ZhRVU3TT0tLWl5NlZCb3F6YUpSelFhMktJN3YwMHc9PQ==--8c439103a09e8f715636e75597c962950416fb18)](https://www.browserstack.com/automate/public-build/WTgxbVJEVnBFaTYwOTA4V0xseXRBQi81ZThSTmhUWFBGbzZ1a1ZhRVU3TT0tLWl5NlZCb3F6YUpSelFhMktJN3YwMHc9PQ==--8c439103a09e8f715636e75597c962950416fb18)

# boilerplate-angularjs
A Boilerplate for AngularJS

## Supports
- Single page application
- Layout template
- Component-based UI
- Minify
- Base Url
- Auto Scroll (experimental)

## Component workflow
```
parent    ←   (update props)
↓                  ↑
(set props/one-way binding)
↓                  |
component          |
↓                  |
(copy props to state)
(manual copy for Object and Array)
↓                  |
state     ←   (update state)
↓                  ↑
(set attrs from state/two-way binding)
↓                  |
Form      →      event
```

## Tested by:
![BrowserStack](https://bstacksupport.zendesk.com/attachments/token/fOHQtvrclnZEqoLZ5BWBm4CDx/?name=browserstack-logo-600x315.png)(https://www.browserstack.com)
