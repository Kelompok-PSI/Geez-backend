FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY dist/final.cjs ./final.cjs
COPY prisma/ ./prisma/
COPY package*.json . 
RUN npm ci

RUN npx prisma migrate 
RUN npx prisma generate 

ENV PATH=/usr/local/bin:$PATH
RUN rm -f package*.json
CMD ["node","./final.cjs"]
