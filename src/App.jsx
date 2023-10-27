import "./global.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio.É um projeot que fiz no NLW Return, evento da RocketSeat.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rvbelo.png",
      name: "Renato Vieira",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "Fala galera 1" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio.É um projeot que fiz no NLW Return, evento da RocketSeat.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-08-20 20:00:00')
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
           return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
           )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
