import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './components/App.module.css'

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
{
  id:1,
  author: {
    avatarUrl: 'data:image/jpeg;base64,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',
    name: 'Diego Fernandes',
    role: 'Web Developer'
  },
  content: [
    {type: 'paragraph', content:'Fala galeraa 👋,'},
    {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content:'jane.design/doctorcare'}
  ],
  publishedAt: new Date('2023-05-22 20:00:00')
},
{
  id:2,
  author: {
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlV4577BzF0daL5LqqKBAZAJ_8MCfUKsIuNJ7V_YP51qSBGCLS3pkT57iPFycGUWpznY&usqp=CAU',
    name: 'Mayk Brito',
    role: 'Educator'
  },
  content: [
    {type: 'paragraph', content:'Fala galeraa 👋,'},
    {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content:'jane.design/doctorcare'}
  ],
  publishedAt: new Date('2023-05-23 20:00:00')
},
];

export function App() {

  return (

    <div>
      <Header/>

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
         {posts.map(post => {
           return (
           <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
           />
           )
         })}
        </main>
      </div>
    </div>
      
  )
}

