# Web Performance

[Questions with Solutions](./solutions.md)


- How do you handle performance ?
- What are some ways to improve webapp's performance ?
- What performance metrics do you take into consideration?
  - FCP - First Contentful Paint
  - LCP - Largest Contentful Paint
  - TBT - Total Blocking Time
- What is FCP ?
  - Firs Contentful Paint
  - Analyze on LightHouse, Performance tab in Dev Tools, React Developer Tools
  - use CDN for static content
  - client side caching for static content
  - Reduce bundle size by removing unwanted libraries
  - use `useMemo` and `useCallback`
  - Ask PM, and implement Lazy Loading using Code Splitting - use `defer` in js, use `React.Lazy`
  - Consider Server Side Rendering - based on application, as it can complicate the code and make it hard to maintain
