> ### 1. AWS에 로그인 (계정이 없다면 회원가입)

![](https://velog.velcdn.com/images/fkstndnjs/post/2e496a9d-3c2e-420e-af36-ff3cf3d904ec/image.png)

![](https://velog.velcdn.com/images/fkstndnjs/post/83c163ce-5834-417c-9f1d-2400fb24d365/image.png)

---

> ### 2. AWS 지역(Region) 변경

현재 AWS 지역이 `버지니아 북부`로 되어있다.

우리는 서울 지역에 있는 AWS를 사용할 것이기 때문에 표시된 곳을 클릭하여 지역을 `서울`로 바꿔주자.

![](https://velog.velcdn.com/images/fkstndnjs/post/c8bf5a9e-bc80-4b01-948c-cbc2e226efd9/image.png)

![](https://velog.velcdn.com/images/fkstndnjs/post/f6e0e0a8-9cf7-4ff7-a636-d3ebf56f4db7/image.png)

![](https://velog.velcdn.com/images/fkstndnjs/post/b8c7a418-b273-4053-bc06-8fe10d635220/image.png)

---

> ### 3. ec2 인스턴스 생성하기

1. 콘솔 홈에서 위에 있는 검색창에 `"ec2"`를 검색하여 ec2 서비스 페이지로 이동한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/91af3c33-f7a8-4cc2-bbe1-721465531b3d/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/48e5ea85-c6e6-4239-a44f-4858adc98429/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/ef34d5fe-6b15-4392-8bc1-eddd6adec323/image.png)

---

2. `"인스턴스 시작"` 버튼을 누르고 그 밑에 나오는 `"인스턴스 시작"`을 눌러서 인스턴스 생성 페이지로 이동한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/2bcbec75-9610-4f64-9724-822a950848fe/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/c5ae3187-d6dc-416d-82f4-45e843396cd5/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/b4296d5a-66c3-443e-905d-5e14928570ee/image.png)

---

3. `"이름 및 태그"`에서 인스턴스의 이름을 설정해준다.
![](https://velog.velcdn.com/images/fkstndnjs/post/9d6fbfff-0331-40c2-b166-19327a494040/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/72efddcb-8242-4b89-9389-20f1192b58ed/image.png)

---

4. `"키 페어(로그인)"`에서 인스턴스에 접속할 때 필요한 키 페어를 생성해준다. 생성하고 나면 `pem` 파일이 하나 다운받아지는 걸 볼 수 있다.
![](https://velog.velcdn.com/images/fkstndnjs/post/fbbc2df2-21b2-4ba5-a0d2-8e437f12c15d/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/b611c204-a382-43b0-858c-647bfb0c5d5b/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/e89cfb51-5f1e-4aae-9b5d-9ca16840aa6b/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/369f9191-c1a1-449b-987c-918dde13d96b/image.png)

---

5. `"네트워크 설정"`에서 `SSH`를 "위치 무관"에서 "내 IP"로 설정해주고 `HTTPS`와 `HTTP` 트래픽 허용을 모두 체크해주자.
![](https://velog.velcdn.com/images/fkstndnjs/post/acf47fec-a9cf-40b4-afc6-1147f5dda31f/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/22429340-b94b-4c6a-beb0-0dafe31912eb/image.png)

---

6. 마지막으로 오른쪽의 `"인스턴스 시작"`버튼을 클릭하여 ec2 인스턴스를 생성하면 된다.
![](https://velog.velcdn.com/images/fkstndnjs/post/65067e3d-a104-49b0-aa92-af5835b9057d/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/b20eb6ca-29ae-4cb4-b119-42679ad4b960/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/c581d8dd-ab22-4704-b6d3-4f022efac25d/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/4199078c-9af0-4297-918f-102c611895f0/image.png)

---

> ### 4. RDS 생성하기

1. ec2 때와 마찬가지로 검색창에 `"rds"`를 검색하여 RDS 서비스 페이지로 이동한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/96b5b075-4081-4ce6-a960-6156a6de7a9f/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/047d6d62-69de-4c0a-83e0-457f169fe0d7/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/554556ee-5b9d-4fac-9fc7-4a153ba88921/image.png)

---

2. `"데이터베이스 생성'` 버튼을 클릭하여 데이터베이스 생성 페이지로 이동한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/b9d1b46d-2b02-49bb-97c6-968d82bf051a/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/b24614fa-fb38-4b6d-b26d-2666390978c6/image.png)

---

3. `"엔진 옵션"`에서 `MySQL`을 선택한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/90ed8203-8688-4bef-9430-c7979774149c/image.png)

---

4. `"템플릿"`에서 `프리 티어`를 선택한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/4d715b26-b810-42ff-95a0-2e5ba4bb3b8a/image.png)

---

5. `"설정"`에서 `DB 인스턴스 식별자`, `마스터 사용자 이름`, `마스터 암호`를 설정해준다.
![](https://velog.velcdn.com/images/fkstndnjs/post/4e6a9e91-93a1-4b0c-95c1-582ddcca68d8/image.png)

---

6. `"연결"`에서 `EC2 컴퓨팅 리소스에 연결`을 선택한 뒤 `EC2 인스턴스`에서 위에서 생성한 ec2 인스턴스를 선택해준다.
![](https://velog.velcdn.com/images/fkstndnjs/post/37f770b8-a401-4ba5-8bc6-e30090bcde25/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/70c973b1-0b8a-455a-85c2-7cdf8f1948e5/image.png)

---

7. 맨 밑에 있는 `"데이터베이스 생성"` 버튼을 눌러 데이터베이스 생성을 완료한다. 데이터베이스 생성까지는 몇 분 정도 걸린다.
![](https://velog.velcdn.com/images/fkstndnjs/post/5dff054b-b502-4609-ac0f-bc565410efa5/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/f23ff407-0fec-4d7c-9c30-ea98d364017d/image.png)

---

> ### 5. 터미널에서 SSH로 ec2 연결

1. ec2 서비스 페이지로 이동하여 인스턴스 목록을 확인한다. 그리고 위에서 생성한 인스턴스의 ID를 클릭하여 인스턴스 상세 페이지로 이동한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/cb056bea-b37b-482e-b167-af65ddbf13e7/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/5fa63c17-5bfe-4a46-bf9e-52d7ab7c40d3/image.png)

---

2. `"연결"` 버튼을 클릭하여 `"인스턴스에 연결"`로 이동한다. 여러가지 연결 방법 중 `"SSH 클라이언트"`를 클릭한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/7c20c78e-83df-4da6-a5f0-71d4ff7fbccd/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/7525e521-f48a-47c4-b1d2-d3a0e7404fc5/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/ae790bca-55f8-423f-aa9f-3ffe8a863825/image.png)

---

3. 터미널을 열고 아까 다운로드 받았던 `"deploy-test.pem"` 키 페어가 있는 위치로 이동한다. 이동한 위치에서 `chmod 400 deploy-key.pem` 명령으로 키 페어의 접근권한을 수정해준 뒤, `ssh -i "deploy-key.pem" ec2-user@ec2-13-209-49-76.ap-northeast-2.compute.amazonaws.com` 명령으로 ec2 인스턴스에 연결한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/eacb07d4-5409-4b73-9cef-ebe5ff3dc4ea/image.png)

---

> ### 6. DBeaver와 RDS 연결

1. DBeaver를 실행한다(없으면 DBeaver를 설치해주자).
![](https://velog.velcdn.com/images/fkstndnjs/post/d3596c01-8d8a-41fc-82f5-7ee9af0ed8d1/image.png)

---

2. 아래 사진에 표시된 버튼을 클릭한다. DBeaver에서 관리할 새로운 DB를 연결하는 역할의 버튼이다.
![](https://velog.velcdn.com/images/fkstndnjs/post/917130be-d9e8-48e3-b3a0-337865916f94/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/1ac7c99f-0a11-44dc-a134-2f4552f75945/image.png)

---

3. `MySQL`을 선택한 뒤 다음을 클릭한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/87292d81-373a-47ed-8165-754c12cd2fdc/image.png)

---

4. 데이터베이스를 연결하기 위해 여러가지를 설정하는 창이 나온다. 먼저 `"Main"`탭에서는 `Server Host`, `Username`, `Password`를 설정해주면 된다. 이를 설정하기 위해서는 AWS의 RDS 서비스 페이지에서 아까 생성했던 DB의 상세 페이지로 들어간 뒤 엔드포인트를 복사하여 `Server Host`에 붙여넣고 `Username`과 `Password`는 RDS를 만들 때 설정했던 `마스터 사용자 이름`, `마스터 암호`를 각각 입력해주면 된다.
![](https://velog.velcdn.com/images/fkstndnjs/post/6b96dd6c-ccf4-4e88-977e-0b35132ea4a3/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/eba14c4a-4075-42c6-a6cc-290d08a72a35/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/4848f248-16ec-468e-8910-452aa482fb03/image.png)

---

5. 현재 RDS는 외부에서 접속할 수 없고 ec2 인스턴스를 통해서만 접속할 수 있다. 따라서 `"SSH"`탭으로 이동한 뒤 `Use SSH 터널`을 체크해주고 `Host/IP`, `User Name`에 ec2 연결 페이지에 있는 `퍼블릭 IP 주소`와 `사용자 이름`을 각각 입력해주고, `Authentication Method`를 `"Public Key"`로 설정한 뒤 위에서 다운로드 받았던 `deploy-test.pem` 키 페어를 설정해준다.
![](https://velog.velcdn.com/images/fkstndnjs/post/4346d27f-b7c1-446e-96c9-00330cd42a49/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/7a0b31b3-9182-4339-afd0-a678e6a404dd/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/9209c3fa-80f1-4173-a184-78e314344419/image.png)

---

6. `"Test tunnel configuration"` 버튼을 눌러 ec2와의 연결을 테스트한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/ed8e6424-3bff-4c82-849c-4f18119edce1/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/60f6abd2-bed4-4354-a37e-e1b7f82a1cf8/image.png)

---

6. `"Test Connection"` 버튼을 눌러 RDS와의 연결을 테스트한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/84ff4b78-f212-4bf1-941f-bdf6ac7c6201/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/c898e6aa-97ad-40f6-89d0-c18ed9ee09f0/image.png)

---

7. `"완료"` 버튼을 눌러 설정을 끝내고 새로 연결된 RDS를 더블클릭 하여 연결해준 뒤 데이터베이스 목록을 확인한다. 아직 생성한 데이터베이스가 없기 때문에 `sys`를 제외하고는 아무것도 뜨지 않는다.
![](https://velog.velcdn.com/images/fkstndnjs/post/85d38d9e-1624-489c-9942-8cfea98e9dcd/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/07ff03aa-0272-49d0-83fe-3534998ecd28/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/f09e58ce-7c00-49b7-83a1-7dd27c926fe9/image.png)

---

8. 데이터베이스 목록에서 오른쪽 마우스를 눌러 `"Create New Database"`를 클릭한 뒤 노드 서버에서 사용할 데이터베이스를 하나 생성한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/6bded363-358d-4d5f-8c27-8868dfac3b81/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/73e07235-1b8b-4793-8901-32c41a357d33/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/24ecdd34-07d1-4044-a50b-1190a78d4095/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/9cdbaa99-846f-4561-9148-fc788405e143/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/dfbd7e48-737b-4e88-a189-95e5e4c58b18/image.png)

---

> ### 7. ec2에 Node 설치하기

1. 위에서 ec2 인스턴스와 연결했던 터미널을 준비한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/013eff06-ce27-4fff-a193-aeaf3ff40ad5/image.png)

---

2. 명령줄에 `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`를 입력하여 nvm(노드 버전 관리자)을 설치한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/491469cb-7358-49f2-80c6-000d0ca3fdf0/image.png)

---

3. 명령줄에 `. ~/.nvm/nvm.sh`를 입력하여 nvm을 활성화한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/9d59e443-6d25-4e01-9a4f-7498a73cfa15/image.png)

---

4. `nvm install 16.0.0`를 입력하여 16.0.0 버전의 Node를 설치해준다.
![](https://velog.velcdn.com/images/fkstndnjs/post/d8273be5-ac40-4693-ae98-28dfc359c1fc/image.png)

---

> ### 8. ec2에 Git 설치하기

1. `sudo yum install git -y`를 입력하여 Git을 설치해준다.
![](https://velog.velcdn.com/images/fkstndnjs/post/25368c35-8769-4a43-a983-ed94de424aa6/image.png)

---

> ### 9. Git 레포지토리에 있는 폴더 가져오기

1. `git clone`으로 레포지토리를 복사한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/d532e04c-10e8-45c7-9e68-3a677a47681b/image.png)

---

2. 만들어진 폴더로 이동한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/79bce4b0-5e3c-4079-94a9-29577a3b50c0/image.png)

---

3. `npm i` 명령으로 패키지를 다운받는다.
![](https://velog.velcdn.com/images/fkstndnjs/post/d109d554-3c3c-4588-8d60-8f678ca79a34/image.png)

---

4. `vim`으로 `.env` 파일을 설정해준다. 데이터베이스 host는 위에서처럼 RDS의 엔드포인트로 해주면 된다.
![](https://velog.velcdn.com/images/fkstndnjs/post/b30dbd82-18a8-49d1-8ad4-ec805173c883/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/6514a139-9f94-44d0-ab6a-8f67da976151/image.png)

---

> ### 10. 포트 리디렉션

1. 포트번호를 1024 밑으로 열려고 하면 설정이 복잡하기 때문에 Node 서버를 `8080`포트로 연 뒤 `80`포트로 들어오는 요청들을 `8080` 포트로 리디렉션하여 받을 것이다. 그러기 위해서는 `sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080` 이 명령을 ec2와 연결된 터미널에 입력하면 된다.
![](https://velog.velcdn.com/images/fkstndnjs/post/e9db0ecb-0fa6-4b71-a0b3-d9ee7d6fe2c1/image.png)

---

> ### 11. 코드 빌드 후 pm2로 서버 실행

1. 설정한 스크립트로 빌드 후 서버를 실행한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/7c28ef40-123e-458b-9215-c6f24a2cbfc5/image.png)

---

2. `npx pm2 log`로 서버가 잘 돌아가고 있는지 확인한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/d82e71bd-9eb8-498f-ab86-39feb92c3f0e/image.png)

---

3. DBeaver에서 테이블이 잘 생성되었는지 확인한다.
![](https://velog.velcdn.com/images/fkstndnjs/post/0813f62d-38bf-46ff-9168-a9a7d4bc4e5c/image.png)


---

> ### 12. Postman으로 테스트

- host는 ec2의 `퍼블릭 IPv4 주소`를 이용하면 된다.
- 로컬에서 `http://localhost:8080/tweet` 이런식으로 요청을 보냈었다면, 이제는 `http://{퍼블릭 IPv4 주소}/tweet`로 요청을 보내면 된다.
![](https://velog.velcdn.com/images/fkstndnjs/post/797f50b7-f58e-4bf4-bbfa-12ff88bff154/image.png)

---

1. 회원가입
![](https://velog.velcdn.com/images/fkstndnjs/post/a7b6e0cb-8874-4ccd-bc48-b0866394729f/image.png)

---

2. 로그인
![](https://velog.velcdn.com/images/fkstndnjs/post/567f87df-9534-4a95-af73-ca1c0f306406/image.png)

---

3. CRUD
![](https://velog.velcdn.com/images/fkstndnjs/post/413da1f7-2326-43d3-93bb-b45f4c4bdf34/image.png)

