FROM node:14

LABEL Sela_Aulia_Siswanto <1941720196@student.polinema.ac.id>
RUN mkdir -p /backend
WORKDIR /backend
COPY package*.json /backend/

RUN npm install
COPY . .
EXPOSE 4000

CMD [ "node", "index.js" ]