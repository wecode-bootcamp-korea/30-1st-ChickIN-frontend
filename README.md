![header](https://capsule-render.vercel.app/api?type=waving&color=FFCC51&height=100&section=header&fontSize=90)


<img src="https://user-images.githubusercontent.com/61664975/158049694-3f5432ba-2a22-4fe1-b4d7-2dd5b4065892.jpg">

<br><br>

---
# Target site
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb0HNcx%2FbtrvKJPkmQP%2FgPYcHkiXc5NtsM5VbeqiaK%2Fimg.png">

* ## 사이트 소개  
    [Site Link](https://www.sirloin.co.kr/)
    
    과정, 구조, 경험의 디자인을 통해 '고기의 기준이 되다'라는 슬로건을 내세우는 브랜드

    사료-사육-도축-발골-숙성-가공 전과정을 설계해서

    기존 한우 시장의 파편적 유통구조로 인해 저하된 사용자의 미식 경험을 개선하고 있다  

* ## 사이트 선정 이유
    * 깔끔한 UI
    * 이커머스의 기본 기능인 로그인, 회원가입, 상품 조회, 옵션 선택, 장바구니, 주문 기능을 모두 담고 있음

<br><br>

---
# 초기기획 & ERD

## ERD
<img src="https://user-images.githubusercontent.com/61664975/158050131-7b753722-b4c9-4ef8-8e5b-f9da9c479c06.png">

## User flow
<img src="https://user-images.githubusercontent.com/61664975/158052895-fdf3163b-8f9c-42c2-9342-9f2ab879cb6d.jpeg">

## 초기기획 및 구현 목표
* 짧은 기간동안 기능구현에 집중해야하므로 사이트의 디자인과 기획만 클론
* 개발은 초기세팅부터 전부 직접 구현
* 사이트 카테고리 중 '구매'탭만 구현
* 필수 구현 사항을 회원가입, 로그인, 상품 조회, 장바구니, 주문기능으로 설정 
* 한 상품에 여러 옵션이 적용될 수 있게 기획

<br><br>

---
# 개발기간 및 팀원

* ## 개발기간  
    2022.02.28 ~ 2022.03.10  
    Sprint planning - 1 week

* ## 개발인원 및 파트

    * Front-end  
        강성훈 - 상단 네비게이션 바, 상품 리스트 페이지, 메인 페이지
        
        이상민 - 공통 컴포넌트 footer, 상품 상세페이지, 메인 페이지
        
        이희수 - 회원가입 페이지, 로그인 페이지, 장바구니 페이지, 메인 페이지
        
    * Back-end   
        김가람휘 - 초기세팅, 모델링, 상품 리스트 API, 상품 상세페이지 API, 주문 API, db_uploader 작성 
        
        김지성 - 모델링, 회원가입/로그인 API, 로그인 데코레이터, 장바구니 API  
<br><br>

---
# 적용 기술 및 구현 기능

* ## 기술 스택
    * ### Front-end  
        <a href="#"><img src="https://img.shields.io/badge/HTML-DD4B25?style=plastic&logo=html&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/SASS-254BDD?style=plastic&logo=sass&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/javascript-EFD81D?style=plastic&logo=javascript&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/React-68D5F3?style=plastic&logo=react&logoColor=white"/></a>
    * ### Back-end  
        <a href="#"><img src="https://img.shields.io/badge/python-3873A9?style=plastic&logo=python&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/Django-0B4B33?style=plastic&logo=django&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/MySQL-005E85?style=plastic&logo=mysql&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/AWS-FF9701?style=plastic&logo=aws&logoColor=white"/></a>
    <a href="#"><img src="https://img.shields.io/badge/bcrypt-525252?style=plastic&logo=bcrypt&logoColor=white"/></a>
     <a href="#"><img src="https://img.shields.io/badge/postman-F76934?style=plastic&logo=postman&logoColor=white"/></a>
    * ### Common  
        <a href="#"><img src="https://img.shields.io/badge/git-E84E32?style=plastic&logo=git&logoColor=white"/></a>
        <a href="#"><img src="https://img.shields.io/badge/RESTful API-415296?style=plastic&logoColor=white"/></a>
    * ### Communication  
        <a href="#"><img src="https://img.shields.io/badge/github-1B1E23?style=plastic&logo=github&logoColor=white"/></a>
        <a href="#"><img src="https://img.shields.io/badge/Slack-D91D57?style=plastic&logo=slack&logoColor=white"/></a>
        <a href="#"><img src="https://img.shields.io/badge/Trello-2580F7?style=plastic&logo=trello&logoColor=white"/></a>
        <a href="#"><img src="https://img.shields.io/badge/Notion-F7F7F7?style=plastic&logo=notion&logoColor=black"/></a>
* ## 구현기능
    * 회원가입 / 로그인
        - 로그인 시 이메일 아이디 및 비밀번호 유효성 검사
        - 등록된 정보가 없을 경우 알림창 띄움
        - 로그인 성공 시 Main 페이지로 이동
    * Navigation bar 
        - 이중으로 메뉴 옵션을 선택할 수 있도록 UI 구현 
        - 로고 클릭으로 로그인 페이지 이동할 수 있도록 구현
        - 다중 메뉴를 이용해 원하는 상품리스트로 이동할 수 있도록 구현 
 
    * 상품 리스트 페이지
        - 섹션(고기 종류) 선택에 따라서 조건부로 Filtering option 렌더링 (전체/닭다리/윙/봉/특수 부위..)
        - 섹션 선택에 따라서 상품리스트 구성이 달라지도록 구현
        - Filter option 선택에 따라서 다르게 data fetching 받고, 상품리스트 구성이 달라지도록 구현 
        - 추천 순/ 최신 순/ 가격 내림,오름 순으로 사용자가 상품리스트 정렬 가능하도록 구현 (쿼리스트링으로 sort option 에 따라 data fetching 을 다르게 받도록 구현) 
        - 쿼리스트링으로 3가지의 sort 기능이 한번에 관리되도록 state으로 데이터 저장해서 보존이 되도록 구현
        - 상세 페이지로 이동할 때, 상품이 가지고 있는 Id 를 이용해 동적 라우팅으로, 상품에 따른 상품 디테일 페이지로 이동이 가능하게 
    * 상품 상세 페이지
       - 제품 리스트 페이지에서 제품을 선택했을 때 그에 해당하는 제품의 id값을 전달받아 해당 제품의 내용을 렌더링합니다.
       - 로그인 단으로부터 토큰을 받아옵니다. 토큰이 없는 경우 비회원으로 분류되어 장바구니 이용불가
       - 제품의 수량과 추가옵션을 선택할 수 있고 그에 맞춰 total price를 렌더링합니다.
       - 바로구매 버튼을 누르면 alert창이 렌더링됩니다.
       - 장바구니 버튼을 누르면 제품ID, 추가옵션ID, 수량을 서버에 전달하고 장바구니 페이지로 이동합니다.
    * 장바구니
        - 장바구니에 담긴 상품 리스트 화면에 렌더링
        - 배송비를 포함한 총 금액 계산
        - 상품 주문 버튼 클릭 시 구매 완료 알림창 출력
<br><br>

---
# API 기능정의서
[Link](https://documenter.getpostman.com/view/19725087/UVsJvSCU)

<br><br>

---
# 시연 영상

https://youtu.be/ysUgjNPgGmI
    
<br><br>
---
# Reference
* 이 프로젝트는 [설로인](https://www.sirloin.co.kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
* 실무수준의 프로젝트이지만 학습용으로 만들었기 떄문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
* 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다
* 이 프로젝트에서 사용하고 있는 로고와 배너는 해당 프로젝트 팀원 소유이므로 해당 프로젝트 외부인이 사용할 수 없습니다

![Footer](https://capsule-render.vercel.app/api?type=waving&color=ffcc51&height=100&section=footer)
