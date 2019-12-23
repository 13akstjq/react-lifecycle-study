### React lifeCycle Study

- constructor

  - 컴포넌트의 생성자 부분입니다.

- componentWillMount (after v16.3 deprecate)

- componentDidMount

  - 컴포넌트가 화면에 나타났을 때 호출됩니다.
  - DOM에 직접 접근할 수 있는 부분으로서, `axios`, `fetch`작업을 하는 부분이기도 합니다.

- componentWillReceiveProps (after v16.3 deprecate)

- getDerivedStateFromProps

- shouldComponentUpdate

  - 변경된 `State`에 대해서 `rendering`을 다시 할지 안할지 결정하는 부분.
  - 여기서 성능 최적화를 진행함.
  - `true`혹은 `false`를 리턴함.

- getSnapshotBeforeUpdate

  - `shouldComponentUpdate`에서 true를 리턴하면 호출하는 API
  - 주로 애니메이션 효과를 초기화하거나 이벤트 리스너를 없애는 작업

- componentDidUpdate
- 컴포넌트의 `State`가 업데이트된 후에 호출되는 API

- componentWillUnmount

  - 이벤트리스터를 제거하거나, `setTimeOut`을 `clearTimeout`을 통해서 제거해주고, 추가적으로 외부라이브러리를 `dispose`할 수 있다면 여기서 해줍니다.

- componentDidCatch
  - 에러가 발생했을 때 호출되는 API입니다.
