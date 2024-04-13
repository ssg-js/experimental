# baseIMG 명시
FROM node:21-alpine

# 컨테이너 안 어떤 경로에서 실행할건지 명시
WORKDIR /app

# 레이어 시스템이기 때문에 빈번히 변경되는 파일은 맨 나중에 작성할것
# 레이어 시스템이란??
# 위의 명령어 부터 layer 0, layer 1, ... 
# 여기서 레이어 변경 시 해당 레이어부터 상위(후반부 레이어) 레이어를 다시 빌드
# 하위 레이어는 캐싱된 이미지 사용

# json 파일 현재 디렉토리로 복사
COPY package.json package-lock.json ./

# RUN npm intall 대신 사용할것
# install은 최신 버전을 설치함
# ci는 lock.json에 있는 정확한 버전만 설치
RUN npm ci

COPY index.js ./

# 레퍼런스 사이트에서 관련 정보 습득 가능
ENTRYPOINT [ "node", "index.js" ]

# docker build -f Dockerfile -t fun-docker .
# . => Image를 만들 docker file의 현 위치
# -f [filename] => filename dockerfile을 사용
# -t [IMGname] => Image에 이름 부여
# 이외 옵션 공식 레퍼런스 참고

# docker images로 만든 image 확인

# docker run -d -p 8080:8080 fun-docker 
# -d => container를 background 실행
# -p => host port와 container port 연결

# docker ps로 현재 실행중인 컨테이너 리스트 확인
