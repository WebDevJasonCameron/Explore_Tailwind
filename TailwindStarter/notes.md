
### 1. Getting ready

'''npm init -y'''
''npm i -D tailwindcss''
'''npx tailwindcss init'''

### 2. File mod
in tailwind.config.js file: 
```config
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: [
    extend: {},
    ],
    plugins: [],
}
```

### 3. Create input.css file 
Usually it's in the source folder with: 
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run npm scripts in package.json file
4.a Within the file, delete the test script
4.b Replace with:
```config
"build": "tailwindcss -i ./input.css -o ./css/style.css"
"watch": "tailwindcss -i ./input.css -o ./css/style.css --watch"
```
4.c This replaces the need to run the following in the terminal everytime there is a change
```cli
npx tailwindcss -i ./src/input.css -o ./dist/output.css -watch
```

### 5. Finally
Run the following in the terminal:
```cli
npm run build
```

### 6. To watch, run...

```npm run watch```
