# 문의사항

1. Suspense를 적용해보고 싶은데, 적용했을때 제대로 동작하지 않습니다.

- suspense 동작하는 원리
- 현재 프로젝트에 적용하는 방법

2. 배포 후 proxy 처리하는 방법이 궁금합니다.

- cors 에러때문에 vite.config.ts 파일에 proxy 설정을 추가 했습니다.

```
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: NAVER_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
```

- 개발환경에서는 잘 동작하다가 배포 후에는 요청할때 에러 발생해서 vercel.json 파일 생성해서 proxy 설정 추가했는데도 에러 발생하는 것 같습니다. 어떻게 처리하면 좋을까요?
