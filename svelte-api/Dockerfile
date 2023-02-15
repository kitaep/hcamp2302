FROM node:18-alpine

#change working directory
WORKDIR /app

# copy file
COPY . .

# install dependencies
RUN npm install

# expose port
EXPOSE 3000

# build
RUN npm run build

# start
# CMD ["npm", "run", "preview", "--host", "0.0.0.0"]
ENV ORIGIN=http://localhost:3000
# ENV HOST=0.0.0.0
# ENV PORT=4173

CMD ["node", "-r", "dotenv/config", "build"]