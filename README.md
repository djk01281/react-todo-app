# React-todo-app

기간: November 25, 2022 → November 26, 2022
깃허브 링크: https://github.com/djk01281/react-todo-app/tree/main/task-app
상태: Need Changes
생성일: November 25, 2022 9:21 PM
태그: Javascript, React

Need Refactoring

찾아보니까 update function을 아래 component에 바로 안넘겨주고 handleSubmit()같은 function을 넘겨주는 게 더 나은 디자인 패턴인 것 같음.

[Building Controlled Forms Using Functional Components in React](https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd)

[https://github.com/djk01281/react-todo-app](https://github.com/djk01281/react-todo-app)

# Why?

**State**와 **Props**를 이용해 보고 싶었다. **리스트**를 어떻게 render하는지, react에서 **input** 필드와 **이벤트**를 어떻게 처리하는지 궁금했다. 또 **functional component**로 만들고 싶었다. 

# Summary

```
.
├── public          
│   ├── index.html
│   ├── manifest.json          
├── src
│   ├── components
│		│   ├── Overview.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
├── package-lock.json
├── .gitignore                 
└── README.md
```

## Functions:

Input창에 Task를 입력, 버튼을 눌러 **추가** 가능.

Task 우측 (-) 버튼을 눌러 Task를 **삭제** 가능. 

## Logic:

```
index.html
├── index.js          
│   ├── App.js
└──	└── └── Overview.js
```

**States:** 

`taskState`: 현재 작성 중인 task, {task:[string], id:[int]}의 형태

`taskStates`: task의 배열

`inputText`: 입력창에 입력 중인 text

`idState`: task별 id 

**Overview.js:** 

`taskState` 배열을 가지고 task와 삭제 버튼을 return

- 삭제 button을 클릭하면
    - 현재 id와 같지 않은 taskStates만 남김

**App.js**:

Input과 Overview를 render

- input이 변경되면 `inputText`를 업데이트
- 추가 button을 클릭하면
    - `taskState`를 현재 inputText와 id로 업데이트
    - `taskStates`에 taskState를 추가
    - `idState`를 1 증가
    

# Issues

### - task를 추가(+) 사이트가 crash.

**원인파악:** 버튼 클릭시 발생하는 이벤트를 살펴봄.

**원인:** `onClick={setTasks(…)}` 왜 안되지

**+** **해결:** `onClick={() => setTasks(…)}`

### - 하나의 task를 삭제(-)하면 전부 삭제됨

**원인파악:** task들의 id를 옆에 나란히 render했더니 모든 task가 같은 id를 가짐.

**원인:** `idState`를 업데이트하는 `SetId`를 `Setid`로 잘못 기입.

**+** **해결:** 오타 수정

### - input값 변경 없이 추가(+)만 눌러 작성한 task 여러 개중 하나만 삭제(-)해도 전부 삭제됨

**원인파악:** task들의 id를 옆에 나란히 render했더니 해당 task가 같은 id를 가짐.

**원인:** `taskState`를 업데이트하는 `setTask`가 input의 onChange에 있었음. 

**+** **해결:** 추가(+)를 눌렀을 때 하나의 task가 작성 완료되게 button의 onClick으로 `setTask`를 옮김.

## Insights

### 배열을 render

`**array.map()**`사용

### 배열에 원소 추가

**Spread syntax** 사용: `<updateState>([**…**<state>, <element>])`

### 배열에서 원소 삭제

`**array.filter()**`사용

# References

[Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[Spread syntax (...) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
