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