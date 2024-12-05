FROM node:16 as builder
WORKDIR /app
COPY package.json .
RUN npm install --force
#RUN npm install express -g --force
COPY . .
ENV GENERATE_SOURCEMAP=false
RUN npm run build --max-old-space-size=3072
#
#FROM node:16-alpine
#WORKDIR /app
##COPY --from=builder /app/build /app
##COPY --from=builder /app/package.json /app
#COPY --from=builder /app/* /app
#
#EXPOSE 3000
#
#
## start app
CMD ["npm", "run", "start"]