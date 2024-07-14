# hw-be
## frontend執行

  - 我個人是使用vue-cli,所以前置是安裝vue-cli:
    - @vue/cli 5.0.8
    
  - 前端沒有容器化，所以
    1. npm install
    2. npm run serve
  - 為了良好了開發習慣，我並沒有將對於table的Field與對應的.env上傳
  
## backend執行

  - 可以直接安裝docker-compose即可
    - Docker version 26.0.0
    - Docker Compose version v2.26.1
    
  - 安裝好container後，需要與container互動，故：
    1. docker exec -it hw-backend bash
    2. pip3 install -r requirements.txt
    3. flask run --host=0.0.0.0 --port=10001
    
  - 我可以額外提供db的table的create與序列器DDL.
