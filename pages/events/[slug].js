// import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { API_URL } from "@/config";
import styles from '@/styles/Event.module.css'
import Image from "next/image";
import Link from "next/link";
import {FaPencilAlt, FaTimes} from 'react-icons/fa'

export const EventPage = ({item}) => {
// const  router = useRouter()

// console.log(router)
  
  const deleteEvent = (e) => {
    console.log('Deleted')
  }

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${item.id}`}>
            <FaPencilAlt/> Edit Event 
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>{item.date} at {item.time}</span>
        <h1>{item.name}</h1>
        {item.image && (
          <div className={styles.image}>
          <Image src={item.image} alt='hjk' width={960} height={600} /> 
          </div>
        )}

        <h3>Performers: </h3>
        <p>{item.performers}</p>
        <h4>{item.description}</h4>
        <h3>Venue: {item.venue}</h3>
        <p>{item.address}</p>

        <Link href='/' className={styles.back}>{'<'} Go Back</Link>
      </div>

    </Layout>

  )
}

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  const paths = events.map(item => ({
    params: {slug: item.slug}
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {slug}}) {
  console.log(slug) 
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()

  return {
    props: {
      item: events[0],
      revalidate: 1
    }
  }
}

// export async function getServerSideProps({query: {slug}}) {
//   console.log(slug)
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       item: events[0]
//     }
//   }
// }