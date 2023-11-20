# commerce

간단한 커머스 구현입니다. 상세 설명은 최하단에 있습니다.

-   `test login`
-   email: admin@gmail.com
-   password: Aa123123!

# How to run?

```bash
yarn

yarn dev
```

# Requirement

```
React, TypeScript, MUI, StackFlow, Zustand, Axios, EsLint, Prettier, Vite, Emotion
```

# Project structure

```
📦src
 ┣ 📂activities // 프레젠테이셔널 컴포넌트
 ┣ 📂assets // 미디어 파일
 ┣ 📂components // 아토믹 디자인패턴 컴포넌트 설계
 ┃ ┣ 📂atoms // 원자 유기체 컴포넌트
 ┃ ┣ 📂molecules // ui 컴포넌트
 ┃ ┣ 📂organisms // 기능 + ui 컴포넌트
 ┃ ┗ 📂templates // 컨테이너 컴포넌트
 ┣ 📂constants // 상수 데이터
 ┣ 📂hooks // 커스텀 훅
 ┃ ┗ 📂api // 액션함수 api 호출
 ┣ 📂mocks // 목 서비스 워커
 ┣ 📂stores // 익스터널 스토어
 ┣ 📜main.tsx
 ┣ 📜stackflow.ts
 ┗ 📜vite-env.d.ts
```

# Commit rule

```
feat        새로운 기능을 제공합니다.
fix         버그 수정.
docs        문서만 변경됩니다.
style       코드 작동에 영향을 미치지 않는 스타일 변경(빈 공간, 코드 포멧팅, 누락된 세미콜론 등)
refactor    버그를 수정하거나 기능을 추가하지 않는 코드 변경입니다.
test        테스트 코드를 추가하거나 기존 테스트 코드를 수정합니다.
chore       빌드 프로세스 또는 보조 도구 및 라이브러리(예: 문서 생성)에 대한 변경 사항.
perf        성능을 향상시키는 코드 변경입니다.
ci          CI 구성 파일 및 스크립트의 변경 사항.
build       빌드 시스템 또는 외부 디펜던시에 영향을 미치는 변경 사항(예: gulp, broccoli, npm).
temp        변경사항에 포함되지 않는 임시 커밋입니다.
```

# Tech Detail

-   `TypeScript` - 타입을 미리 정해줌으로써 타입오류를 방지시킵니다. 유지보수에 용이하며 코드의 안정성을 높여주므로 타입 스크립트를 사용하였습니다.

-   `MUI` - Material Design 규칙을 따르는 UI 컴포넌트를 제공하여 일관된 사용자 경험을 제공하며, 커스터마이징에 용이합니다.

-   `Emotion` - Material-UI v5부터는 Emotion이 기본 스타일 엔진으로 사용되고 있으며, 의존성의 이유로 사용하였습니다.

-   `Zustand` - Redux나 MobX와 같은 복잡한 상태 관리 라이브러리의 대안으로, 보다 간단하게 상태 관리를 할 수 있습니다.또한 React 훅을 사용하여 보다 자연스럽게 React 생태계와 통합됩니다. 작은 크기와 빠른 성능으로 애플리케이션의 부담을 최소화 해줍니다.

-   `StackFlow` - 모바일 앱과 같은 사용성을 극대화 하기 위하여 선택하였습니다.

-   `Axios` - Axios는 HTTP 요청을 보내고 응답을 처리하기 위한 간결하고 이해하기 쉬운 API를 제공합니다. 일관된 방식으로 서버와의 통신을 구현할 수 있습니다.

# Project Detail

DrawerAppBar를 사용해 메뉴를 만들었으며 mock 데이터와 익스터널 스토어를 사용하여 사용자 데이터를 저장하고 로그인, 로그아웃 상태를 구분 하였습니다. 로그인 시 모든 목록들이 보이며, 로그아웃 상태일때에는 제한적인 목록만 보입니다.

이 커머스는 숙소를 필터링하여 원하는 조건에 맞는 숙소를 정리하여 보여주는 서비스입니다. 필터는 카탈로그 페이지 내에서 useCatalogue 훅을 호출하여 각각의 List를 만들어 목록을 추출하고, 조건을 통해 필터 된 요소들은 setFilters 에 반영하여 화면에 리렌더링 되도록 하였습니다. 또한 페이지네이션을 적용하여 한 화면에 20개의 카드만 반영 되도록 설정 하였습니다.

특이한 부분은 StackFlow의 라우팅 방식으로 앱과 유사한 사용성을 가지고 있습니다. 부드러운 화면 전환 효과를 가지고 있으며, 각 페이지를 이동할 때 Props를 사용하여 데이터를 전달 할 수 있습니다.

아토믹 디자인 패턴을 적용하여, 정돈된 컴포넌트와 유지보수에 용이하도록 구분하였습니다.

`프로젝트 개발 기간` 2023.11.18 ~ 2023.11.21 (4일)

# Collaboration Request

-   `commit convention` commit rule에 작성되어 있는 규칙을 지켜주세요. 커밋은 최소한의 단위로 커밋 해주시길 바랍니다. 커밋 메세지는 무엇을 개발하였는지 정확하게 표기 되어 있어야 합니다. 커밋을 할 때는 항상 오류가 없어야 합니다. [commitizen](https://commitizen-tools.github.io/commitizen/) 을 사용한다면 보다 명확한 커밋이 가능합니다.

-   `폴더 구조` 는 Project structure 를 참고 하여 주시길 바랍니다.

-   `함수형 프로그래밍` 을 지향 합니다. 한개의 함수에는 단 하나의 기능만을 가져야 합니다. 하나 이상의 기능이라면, 함수를 분리 해주시길 바랍니다. (action / 훅), (util / 계산)
    (constants / 데이터) 를 분류하여 작성 합니다.

-   `컴포넌트명 작성` PascalCase 를 사용 합니다. CamelCase에서 맨 앞글자를 대문자로 표기하는 것을 뜻하며, 나머지 뒤에 따라붙는 단어들의 앞글자는 모두 대문자로 표기해야 합니다.

-   `변수명 작성` camelCase 를 사용합니다. 첫글자는 소문자로 시작하며, 뒤에 따라붙는 단어들은 모두 대문자로 표기 합니다. 주로 명사로 명명하며, 변수의 역할을 위해 요약하여 적는 일은 지양합니다.

-   `이벤트를 제어하는 함수명` 역할에 따라서 handle, on .. 등 뒤에 붙는 단어는 명사를 먼저 표기한 후 동사를 붙이도록 합니다. on 접두사의 경우 props의 실제 이벤트가 연결 되어 있다는 것을 뜻합니다. handle 접두사의 경우 이벤트가 발생 하였을 때 실행 되는 함수를 뜻합니다.

-   `클린코드` 를 상시 이행하여야 합니다. console.log , 사용되지 않는 코드 주석 등 프로젝트 작동과 무관한 내용은 공유되지 않아야 합니다.

-   `prettier, EsLint` 가 설정 있으며, .vscode/extension.json에 권장되는 vscode 확장 프로그램이 설정되어 있어 자동으로 확장 프로그램 설치가 요구되는 팝업이 출력 됩니다.

# Atomic Design Pattern

-   `Atom` : 더이상 분해 할 수 없는 기본 컴포넌트 입니다.

-   `Molecule` : 여러 개의 atom을 결합하여 자신의 고유한 특성을 가집니다.

-   `Organism` : organism은 앞 단계보다 좀 더 복잡하고 서비스에서 표현될 수 있는 명확한 영역과 특정 컨텍스트를 가집니다.

-   `Template` : 템플릿은 activities를 만들 수 있도록 여러 개의 organism, molecule로 구성할 수 있습니다.

-   `Activities` : activities는 유저가 볼 수 있는 실제 콘텐츠를 담고 있습니다.
