import { Layout } from '@/components/Layout'
import Link from 'next/link'
import EventItem from '@/components/EventItem'
import {API_URL} from '@/config/index'

export default function Home({events}) {
  console.log(events)
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No event(s) to show</h3>}
      {events.map(item => (
        <EventItem key={item.id} item={item} />
      ))}

      {events.length > 0 && (
        <Link href="/events" className="btn-secondary">
        View All
        </Link>
      )}
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`) 
//   const events = await res.json()

//   return {
//     props: { events },
//     // revalidate: 1
//   }
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`) 
  const events = await res.json()

  return {
    props: { events: events.slice(0,3) },
    revalidate: 1
  }
}