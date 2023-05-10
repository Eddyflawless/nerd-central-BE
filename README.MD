
- npx lerna init && npm install 
- add .gitignore file if it doesn't exist
- npm install typescript @types/node --save-dev @types/express-serve-static-core @types/express@latest
- npm install prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
- lerna add @hades/docktor --scope=integration
- npx lerna run test --scope=auth
- npx lerna add @supercharge/strings --scope=integration
- npx lerna run test --scope=api
- npm init @eslint/config
- npm install -D husky
- npm set-script prepare "husky install" && npm run prepare
- npx husky set .husky/pre-commit "[command] eg: npm run lint && npm run test"

### To do
- [ ] Add auth package
- [ ] Add post service