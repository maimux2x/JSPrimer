console.log("index.js: loaded");
console.log("index.js: Hiii!!");
console.log("index.js: Hello!!");

// CSSセレクタを使ってDOMツリー中のh2要素を取得する
const heading = document.querySelector("h2");
// h2要素に含まれるテキストコンテンツを取得する
const headingText = heading.textContent;

// button要素を作成する
const button = document.createElement("button");
button.textContent = "Push Me";
// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);
console.log(headingText);

button.onclick = ((e) => console.log(e.target.textContent));

const userId = "maimux2x";
fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
        console.log(response.status); // => 200
        return response.json().then(userInfo => {
            // JSONパースされたオブジェクトが渡される
            console.log(userInfo); // => {...}
        });
    }, e => e).catch((e) => e)

    // fetchを実行するとPromiseが帰ってくる
    // resolveはthenに結果が渡る
    // {login: 'maimux2x', id: 76797372, node_id: 'MDQ6VXNlcjc2Nzk3Mzcy', avatar_url: 'https://avatars.githubusercontent.com/u/76797372?v=4', gravatar_id: '', …}
    