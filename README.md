
# log connect

이 프로젝트는 `log`, `error`, `warn` 등 콘솔 메서드 호출을 추적하고, 이를 `consoleHistory` 배열에 저장하는 방법을 제공합니다.

## 목차

- [log connect](#log-connect)
  - [목차](#목차)
  - [설치](#설치)
  - [사용법](#사용법)
  - [개발](#개발)
    - [코드 구조](#코드-구조)
    - [내보낸 멤버](#내보낸-멤버)
  - [테스트](#테스트)
  - [라이선스](#라이선스)

## 설치

1. 저장소를 클론합니다:

## 사용법

1. 프로젝트에서 `consoleHistory`와 `originalConsole`을 가져옵니다:

   ```typescript
   import { consoleHistory, originalConsole } from './index';

   console.log('Hello, World!');
   console.error('This is an error message');

   console.log(consoleHistory);
   ```

2. `consoleHistory` 배열에는 모든 콘솔 메서드 호출의 메서드 이름과 인자가 저장됩니다:

   ```typescript
   [
     { method: 'log', args: ['Hello, World!'] },
     { method: 'error', args: ['This is an error message'] }
   ]
   ```

## 개발

이 프로젝트를 개발하고 확장하려면 `index.ts` 파일을 수정할 수 있습니다. 현재 구현은 콘솔 메서드를 재정의하여 호출을 추적합니다.

### 코드 구조

- `index.ts`: 콘솔 메서드를 재정의하고 호출을 추적하는 메인 구현이 포함되어 있습니다.

### 내보낸 멤버

- `consoleHistory`: 모든 콘솔 메서드 호출 기록을 저장하는 배열입니다.
- `originalConsole`: 원래 콘솔 메서드에 대한 참조를 저장하는 객체입니다.

## 테스트

 테스트를 실행합니다:

   ```sh
   bun test
   ```

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하십시오.
