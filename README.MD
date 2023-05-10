
- npx lerna init && npm install 
- add .gitignore file if it doesn't exist
- npm install typescript @types/node --save-dev @types/express-serve-static-core @types/express@latest
- npm install prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
- lerna add @hades/docktor --scope=integration
- npx lerna run test --scope=auth
- npx lerna add @supercharge/strings --scope=integration
- npx lerna run test --scope=api
- npm init @eslint/config
- npx husky-init && npm install

### To do
- [ ] Add auth package
- [ ] Add post service