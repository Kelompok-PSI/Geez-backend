FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY dist/final.cjs ./final.cjs
COPY prisma/ ./prisma/
COPY package*.json . 
RUN npm ci
RUN npx prisma generate

RUN npx prisma migrate dev 
RUN ["node","./prisma/seed.js"]
RUN npx prisma studio
ENV PATH=/usr/local/bin:$PATH
CMD ["node","./final.cjs"]
