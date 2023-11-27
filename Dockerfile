FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY dist/final.cjs ./final.cjs
COPY prisma/ ./prisma/
COPY package.json . 
COPY package-lock.json .
RUN npm i

RUN npx prisma generate
RUN npx prisma migrate
ENV PATH=/usr/local/bin:$PATH

CMD ["node","./final.cjs"]
