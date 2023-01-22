import { Header }  from './components/Header';
import { Post }  from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './assets/global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marcovicar.png',
      name: 'Marcos Victor',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' } ,
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'marcovicar/doctorcare'},

    ],
    publishedAt: new Date('2022-12-19 22:08:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ViniciusCoelho98.png',
      name: 'Vinicius Coelho',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera do anime 👋' } ,
      { type: 'paragraph', content: 'Acabei de subir mais um projeto de waifu no meu portifolio mó daora. É um projeto que fiz quando estava webnamorando uma personagem de anime. O nome do projeto é otakuFedido 👌' },
      { type: 'link', content: 'ViniciusCoelho98/otakuFedido'},

    ],
    publishedAt: new Date('2022-12-19 22:10:00'),
  },
];

export function App() {
  return (
    <>
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
    </>
  )
}